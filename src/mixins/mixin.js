export default {
    methods: {
        createFirstAblMedication(firstAblId) {
            this.axios.get( this.$store.getters.apiRoot + '/1st-abl/' + firstAblId + '/medication_id', {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
            }
            ).then(( response ) => {
                const medId = response.data
                this.$router.push( { name: 'AblationMedication', params: { medicationId: medId } } )
            });
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
    }
}
