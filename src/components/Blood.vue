<template>
    <section class="blood">
            <p class="form__row">
                <label for="blood__cre">Cre</label>
                <input type="number" step="0.1" name="blood__cre" id="blood__cre" v-model="blood.cre">mg/dL
            </p>
            <p class="form__row">
                <label for="blood__bnp">BNP</label>
                <input type="number" step="0.1" name="blood__bnp" id="blood__bnp" v-model="blood.bnp">pg/mL
            </p>
            <p class="form__row">
                <label for="blood__bnp">NT-proBNP</label>
                <input type="number" step="0.1" name="blood__ntProBnp" id="blood__ntProBnp" v-model="blood.ntProBnp">pg/mL
            </p>
    </section>
</template>
<script>
export default {
    name: 'Blood',
    props: {
        bloodId: Number
    },
    data() {
        return {
            blood: {}
        }
    },
    methods: {
        informBloodId: function( id ) {
            console.log('BloodID:' + id )
            this.$emit( 'getBloodId', id );
        },
        getBlood: function( id ) {
            this.axios.get(
                this.$store.getters.apiRoot + '/blood/' + id, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
                }
            ).then(( response ) => {
                this.blood = response.data;
            });        
        },
        updateBlood: function() {
            this.axios.post(
                this.$store.getters.apiRoot + '/blood/' + this.blood.bloodId,
                this.blood, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken }
                }
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'Blood update: SUCCESS' );
                } else {
                    console.log( 'Blood update: FAILED' );
                }
            });
        }
    },
    //computed: {
    //    ucgId: function() {
    //        return this.props.ucgId;
    //    }
    //},
    watch: {
        bloodId: function( newId ) {
            this.getBlood( newId );
        }
    },
    beforeUpdate: function() {
        this.updateBlood();
    }
}
</script>
