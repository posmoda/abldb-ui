<template>
    <div class="pageInformation">
        <div class="sticky">
        <h1><a href="/abldb/">KUHP Cardio Ablation Registry</a></h1>
        <dl class="pageInformation__ptNumber">
            <dt>症例番号</dt>
            <dd>{{ currentPatient.patientNumber }}</dd>
        </dl>
        <section class="header__user">
            <table>
                <tr>
                    <th>所属</th>
                    <td>{{ loginUser.hospital }}</td>
                </tr>
                <tr>
                    <th>ユーザー名</th>
                    <td>{{ loginUser.id }}</td>
                </tr>
            </table>
            <p><button v-on:click="doLogout">ログアウト</button></p>
        </section>
        </div>
        <section class="header__contents">
        <dl>
            <dt>インデックス</dt>
            <dd>
                <ul>
                    <li v-for="(items, chapter) in contents" :key="chapter">{{ chapter }}
                        <ul>
                            <li v-for="(id, item) in items" :key="item.key">{{ item }}</li>
                        </ul>
                    </li>
                </ul>
            </dd>
        </dl>
        </section>
    </div>
</template>
<script>
export default {
    name: 'PageInformation',
    props: [
        'contents'
    ],
    computed: {
        currentPatient() {
            return this.$store.getters.currentPatient;
        },
        loginUser() {
            return this.$store.getters.loginUser;
        }
    },
    methods: {
        doLogout() {
            let request = {
                order: 'logout',
                token: this.$store.getters.loginToken
            }
            let that = this
            this.axios.post( this.$store.getters.apiRoot + "/login", request ).then( function() {
                that.$store.commit( "UPDATE_USER", {
                    id: null,
                    hospital: null,
                    token: null       
                });
                that.$router.go({ path: that.$router.currentRoute.path, force: true });
            }).catch( function() {
                that.$store.commit( "UPDATE_USER", {
                    id: null,
                    hospital: null,
                    token: null       
                });
                that.$router.go({ path: that.$router.currentRoute.path, force: true });

            })
        }
    }
}
</script>
<style scoped>
h1 {
    margin: 0;
    margin-bottom: 0.5em;
    width: 50%;
    background-color: #80abb0;
    color: #fcfcfc;
    line-height: 1em;
    padding: 0.5em;
    font-size: 20px;
    font-family: Century Gothic、CenturyGothic、AppleGothic、sans-serif;
    border-radius: 10px;
    text-align: center;
    border: 5px #dddddd solid;
    float: left;
    overflow: hidden;
}
h1 a,
h1 a:hover,
h1 a:visited {
    color: inherit;
    text-decoration: inherit;
}
div.sticky {
    margin: 0;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #718ca0;
    padding-top: 20px;
    padding-bottom: 5px;
}
div.pageInformation {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    background-color: #718ca0;
    padding: 10px;
    padding-top: 0;
    overflow: scroll;
    overflow-x: hidden;
}
dl.pageInformation__ptNumber {
    color: #fcfcfc;
    text-align: center;
}
/*dl.pageInformation__ptNumber dt:after {
    content: ':';
}*/
dl.pageInformation__ptNumber dd {
    font-weight: bold;
    font-size: 3rem;
    line-height: 1em;
}
section.header__user {
    clear: both;
}
section.header__user table {
    margin: 0 auto;
}
section.header__user th {
    text-align: right;
}
section.header__user th:after {
    content: "：";
}
section.header__user td {
    color: #fcfcfc;
    font-weight: bold;
}
section.header__user p {
    text-align: center;
    margin: 0.5em;
}
section.header__contents {
    position: relative;
    bottom: 0;
}
section.header__contents dl {
    padding: 0;
    margin: 0;
}
section.header__contents dt {
    border-bottom: 1px solid #fcfcfc;
    color: #fcfcfc;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5em;
}
section.header__contents dd {
    margin: 0;
}
section.header__contents dd ul {
    list-style: none;
    color: #fcfcfc;
    font-weight: bold;
}
section.header__contents dd > ul {
    padding: 0;
}
section.header__contents dd > ul > li > ul {
    font-weight: normal;
    font-size: 0.8rem;
    padding-left: 30px;
}
</style>
