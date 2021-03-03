<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>症例番号</th><th>ベースライン</th><th>初回ABL</th><th>初回ABL処方</th><th>追加ABL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" v-bind:key="patient.patientSerialNumber">
                    <td>{{ patient.patientSerialNumber }}</td>
                    <td><a v-on:click="goBaseline(patient.patientSerialNumber)">入力</a></td>
                    <td><a v-on:click="goFirstAblation(patient.patientSerialNumber)"><span v-if="patient.firstAblationId">入力あり</span><span v-else>新規入力</span></a></td>
                    <td v-if="patient.internalMedicineId"><router-link :to="{name: 'AblationMedication', params: {medicationId: patient.internalMedicineId}}">入力あり</router-link></td>
                    <td v-else><a v-on:click="createFirstAblMedication(patient.firstAblationId)">新規入力</a></td>
                    <td>
                        <ol>
                            <li v-for="ablation in patient.followingAblations" v-bind:key="patient.patientSerialNumber + ablation"><router-link :to="{ name: 'FollowingAblation', params: { followAblationId: ablation }}">{{ ablation }}</router-link></li>
                        </ol>
                        <p><a v-on:click="openFollowAblModal(patient.patientSerialNumber)">新規追加</a></p>
                    </td>
                </tr>
            </tbody>
        </table>
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
            followAblModal: false
        }
    },
    methods: {
        getPatientList() {
            this.axios.get( this.$store.getters.apiRoot + '/patients'
            ).then(( response ) => {
                this.patients = response.data;
            });
        },
        goBaseline(number) {
            this.$store.commit( 'UPDATE_PATIENT_ID', number );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push( 'register', true, false );
        },
        goFirstAblation( number ) {
            this.$store.commit( 'UPDATE_PATIENT_ID', number );
            this.$store.dispatch( 'updatePatientIdAction' );
            this.$router.push( 'first_ablation', true, false );
        },
        createFirstAblMedication(firstAblId) {
            this.axios.get( this.$store.getters.apiRoot + '/1st-abl/' + firstAblId + '/medication_id'
            ).then(( response ) => {
                const medId = response.data
                this.$router.push( { name: 'AblationMedication', params: { medicationId: medId } } )
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
            this.axios.get( this.$store.getters.apiRoot + '/following_ablation/new/' + this.$store.getters.patientId
            ).then(( response ) => {
                this.$router.push({ name: 'FollowingAblation', params: { followAblationId: response.data } });
            });
        }
    },
    mounted() {
        this.getPatientList();
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
}
th, td {
    padding: 2px 10px;
}
tbody {
    background-color: #fcfcfc;
}
table a {
    display: block;
    background-color: #80abb0;
    border-radius: 5px;
    padding: 2px 10px;
    font-weight: bold;
    color: #fcfcfc;
}
</style>
