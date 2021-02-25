<template>
    <section class="ucg">
        <h2>UCG</h2>
            <p class="form__row">
                <label for="ucg__lvefTeichholz">LVEF (Teichholz)</label>
                <input type="number" step="1" name="ucg__lvefTeichholz" id="ucg__lvefTeichholz" v-model="ucg.lvefTeichholz">
            </p>
            <p class="form__row">
                <label for="ucg__lvefSimpson">LVEF (Simpson)</label>
                <input type="number" step="1" name="ucg__lvefSimpson" id="ucg__lvefSimpson" v-model="ucg.lvefSimpson">
            </p>
            <p class="form__row">
                <label for="ucg__lvdd">LVDd</label>
                <input type="number" step="1" name="ucg__lvdd" id="ucg__lvdd" v-model="ucg.lvdd">
            </p>
            <p class="form__row">
                <label for="ucg__lvds">LVDs</label>
                <input type="number" step="1" name="ucg__lvds" id="ucg__lvds" v-model="ucg.lvds">
            </p>
            <p class="form__row">
                <label for="ucg__lad">LAD</label>
                <input type="number" step="1" name="ucg__lad" id="ucg__lad" v-model="ucg.lad">
            </p>
            <p class="form__row">
                <label for="ucg__laDiameterVertical">LA径 (4C縦)</label>
                <input type="number" step="1" name="ucg__laDiameterVertical" id="ucg__laDiameterVertical" v-model="ucg.laDiameterVertical">
            </p>
            <p class="form__row">
                <label for="ucg__laDiameterHorizontal">LA径 (4C横)</label>
                <input type="number" step="1" name="ucg__laDiameterHorizontal" id="ucg__laDiameterHorizontal" v-model="ucg.laDiameterHorizontal">
            </p>
            <fieldset>
                <legend>MR（４段階）</legend>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades" value="1" v-model.number="ucg.mr4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades" value="2" v-model.number="ucg.mr4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades" value="3" v-model.number="ucg.mr4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades" value="4" v-model.number="ucg.mr4grades"><span>4</span></label>
            </fieldset>
            <fieldset>
                <legend>MR（３段階）</legend>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades" value="1" v-model.number="ucg.mr3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades" value="2" v-model.number="ucg.mr3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades" value="3" v-model.number="ucg.mr3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades" value="4" v-model.number="ucg.mr3grades"><span>severe</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__eE">E/E'</label>
                <input type="number" step="0.1" name="ucg__eE" id="ucg__eE" v-model="ucg.eE">
            </p>
            <p class="form__row">
                <label for="ucg__eWave">E波</label>
                <input type="number" step="0.1" name="ucg__eWave" id="ucg__eWave" v-model="ucg.eWave">
            </p>
            <p class="form__row">
                <label for="ucg__aWave">A波</label>
                <input type="number" step="0.1" name="ucg__aWave" id="ucg__aWave" v-model="ucg.aWave">
            </p>
            <p class="form__row">
                <label for="ucg__dct">DcT</label>
                <input type="number" step="1" name="ucg__dct" id="ucg__dct" v-model="ucg.dct">
            </p>
            <fieldset>
                <legend>AR（４段階）</legend>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades" value="1" v-model.number="ucg.ar4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades" value="2" v-model.number="ucg.ar4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades" value="3" v-model.number="ucg.ar4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades" value="4" v-model.number="ucg.ar4grades"><span>4</span></label>
            </fieldset>
            <fieldset>
                <legend>AR（３段階）</legend>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades" value="1" v-model.number="ucg.ar3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades" value="2" v-model.number="ucg.ar3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades" value="3" v-model.number="ucg.ar3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades" value="4" v-model.number="ucg.ar3grades"><span>severe</span></label>
            </fieldset>
            <fieldset>
                <legend>TR（４段階）</legend>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades" value="1" v-model="ucg.tr4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades" value="2" v-model="ucg.tr4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades" value="3" v-model="ucg.tr4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades" value="4" v-model="ucg.tr4grades"><span>4</span></label>
            </fieldset>
            <fieldset>
                <legend>TR（３段階）</legend>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades" value="1" v-model="ucg.tr3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades" value="2" v-model="ucg.tr3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades" value="3" v-model="ucg.tr3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades" value="4" v-model="ucg.tr3grades"><span>severe</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__trPg">TR-PG</label>
                <input type="number" step="1" name="ucg__trPg" id="ucg__trPg" v-model="ucg.trPg">
            </p>
            <fieldset>
                <legend>MS</legend>
                <label><input type="radio" name="ucg__ms3grades" id="ucg__ms3grades" value="1" v-model="ucg.ms3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__ms3grades" id="ucg__ms3grades" value="2" v-model="ucg.ms3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__ms3grades" id="ucg__ms3grades" value="3" v-model="ucg.ms3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__ms3grades" id="ucg__ms3grades" value="4" v-model="ucg.ms3grades"><span>severe</span></label>
            </fieldset>
            <fieldset>
                <legend>AS（３段階）</legend>
                <label><input type="radio" name="ucg__as3grades" id="ucg__as3grades" value="1" v-model="ucg.as3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__as3grades" id="ucg__as3grades" value="2" v-model="ucg.as3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__as3grades" id="ucg__as3grades" value="3" v-model="ucg.as3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__as3grades" id="ucg__as3grades" value="4" v-model="ucg.as3grades"><span>severe</span></label>
            </fieldset>
            <h2>TEE</h2>
            <fieldset>
                <legend>SEC（４段階）</legend>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades" value="1" v-model="ucg.sec4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades" value="2" v-model="ucg.sec4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades" value="3" v-model="ucg.sec4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades" value="4" v-model="ucg.sec4grades"><span>4</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__laaFlow">LAA Flow</label>
                <input type="number" step="1" name="ucg__laaFlow" id="ucg__laaFlow" v-model="ucg.laaFlow">
            </p>
    </section>
</template>
<script>
export default {
    name: 'UCG',
    props: {
        ucgId: Number
    },
    data() {
        return {
            ucg: {}
        }
    },
    methods: {
        informUcgId: function( id ) {
            console.log('unkokko' + id )
            this.$emit( 'getUcgId', id );
        },
        getUcg: function( id ) {
            this.axios.get(
                this.$store.getters.apiRoot + '/ucg/' + id
            ).then(( response ) => {
                this.ucg = response.data;
            });        
        },
        updateUcg: function() {
            this.axios.post(
                this.$store.getters.apiRoot + '/ucg/' + this.ucg.ucgId,
                this.ucg
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'UCG update: SUCCESS' );
                } else {
                    console.log( 'UCG update: FAILED' );
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
        ucgId: function( newId ) {
            this.getUcg( newId );
        }
    },
    beforeUpdate: function() {
        this.updateUcg();
    }
}
</script>
