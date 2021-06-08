<template>
    <div>
        <ul class="pagenation">
            <li v-for="page of reversedTotalPages" :key="page" v-on:click="getPatientList(page)" v-bind:class="[Math.floor(patients[patients.length - 1].patientNumber / 100 + 1) == page ? 'current' : '']">{{ page * 100 - 99 }}</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <th>症例番号</th><th>ベースライン</th><th>初回ABL</th><th>初回ABL処方</th><th>追加ABL</th><th>フォローアップ外来</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" v-bind:key="patient.patientSerialNumber">
                    <td>{{ patient.patientNumber }}</td>
                    <td><a v-on:click="goBaseline(patient.patientSerialNumber)">入力</a></td>
                    <td><a v-on:click="goFirstAblation(patient.patientSerialNumber)" v-bind:class="[patient.firstAblationId ? '' : 'notice' ]"><span v-if="patient.firstAblationId">入力あり</span><span v-else>新規入力</span></a></td>
                    <td v-if="patient.firstAblationId === null"></td>
                    <td v-else-if="patient.internalMedicineId"><a v-on:click="goFirstAblMedication(patient.patientSerialNumber, patient.internalMedicineId)">入力あり</a></td>
                    <td v-else><a class="notice" v-on:click="createFirstAblMedication(patient.patientSerialNumber, patient.firstAblationId)">新規入力</a></td>
                    <td>
                        <ol class="followingAblList">
                            <li v-for="(ablation, index) in patient.followingAblations" v-bind:key="patient.patientSerialNumber + ablation"><router-link :to="{ name: 'FollowingAblation', params: { followAblationId: ablation }}">{{ index + 2 }}</router-link></li>
                        </ol>
                        <p><a class="notice" v-on:click="openFollowAblModal(patient.patientSerialNumber)">新規追加</a></p>
                    </td>
                    <td><a v-on:click="goFollowUp(patient.patientSerialNumber)" v-bind:class="[patient.followUpId ? '' : 'notice']"><span v-if="patient.followUpId">入力あり</span><span v-else>新規入力</span></a></td>
                </tr>
            </tbody>
        </table>
        <ul class="pagenation">
            <li v-for="page of reversedTotalPages" :key="page" v-on:click="getPatientList(page)" v-bind:class="[Math.floor(patients[0].patientNumber / 100 + 1) == page ? 'current' : '']">{{ page * 100 - 99 }}</li>
        </ul>
        <Modal @close="closeFollowAblModal" v-if="followAblModal">
            <p>追加アブレーションを新規登録しますか?</p>
            <template slot="footer">
                <button v-on:click="requestFollowAblation">OK</button><button v-on:click="closeFollowAblModal">キャンセル</button>
            </template>
        </Modal>
    </div>
</template>
<script>
import Modal from '@/components/Modal.vue'
export default {
    name: 'PatientList',
    components: { Modal },
    data: function() {
        return {
            patients: [
                { patientSerialNumber: 1, baseline: true, firstAblation: true, followingAblation: false }
            ],
            totalPatients: 0,
            followAblModal: false
        }
    },
    methods: {
        getPatientList( page ) {
            this.axios.get( this.$store.getters.apiRoot + '/patientlist/' + page, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.patients = response.data.patients;
                this.totalPatients = response.data.totalPatients;
                this.$store.commit( 'UPDATE_CURRENT_PAGE', page )
            });
        },
        goBaseline( number ) {
            this.$store.commit( 'UPDATE_PATIENT_ID', number );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push({ name: 'Register', params: { patientId: number }});
        },
        goFirstAblation( number ) {
            this.$store.commit( 'UPDATE_PATIENT_ID', number );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push({ name: 'FirstAblation', params: { patientId: number } });
        },
        goFirstAblMedication( patientId, medicationId ){
            this.$store.commit( 'UPDATE_PATIENT_ID', patientId );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push({ name: 'AblationMedication', params: { medicationId: medicationId } });
        },
        goFollowUp( patientId ){
            this.$store.commit( 'UPDATE_PATIENT_ID', patientId );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push({ name: 'FollowUp', params: { patientId: patientId } });
        },
        createFirstAblMedication( patientId, firstAblId ) {
            this.$store.commit( 'UPDATE_PATIENT_ID', patientId );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.axios.get( this.$store.getters.apiRoot + '/1st-abl/' + firstAblId + '/medication_id'
            ).then(( response ) => {
                const medId = response.data;
                this.$router.push( { name: 'AblationMedication', params: { medicationId: medId } } );
            });
        },
        openFollowAblModal(patientId) {
            this.$store.commit( 'UPDATE_PATIENT_ID', patientId );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.followAblModal = true;
        },
        closeFollowAblModal() {
            this.followAblModal = false;
        },
        requestFollowAblation() {
            this.axios.get( this.$store.getters.apiRoot + '/following_ablation/new/' + this.$store.getters.patientId, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.$router.push({ name: 'FollowingAblation', params: { followAblationId: response.data } });
            });
        }
    },
    mounted() {
        this.getPatientList( this.$store.getters.currentPage );
    },
    computed: {
        totalPages() {
            return Math.floor( this.totalPatients / 100 ) + 1;
        },
        reversedTotalPages() {
            var total = Math.floor( this.totalPatients / 100 ) + 1;
            var array = []
            for ( var i = 0; i < total; i++ ) {
                array.push( total - i );
            }
            return array;
        }
    }
}
</script>
<style scoped>
table {
    width: 100%;
    font-size: 1.2rem;
    margin: 0 auto;
    text-align: center;
}
thead {
    background-color: #718ca0;
    color: #fcfcfc;
    position: sticky;
    top: 80px;
    font-size: 1rem;
}
th, td {
    padding: 5px;
}
tbody {
    background-color: #fcfcfc;
    white-space: nowrap;
}
table a {
    display: block;
    background-color: #80abb0;
    border-radius: 5px;
    padding: 2px 10px;
    font-weight: bold;
    color: #fcfcfc;
    text-decoration: none;
    cursor: pointer;
}
table a.notice {
    background-color: #e26061;
}
ol.followingAblList {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    margin-left: -2.5px;
    margin-bottom: 5px;
}
ol.followingAblList li {
    display: block;
    margin: 0 2.5px;
    margin-bottom: 5px;
}
table p {
    margin: 0;
}
ul.pagenation {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
}
ul.pagenation li {
    display: block;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    margin: 2.5px;
    background-color: #80abb0;
    cursor: pointer;
}
ul.pagenation li.current {
    background-color: #e26061;
}
</style>
