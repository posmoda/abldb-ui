export default {
    methods: {
        createFirstAblMedication(firstAblId) {
            this.axios.get( this.$store.getters.apiRoot + '/1st-abl/' + firstAblId + '/medication_id'
            ).then(( response ) => {
                const medId = response.data
                this.$router.push( { name: 'AblationMedication', params: { medicationId: medId } } )
            });
        },
        requestFollowAblation() {
            this.axios.get( this.$store.getters.apiRoot + '/following_ablation/new/' + this.$store.getters.patientId
            ).then(( response ) => {
                this.$router.push({ name: 'FollowingAblation', params: { followAblationId: response.data } });
            });
        }
    }
}
