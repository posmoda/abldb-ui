<template>
    <section class="ablationMedication">
        <h1>アブレーション時内服薬</h1>
        <section class="ablationMedication__medication">
            <h2>退院時内服薬</h2>
            <fieldset>
                <legend>WF</legend>
                <label><input type="radio" name="medication__wf" id="medication__wf__true" v-bind:value="true" v-model="ablationMedication.wf"><span>はい</span></label>
                <label><input type="radio" name="medication__wf" id="medication__wf__false" v-bind:value="false" v-model="ablationMedication.wf"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>DOAC</legend>
                <label><input type="radio" name="medication__doac" id="medication__doac__1" value="1" v-model="ablationMedication.doac"><span>なし</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__2a" value="2a" v-model="ablationMedication.doac"><span>エドキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__2b" value="2b" v-model="ablationMedication.doac"><span>アピキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__3" value="3" v-model="ablationMedication.doac"><span>リバーロキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__4" value="4" v-model="ablationMedication.doac"><span>ダビガトラン</span></label>
            </fieldset>
            <p class="form__row">
                <label for="medication__doacAmount">DOAC一日投与量</label>
                <input type="number" step="0.1" min="100.0" max="250.0" name="basic__doacAmount" id="basic__doacAmount" v-model.number="ablationMedication.doacAmount">mg
            </p>
            <fieldset>
                <legend>ASA</legend>
                <label><input type="radio" name="medication__asa" id="medication__asa__true" v-bind:value="true" v-model="ablationMedication.asa"><span>はい</span></label>
                <label><input type="radio" name="medication__asa" id="medication__asa__false" v-bind:value="false" v-model="ablationMedication.asa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Thienopyridine</legend>
                <label><input type="radio" name="medication__thenopyridine" id="medication__thenopyridine__true" v-bind:value="true" v-model="ablationMedication.thenopyridine"><span>はい</span></label>
                <label><input type="radio" name="medication__thenopyridine" id="medication__thenopyridine__false" v-bind:value="false" v-model="ablationMedication.thenopyridine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Prasugurel</legend>
                <label><input type="radio" name="medication__prasugurel" id="medication__prasugurel__true" v-bind:value="true" v-model="ablationMedication.prasugurel"><span>はい</span></label>
                <label><input type="radio" name="medication__prasugurel" id="medication__prasugurel__false" v-bind:value="false" v-model="ablationMedication.prasugurel"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>その他の抗血小板薬</legend>
                <label><input type="radio" name="medication__otherAntiplatelet" id="medication__otherAntiplatelet__true" v-bind:value="true" v-model="ablationMedication.otherAntiplatelet"><span>はい</span></label>
                <label><input type="radio" name="medication__otherAntiplatelet" id="medication__otherAntiplatelet__false" v-bind:value="false" v-model="ablationMedication.otherAntiplatelet"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>beta blocker</legend>
                <label><input type="radio" name="medication__betaBlocker" id="medication__betaBlocker__true" v-bind:value="true" v-model="ablationMedication.betaBlocker"><span>はい</span></label>
                <label><input type="radio" name="medication__betaBlocker" id="medication__betaBlocker__false" v-bind:value="false" v-model="ablationMedication.betaBlocker"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Verapamil / Diltiazem</legend>
                <label><input type="radio" name="medication__verapamil" id="medication__verapamil__true" v-bind:value="true" v-model="ablationMedication.verapamil"><span>はい</span></label>
                <label><input type="radio" name="medication__verapamil" id="medication__verapamil__false" v-bind:value="false" v-model="ablationMedication.verapamil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Digitalis</legend>
                <label><input type="radio" name="medication__digitalis" id="medication__digitalis__true" v-bind:value="true" v-model="ablationMedication.digitalis"><span>はい</span></label>
                <label><input type="radio" name="medication__digitalis" id="medication__digitalis__false" v-bind:value="false" v-model="ablationMedication.digitalis"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ia</legend>
                <label><input type="radio" name="medication__ia" id="medication__ia__true" v-bind:value="true" v-model="ablationMedication.ia"><span>はい</span></label>
                <label><input type="radio" name="medication__ia" id="medication__ia__false" v-bind:value="false" v-model="ablationMedication.ia"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ib</legend>
                <label><input type="radio" name="medication__ib" id="medication__ib__true" v-bind:value="true" v-model="ablationMedication.ib"><span>はい</span></label>
                <label><input type="radio" name="medication__ib" id="medication__ib__false" v-bind:value="false" v-model="ablationMedication.ib"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ic</legend>
                <label><input type="radio" name="medication__ic" id="medication__ic__true" v-bind:value="true" v-model="ablationMedication.ic"><span>はい</span></label>
                <label><input type="radio" name="medication__ic" id="medication__ic__false" v-bind:value="false" v-model="ablationMedication.ic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Amiodarone</legend>
                <label><input type="radio" name="medication__amiodarone" id="medication__amiodarone__true" v-bind:value="true" v-model="ablationMedication.amiodarone"><span>はい</span></label>
                <label><input type="radio" name="medication__amiodarone" id="medication__amiodarone__false" v-bind:value="false" v-model="ablationMedication.amiodarone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Sotalol</legend>
                <label><input type="radio" name="medication__sotalol" id="medication__sotalol__true" v-bind:value="true" v-model="ablationMedication.sotalol"><span>はい</span></label>
                <label><input type="radio" name="medication__sotalol" id="medication__sotalol__false" v-bind:value="false" v-model="ablationMedication.sotalol"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Bepridil</legend>
                <label><input type="radio" name="medication__bepridlil" id="medication__bepridlil__true" v-bind:value="true" v-model="ablationMedication.bepridlil"><span>はい</span></label>
                <label><input type="radio" name="medication__bepridlil" id="medication__bepridlil__false" v-bind:value="false" v-model="ablationMedication.bepridlil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ARB</legend>
                <label><input type="radio" name="medication__arb" id="medication__arb__true" v-bind:value="true" v-model="ablationMedication.arb"><span>はい</span></label>
                <label><input type="radio" name="medication__arb" id="medication__arb__false" v-bind:value="false" v-model="ablationMedication.arb"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ACE</legend>
                <label><input type="radio" name="medication__ace" id="medication__ace__true" v-bind:value="true" v-model="ablationMedication.ace"><span>はい</span></label>
                <label><input type="radio" name="medication__ace" id="medication__ace__false" v-bind:value="false" v-model="ablationMedication.ace"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ca拮抗薬(降圧薬)</legend>
                <label><input type="radio" name="medication__antiCa" id="medication__antiCa__true" v-bind:value="true" v-model="ablationMedication.antiCa"><span>はい</span></label>
                <label><input type="radio" name="medication__antiCa" id="medication__antiCa__false" v-bind:value="false" v-model="ablationMedication.antiCa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>降圧利尿薬</legend>
                <label><input type="radio" name="medication__antihypertensiveDiuretic" id="medication__antihypertensiveDiuretic__true" v-bind:value="true" v-model="ablationMedication.antihypertensiveDiuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__antihypertensiveDiuretic" id="medication__antihypertensiveDiuretic__false" v-bind:value="false" v-model="ablationMedication.antihypertensiveDiuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>利尿薬(高圧利尿薬を除く)</legend>
                <label><input type="radio" name="medication__diuretic" id="medication__diuretic__true" v-bind:value="true" v-model="ablationMedication.diuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__diuretic" id="medication__diuretic__false" v-bind:value="false" v-model="ablationMedication.diuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Spronolactone / Eplerenone</legend>
                <label><input type="radio" name="medication__spironolactone" id="medication__spironolactone__true" v-bind:value="true" v-model="ablationMedication.spironolactone"><span>はい</span></label>
                <label><input type="radio" name="medication__spironolactone" id="medication__spironolactone__false" v-bind:value="false" v-model="ablationMedication.spironolactone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>スタチン</legend>
                <label><input type="radio" name="medication__statine" id="medication__statine__true" v-bind:value="true" v-model="ablationMedication.statine"><span>はい</span></label>
                <label><input type="radio" name="medication__statine" id="medication__statine__false" v-bind:value="false" v-model="ablationMedication.statine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>DM薬 or インスリン</legend>
                <label><input type="radio" name="medication__dmInsulin" id="medication__dmInsulin__true" v-bind:value="true" v-model="ablationMedication.dmInsulin"><span>はい</span></label>
                <label><input type="radio" name="medication__dmInsulin" id="medication__dmInsulin__false" v-bind:value="false" v-model="ablationMedication.dmInsulin"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>SGTL2</legend>
                <label><input type="radio" name="medication__sglt2" id="medication__sglt2__true" v-bind:value="true" v-model="ablationMedication.sglt2"><span>はい</span></label>
                <label><input type="radio" name="medication__sglt2" id="medication__sglt2__false" v-bind:value="false" v-model="ablationMedication.sglt2"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>PPI</legend>
                <label><input type="radio" name="medication__ppi" id="medication__ppi__true" v-bind:value="true" v-model="ablationMedication.ppi"><span>はい</span></label>
                <label><input type="radio" name="medication__ppi" id="medication__ppi__false" v-bind:value="false" v-model="ablationMedication.ppi"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>H2 Blocker</legend>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__true" v-bind:value="true" v-model="ablationMedication.h2Blocker"><span>はい</span></label>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__false" v-bind:value="false" v-model="ablationMedication.h2Blocker"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ステロイド(定期内服)</legend>
                <label><input type="radio" name="medication__steroid" id="medication__steroid__true" v-bind:value="true" v-model="ablationMedication.steroid"><span>はい</span></label>
                <label><input type="radio" name="medication__steroid" id="medication__steroid__false" v-bind:value="false" v-model="ablationMedication.steroid"><span>いいえ</span></label>
            </fieldset>
        </section>
    </section>
</template>
<script>
export default {
    name: 'AblationMedication',
    data() {
        return {
            ablationMedication: {
            }
        }
    },
    methods:{
        getAblationMedication() {
            const id = this.$route.params.medicationId
            this.axios.get( this.$store.getters.apiRoot + '/medication/' + id
            ).then(( response ) => {
                this.ablationMedication = response.data;
            });
        },
        updateAblationMedication() {
            const id = this.$route.params.medicationId
            this.axios.post( 
                this.$store.getters.apiRoot + '/medication/' + id,
                this.ablationMedication
            ).then(( response ) =>{
                if( response.status == 200 ){
                    console.log( 'Medication update: SUCCESS' )
                } else {
                    console.log( 'Medication update: FAILURE' )
                }
            });
        }
    },
    mounted: function() {
        this.$emit('pushContents');
        this.getAblationMedication();
    },
    beforeUpdate: function() {
        this.updateAblationMedication();
    }
}
</script>
