<template>
    <table>
        <thead>
            <tr>
                <th>No.</th><th>基本情報</th><th>初回アブレーション</th><th>追加アブレーション</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="patient in patients" v-bind:key="patient.id">
                <td>{{ patient.patientSerialNumber }}</td>
                <td>{{ patient.baseline }}</td>
                <td>{{ patient.firstAblation }}</td>
                <td>{{ patient.followingAblation }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {
            patients: [
                { patientSerialNumber: 1, baseline: true, firstAblation: true, followingAblation: false }
            ]
        }
    }
}
</script>
