<template>
    <section class="firstAblationMedication">
        <h1>初回アブレーション内服薬</h1>
        <section class="firstAblationMedication__medication">
            <h2>退院時内服薬</h2>
            <fieldset>
                <legend>WF</legend>
                <label><input type="radio" name="medication__wf" id="medication__wf__true" value="true" v-model="firstAblationMedication.wf"><span>はい</span></label>
                <label><input type="radio" name="medication__wf" id="medication__wf__false" value="false" v-model="firstAblationMedication.wf"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>DOAC</legend>
                <label><input type="radio" name="medication__doac" id="medication__doac__1" value="1" v-model="firstAblationMedication.doac"><span>なし</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__2a" value="2a" v-model="firstAblationMedication.doac"><span>エドキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__2b" value="2b" v-model="firstAblationMedication.doac"><span>アピキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__3" value="3" v-model="firstAblationMedication.doac"><span>リバーロキサバン</span></label>
                <label><input type="radio" name="medication__doac" id="medication__doac__4" value="4" v-model="firstAblationMedication.doac"><span>ダビガトラン</span></label>
            </fieldset>
            <p class="form__row">
                <label for="medication__doacAmount">DOAC一日投与量</label>
                <input type="number" step="0.1" min="100.0" max="250.0" name="basic__doacAmount" id="basic__doacAmount" v-model.number="firstAblationMedication.doacAmount">mg
            </p>
            <fieldset>
                <legend>ASA</legend>
                <label><input type="radio" name="medication__asa" id="medication__asa__true" value="true" v-model="firstAblationMedication.asa"><span>はい</span></label>
                <label><input type="radio" name="medication__asa" id="medication__asa__false" value="false" v-model="firstAblationMedication.asa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Thienopyridine</legend>
                <label><input type="radio" name="medication__thenopyridine" id="medication__thenopyridine__true" value="true" v-model="firstAblationMedication.thenopyridine"><span>はい</span></label>
                <label><input type="radio" name="medication__thenopyridine" id="medication__thenopyridine__false" value="false" v-model="firstAblationMedication.thenopyridine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Prasugurel</legend>
                <label><input type="radio" name="medication__prasugurel" id="medication__prasugurel__true" value="true" v-model="firstAblationMedication.prasugurel"><span>はい</span></label>
                <label><input type="radio" name="medication__prasugurel" id="medication__prasugurel__false" value="false" v-model="firstAblationMedication.prasugurel"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>その他の抗血小板薬</legend>
                <label><input type="radio" name="medication__otherAntiplatelet" id="medication__otherAntiplatelet__true" value="true" v-model="firstAblationMedication.otherAntiplatelet"><span>はい</span></label>
                <label><input type="radio" name="medication__otherAntiplatelet" id="medication__otherAntiplatelet__false" value="false" v-model="firstAblationMedication.otherAntiplatelet"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>beta blocker</legend>
                <label><input type="radio" name="medication__betaBlocker" id="medication__betaBlocker__true" value="true" v-model="firstAblationMedication.betaBlocker"><span>はい</span></label>
                <label><input type="radio" name="medication__betaBlocker" id="medication__betaBlocker__false" value="false" v-model="firstAblationMedication.betaBlocker"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Verapamil / Diltiazem</legend>
                <label><input type="radio" name="medication__verapamil" id="medication__verapamil__true" value="true" v-model="firstAblationMedication.verapamil"><span>はい</span></label>
                <label><input type="radio" name="medication__verapamil" id="medication__verapamil__false" value="false" v-model="firstAblationMedication.verapamil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Digitalis</legend>
                <label><input type="radio" name="medication__digitalis" id="medication__digitalis__true" value="true" v-model="firstAblationMedication.digitalis"><span>はい</span></label>
                <label><input type="radio" name="medication__digitalis" id="medication__digitalis__false" value="false" v-model="firstAblationMedication.digitalis"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ia</legend>
                <label><input type="radio" name="medication__ia" id="medication__ia__true" value="true" v-model="firstAblationMedication.ia"><span>はい</span></label>
                <label><input type="radio" name="medication__ia" id="medication__ia__false" value="false" v-model="firstAblationMedication.ia"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ib</legend>
                <label><input type="radio" name="medication__ib" id="medication__ib__true" value="true" v-model="firstAblationMedication.ib"><span>はい</span></label>
                <label><input type="radio" name="medication__ib" id="medication__ib__false" value="false" v-model="firstAblationMedication.ib"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ic</legend>
                <label><input type="radio" name="medication__ic" id="medication__ic__true" value="true" v-model="firstAblationMedication.ic"><span>はい</span></label>
                <label><input type="radio" name="medication__ic" id="medication__ic__false" value="false" v-model="firstAblationMedication.ic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Amiodarone</legend>
                <label><input type="radio" name="medication__amiodarone" id="medication__amiodarone__true" value="true" v-model="firstAblationMedication.amiodarone"><span>はい</span></label>
                <label><input type="radio" name="medication__amiodarone" id="medication__amiodarone__false" value="false" v-model="firstAblationMedication.amiodarone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Sotalol</legend>
                <label><input type="radio" name="medication__sotalol" id="medication__sotalol__true" value="true" v-model="firstAblationMedication.sotalol"><span>はい</span></label>
                <label><input type="radio" name="medication__sotalol" id="medication__sotalol__false" value="false" v-model="firstAblationMedication.sotalol"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Bepridil</legend>
                <label><input type="radio" name="medication__bepridlil" id="medication__bepridlil__true" value="true" v-model="firstAblationMedication.bepridlil"><span>はい</span></label>
                <label><input type="radio" name="medication__bepridlil" id="medication__bepridlil__false" value="false" v-model="firstAblationMedication.bepridlil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ARB</legend>
                <label><input type="radio" name="medication__arb" id="medication__arb__true" value="true" v-model="firstAblationMedication.arb"><span>はい</span></label>
                <label><input type="radio" name="medication__arb" id="medication__arb__false" value="false" v-model="firstAblationMedication.arb"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ACE</legend>
                <label><input type="radio" name="medication__ace" id="medication__ace__true" value="true" v-model="firstAblationMedication.ace"><span>はい</span></label>
                <label><input type="radio" name="medication__ace" id="medication__ace__false" value="false" v-model="firstAblationMedication.ace"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ca拮抗薬(降圧薬)</legend>
                <label><input type="radio" name="medication__antiCa" id="medication__antiCa__true" value="true" v-model="firstAblationMedication.antiCa"><span>はい</span></label>
                <label><input type="radio" name="medication__antiCa" id="medication__antiCa__false" value="false" v-model="firstAblationMedication.antiCa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>降圧利尿薬</legend>
                <label><input type="radio" name="medication__antihypertensiveDiuretic" id="medication__antihypertensiveDiuretic__true" value="true" v-model="firstAblationMedication.antihypertensiveDiuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__antihypertensiveDiuretic" id="medication__antihypertensiveDiuretic__false" value="false" v-model="firstAblationMedication.antihypertensiveDiuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>利尿薬(高圧利尿薬を除く)</legend>
                <label><input type="radio" name="medication__diuretic" id="medication__diuretic__true" value="true" v-model="firstAblationMedication.diuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__diuretic" id="medication__diuretic__false" value="false" v-model="firstAblationMedication.diuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Spronolactone / Eplerenone</legend>
                <label><input type="radio" name="medication__spironolactone" id="medication__spironolactone__true" value="true" v-model="firstAblationMedication.spironolactone"><span>はい</span></label>
                <label><input type="radio" name="medication__spironolactone" id="medication__spironolactone__false" value="false" v-model="firstAblationMedication.spironolactone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>スタチン</legend>
                <label><input type="radio" name="medication__statine" id="medication__statine__true" value="true" v-model="firstAblationMedication.statine"><span>はい</span></label>
                <label><input type="radio" name="medication__statine" id="medication__statine__false" value="false" v-model="firstAblationMedication.statine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>DM薬 or インスリン</legend>
                <label><input type="radio" name="medication__dmInsulin" id="medication__dmInsulin__true" value="true" v-model="firstAblationMedication.dmInsulin"><span>はい</span></label>
                <label><input type="radio" name="medication__dmInsulin" id="medication__dmInsulin__false" value="false" v-model="firstAblationMedication.dmInsulin"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>SGTL2</legend>
                <label><input type="radio" name="medication__sglt2" id="medication__sglt2__true" value="true" v-model="firstAblationMedication.sglt2"><span>はい</span></label>
                <label><input type="radio" name="medication__sglt2" id="medication__sglt2__false" value="false" v-model="firstAblationMedication.sglt2"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>PPI</legend>
                <label><input type="radio" name="medication__ppi" id="medication__ppi__true" value="true" v-model="firstAblationMedication.ppi"><span>はい</span></label>
                <label><input type="radio" name="medication__ppi" id="medication__ppi__false" value="false" v-model="firstAblationMedication.ppi"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>H2 Blocker</legend>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__true" value="true" v-model="firstAblationMedication.h2Blocker"><span>はい</span></label>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__false" value="false" v-model="firstAblationMedication.h2Blocker"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ステロイド(定期内服)</legend>
                <label><input type="radio" name="medication__steroid" id="medication__steroid__true" value="true" v-model="firstAblationMedication.steroid"><span>はい</span></label>
                <label><input type="radio" name="medication__steroid" id="medication__steroid__false" value="false" v-model="firstAblationMedication.steroid"><span>いいえ</span></label>
            </fieldset>
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            firstAblationMedication: {
            }
        }
    }
}
</script>
