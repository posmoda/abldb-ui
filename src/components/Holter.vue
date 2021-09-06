<template>
    <section class="holter">
            <p class="form__row">
                <label for="holter__date">Holter施行日</label>
                <input type="date" name="holter__date" id="holter__date" v-model="holter.date">
            </p>
            <p class="form__row">
                <label for="holter__recordedHours">記録時間(時)</label>
                <input type="number" step="1" name="holter__recordedHours" id="holter__recordedHours" v-model="holter.recordedHours">
            </p>
            <p class="form__row">
                <label for="holter__recordedMinutes">記録時間(分）)</label>
                <input type="number" step="1" name="holter__recordedMinutes" id="holter__recordedMinutes" v-model="holter.recordeMinutes">
            </p>
            <p class="form__row">
                <label for="holter__totalPac">PACの総数(洞調律の場合)</label>
                <input type="number" step="1" name="holter__totalPac" id="holter__totalPac" v-model="holter.totalPac">
            </p>
            <p class="form__row">
                <label for="holter__pacRatio">PACの割合％(基本が洞調律の場合)</label>
                <input type="number" step="0.1" name="holter__pacRatio" id="holter__pacRatio" v-model="holter.pacRatio">
            </p>
            <p class="form__row">
                <label for="holter__singlePacNumber">単発の数</label>
                <input type="number" step="1" name="holter__singlePacNumber" id="holter__singlePacNumber" v-model="holter.singlePacNumber">
            </p>
            <p class="form__row">
                <label for="holter__doublePacNumber">2連発の数</label>
                <input type="number" step="1" name="holter__doublePacNumber" id="holter__doublePacNumber" v-model="holter.doublePacNumber">
            </p>
            <p class="form__row">
                <label for="holter__manyPacNumber">3連発以上の数</label>
                <input type="number" step="1" name="holter__manyPacNumber" id="holter__manyPacNumber" v-model="holter.manyPacNumber">
            </p>
            <p class="form__row">
                <label for="holter__maxPacNumber">PAC最大連発数</label>
                <input type="number" step="1" name="holter__maxPacNumber" id="holter__maxPacNumber" v-model="holter.maxPacNumber">
            </p>
            <p class="form__row">
                <label for="holter__fastestBpmByManyPac">PAC連発による最速bpm</label>
                <input type="number" step="1" name="holter__fastestBpmByManyPac" id="holter__fastestBpmByManyPac" v-model="holter.fastestBpmByManyPac">
            </p>
            <p class="form__row">
                <label for="holter__singlePacRatio">single PACの連結％</label>
                <input type="number" step="0.1" name="holter__singlePacRatio" id="holter__singlePacRatio" v-model="holter.singlePacRatio">
            </p>
    </section>
</template>
<script>
export default {
    name: 'Holter',
    props: {
        holterId: Number
    },
    data() {
        return {
            holter: {}
        }
    },
    methods: {
        informHolterId: function( id ) {
            console.log('HolterID:' + id )
            this.$emit( 'getHolterId', id );
        },
        getHolter: function( id ) {
            this.axios.get(
                this.$store.getters.apiRoot + '/holter/' + id, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
                }
            ).then(( response ) => {
                this.holter = response.data;
            });        
        },
        updateHolter: function() {
            this.axios.post(
                this.$store.getters.apiRoot + '/holter/' + this.holterId,
                this.holter, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken }
                }
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'Holter update: SUCCESS' );
                } else {
                    console.log( 'Holter update: FAILED' );
                }
            });
        },
        testLog: function() {
            console.log( this.holterId );
        }
    },
    //computed: {
    //    ucgId: function() {
    //        return this.props.ucgId;
    //    }
    //},
    watch: {
        holterId: function( newId ) {
            this.getHolter( newId );
        }
    },
    mounted: function() {
        this.getHolter( this.holterId );
    },
    beforeUpdate: function() {
        this.updateHolter();
    }
}
</script>
