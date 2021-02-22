<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>No.</th><th>基本情報</th><th>初回アブレーション</th><th>追加アブレーション</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" v-bind:key="patient.patientSerialNumber">
                    <td>{{ patient.patientSerialNumber }}</td>
                    <td><a v-on:click="goBaseline(patient.patientSerialNumber)">{{ patient.baseline }}</a></td>
                    <td><router-link to="/first_ablation">{{ patient.firstAblation }}</router-link></td>
                    <td><router-link to="/following_ablation">{{ patient.followingAblation }}</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'PatientList',
    data: function() {
        return {
            patients: [
                { patientSerialNumber: 1, baseline: true, firstAblation: true, followingAblation: false }
            ]
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
            this.$router.push( 'register', true, false );
        }
    },
    mounted() {
        this.getPatientList();
    }
}
</script>
