<template>
    <div class="userSettings">
        <section class="settings__admin" v-if="loginUser=='admin'">
            <h1>ユーザ追加</h1>
            <p><label>新規ID<input type="text" name="settings__newUserName" id="settings__newUserName" autocomplete="off" v-model="newUser.id"></label></p>
            <p><label>所属
                <select name="settings__newUserInstitute" id="settings__newUserInstitute" v-model="newUser.institute">
                    <option v-for="(institute, index) in existingUsers.institutes" :key="index" :value="index">{{ institute }}</option>
                    <option :value="false">新規登録</option>
                </select>
            </label>
            <label v-if="newUser.institute == false">新規所属<input type="text" v-model="newUser.newInstitute"></label>
            </p>
            <p><label>新規パスワード<input type="password" name="settings__newPassword" id="settings__newPassword" autocomplete="off" v-model="newUser.password"></label></p>
            <p><button v-on:click="postNewUser">新規登録</button><span v-if="message">{{ message }}</span></p>
        </section>
        <section class="settings__password">
            <h1>パスワード変更</h1>
            <p><label>現在のパスワード<input type="password" name="settings__currentPassword" id="settings__currentPassword" v-model="changePassword.current"></label></p>
            <p><label>新しいパスワード<input type="password" name="settings__changedPassword" id="settings__changedPassword" autocomplete="off" v-model="changedPassword.newOne"></label></p>
            <p><button v-on:click="changePassword">変更</button><span v-if="passwordMessage">{{ passwordMessage }}</span></p>
        </section>
    </div>
</template>
<script>
import jssha from 'jssha'
export default {
    name: 'UserSettings',
    computed: {
        loginUser() {
            return this.$store.getters.loginUser.id;
        }
    },
    data() {
        return {
            newUser: {
                id: null,
                institute: null,
                password: null,
                passwordCheck: null,
                newInstitute: null
            },
            changedPassword: {
                current: null,
                newOne: null,
            },
            existingUsers: {
                ids: [],
                institutes: {
                    1: "Kyodai",
                    2: "Todai"
                }
            },
            message: "",
            passwordMessage: ""
        }
    },
    methods: {
        getExistingUsers() {
            this.axios.get( this.$store.getters.apiRoot + '/existing_users', {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            } ).then(( response ) => {
                this.existingUsers = response.data;
            });
        },
        postNewUser() {
            const newInstitute = this.newUser.newInstitute;

            if( !this.newUser.institute ) {
                this.postNewInstitute( newInstitute ).then( response => {
                    console.log( response );
                    if( response.message === 'OK' ) {
                        this.newUser.institute = response.instituteNum;
                        this.getExistingUsers();
                        this.postNewUserComm();
                    } else {
                        this.message = '失敗ですよ';
                    }
                })
            } else {
                this.postNewUserComm();
            }
        },
        postNewUserComm() {
            let sha = new jssha( "SHA-256", "TEXT" );
            const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            const salt = Array.from(crypto.getRandomValues(new Uint32Array(64))).map((n)=>letters[n%letters.length]).join('');
            sha.update( this.newUser.password + salt );
            let hash = sha.getHash( "HEX" );

            let newUser = {
                user: this.newUser.id,
                institute: this.newUser.institute,
                salt: salt,
                hash: hash
            }
            
            this.axios.post( this.$store.getters.apiRoot + "/new_user", newUser, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            } ).then( response => {
                this.message = response.data.message;
            } )
        },
        postNewInstitute(instituteName) {
            return new Promise(( resolve, reject ) => {
                this.axios.post( this.$store.getters.apiRoot + "/new_institute", { institute: instituteName }, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                } ).then( response => {
                    resolve(response.data);
                } ).catch( error => reject( error ) )
            })
        },
        changePassword() {
            let request = {
                user: this.$store.getters.loginUser.id,
                order: 'salt'
            };
            let sha = new jssha("SHA-256", "TEXT");
            let salt = '';
            this.axios.post(this.$store.getters.apiRoot + "/login", request).then(response => {
                salt = response.data.salt;
                sha.update(this.changePassword.current + salt);
                let hash = sha.getHash("HEX");
                console.log("firsthash: " + hash);

                const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                const userSalt = Array.from(crypto.getRandomValues(new Uint32Array(64))).map((n)=>letters[n%letters.length]).join('');
                //console.log(hash + userSalt);
                sha = new jssha("SHA-256", "TEXT"); 
                sha.update(hash + userSalt);
                hash = sha.getHash("HEX");
                //console.log("finalhash: " + hash)
                const newSalt = Array.from(crypto.getRandomValues(new Uint32Array(64))).map((n)=>letters[n%letters.length]).join('');
                sha = new jssha("SHA-256", "TEXT");
                sha.update(this.changedPassword.newOne + newSalt);
                let newHash = sha.getHash("HEX")

                let changeRequest = {
                    user: this.$store.getters.loginUser.id,
                    userSalt: userSalt,
                    challengeHash: hash,
                    newSalt: newSalt,
                    newHash: newHash
                };
                this.axios.post(this.$store.getters.apiRoot + "/new_password", changeRequest, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }).then(response => {
                    this.passwordMessage = response.data.message;
                })
            });
        }
    },
    mounted: function() {
        this.getExistingUsers();
    }
}
</script>
