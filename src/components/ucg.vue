<template>
    <section class="ucg">
        <h2>UCG</h2>
            <p class="form__row">
                <label for="ucg__lvefTeichholz">LVEF (Teichholz)</label>
                <input type="number" step="0.1" name="ucg__lvefTeichholz" id="ucg__lvefTeichholz" v-model="ucg.lvefTeichholz">%
            </p>
            <p class="form__row">
                <label for="ucg__lvefSimpson">LVEF (Simpson)</label>
                <input type="number" step="0.1" name="ucg__lvefSimpson" id="ucg__lvefSimpson" v-model="ucg.lvefSimpson">%
            </p>
            <p class="form__row">
                <label for="ucg__lvdd">LVDd</label>
                <input type="number" step="0.1" name="ucg__lvdd" id="ucg__lvdd" v-model="ucg.lvdd">mm
            </p>
            <p class="form__row">
                <label for="ucg__lvds">LVDs</label>
                <input type="number" step="0.1" name="ucg__lvds" id="ucg__lvds" v-model="ucg.lvds">mm
            </p>
            <p class="form__row">
                <label for="ucg__lad">LAD</label>
                <input type="number" step="0.1" name="ucg__lad" id="ucg__lad" v-model="ucg.lad">mm
            </p>
            <!--<p class="form__row">
                <label for="ucg__laDiameterVertical">LA径 (4C縦)</label>
                <input type="number" step="1" name="ucg__laDiameterVertical" id="ucg__laDiameterVertical" v-model="ucg.laDiameterVertical">
            </p>
            <p class="form__row">
                <label for="ucg__laDiameterHorizontal">LA径 (4C横)</label>
                <input type="number" step="1" name="ucg__laDiameterHorizontal" id="ucg__laDiameterHorizontal" v-model="ucg.laDiameterHorizontal">
            </p>-->
            <fieldset>
                <legend>MR（４段階）</legend>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades__null" v-bind:value="null" v-model="ucg.mr4grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades__1" value="1" v-model.number="ucg.mr4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades__2" value="2" v-model.number="ucg.mr4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades__3" value="3" v-model.number="ucg.mr4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__mr4grades" id="ucg__mr4grades__4" value="4" v-model.number="ucg.mr4grades"><span>4</span></label>
            </fieldset>
            <!--<fieldset>
                <legend>MR（３段階）</legend>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades__null" v-bind:value="null" v-model="ucg.mr3grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades__1" value="1" v-model.number="ucg.mr3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades__2" value="2" v-model.number="ucg.mr3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades__3" value="3" v-model.number="ucg.mr3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__mr3grades" id="ucg__mr3grades__4" value="4" v-model.number="ucg.mr3grades"><span>severe</span></label>
            </fieldset>-->
            <p class="form__row">
                <label for="ucg__eE">E/E'</label>
                <input type="number" step="0.1" name="ucg__eE" id="ucg__eE" v-model="ucg.eE">
            </p>
            <p class="form__row">
                <label for="ucg__eWave">E波</label>
                <input type="number" step="0.01" name="ucg__eWave" id="ucg__eWave" v-model="ucg.eWave">m/s
            </p>
            <p class="form__row">
                <label for="ucg__aWave">A波</label>
                <input type="number" step="0.01" name="ucg__aWave" id="ucg__aWave" v-model="ucg.aWave">m/s
            </p>
            <p class="form__row">
                <label for="ucg__dct">DcT</label>
                <input type="number" step="1" name="ucg__dct" id="ucg__dct" v-model="ucg.dct">msec
            </p>
            <fieldset>
                <legend>AR（４段階）</legend>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades__null" v-bind:value="null" v-model="ucg.ar4grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades__1" value="1" v-model.number="ucg.ar4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades__2" value="2" v-model.number="ucg.ar4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades__3" value="3" v-model.number="ucg.ar4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__ar4grades" id="ucg__ar4grades__4" value="4" v-model.number="ucg.ar4grades"><span>4</span></label>
            </fieldset>
            <!--<fieldset>
                <legend>AR（３段階）</legend>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades__null" v-bind:value="null" v-model="ucg.ar3grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades__1" value="1" v-model.number="ucg.ar3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades__2" value="2" v-model.number="ucg.ar3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades__3" value="3" v-model.number="ucg.ar3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__ar3grades" id="ucg__ar3grades__4" value="4" v-model.number="ucg.ar3grades"><span>severe</span></label>
            </fieldset>-->
            <fieldset>
                <legend>TR（４段階）</legend>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades__null" v-bind:value="null" v-model="ucg.tr4grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades__1" value="1" v-model.number="ucg.tr4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades__2" value="2" v-model.number="ucg.tr4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades__3" value="3" v-model.number="ucg.tr4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__tr4grades" id="ucg__tr4grades__4" value="4" v-model.number="ucg.tr4grades"><span>4</span></label>
            </fieldset>
            <!--<fieldset>
                <legend>TR（３段階）</legend>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades__null" v-bind:value="null" v-model="ucg.tr3grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades__1" value="1" v-model.number="ucg.tr3grades"><span>trivial</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades__2" value="2" v-model.number="ucg.tr3grades"><span>mild</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades__3" value="3" v-model.number="ucg.tr3grades"><span>moderate</span></label>
                <label><input type="radio" name="ucg__tr3grades" id="ucg__tr3grades__4" value="4" v-model.number="ucg.tr3grades"><span>severe</span></label>
            </fieldset>-->
            <p class="form__row">
                <label for="ucg__trPg">TR-PG</label>
                <input type="number" step="0.1" name="ucg__trPg" id="ucg__trPg" v-model="ucg.trPg">mmHg
            </p>
            <fieldset>
                <legend>moderate以上のMS</legend>
                <label><input type="radio" name="ucg__ms" id="ucg__ms__true" v-bind:value="true" v-model="ucg.ms"><span>あり</span></label>
                <label><input type="radio" name="ucg__ms" id="ucg__ms__false" v-bind:value="false" v-model="ucg.ms"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>moderate以上のAS</legend>
                <label><input type="radio" name="ucg__as" id="ucg__as__true" v-bind:value="true" v-model="ucg.as"><span>あり</span></label>
                <label><input type="radio" name="ucg__as" id="ucg__as__false" v-bind:value="false" v-model="ucg.as"><span>なし</span></label>
            </fieldset>
            <h2>TEE</h2>
            <fieldset>
                <legend>SEC（４段階）</legend>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades__null" v-bind:value="null" v-model="ucg.sec4grades"><span>なし</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades__1" value="1" v-model.number="ucg.sec4grades"><span>1</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades__2" value="2" v-model.number="ucg.sec4grades"><span>2</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades__3" value="3" v-model.number="ucg.sec4grades"><span>3</span></label>
                <label><input type="radio" name="ucg__sec4grades" id="ucg__sec4grades__4" value="4" v-model.number="ucg.sec4grades"><span>4</span></label>
            </fieldset>
            <p class="form__row">
                <label for="ucg__laaFlow">LAA Flow</label>
                <input type="number" step="0.1" name="ucg__laaFlow" id="ucg__laaFlow" v-model.number="ucg.laaFlow">cm/s
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
                this.$store.getters.apiRoot + '/ucg/' + id, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
                }
            ).then(( response ) => {
                this.ucg = response.data;
            });        
        },
        updateUcg: function() {
            this.axios.post(
                this.$store.getters.apiRoot + '/ucg/' + this.ucg.ucgId,
                this.ucg, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken }
                }
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
        },
        ucg: {
            handler: function() {
                this.$emit( 'enableParentSave' );
            },
            deep: true
        }
    },
    beforeUpdate: function() {
        //this.updateUcg();
    }
}
</script>
