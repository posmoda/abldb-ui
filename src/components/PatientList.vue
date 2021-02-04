<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>No.</th><th>基本情報</th><th>初回アブレーション</th><th>追加アブレーション</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="patient in patients" v-bind:key="patient.id">
                    <td>{{ patient.patientSerialNumber }}</td>
                    <td><router-link :to="{ path: 'register', params: { patientSerialNumber: patient.patientSerialNumber }}">{{ patient.baseline }}</router-link></td>
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
            this.axios.post( this.$store.getters.apiRoot + '/patients'
            ).then(( response ) => {
                this.patients = response.data;
            });
        }
    },
    mounted() {
        this.getPatientList();
    }
}
</script>
