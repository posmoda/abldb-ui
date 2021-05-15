<template>
    <section class="ablationMedication">
        <h1>アブレーション時内服薬</h1>
        <section class="ablationmedication__admissionMedication">
            <h2>入院時内服薬</h2>
            <fieldset>
                <legend>WF</legend>
                <label><input type="radio" name="medication__admissionWf" id="medication__admissionWf__true" v-bind:value="true" v-model="ablationMedication.admissionWf"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionWf" id="medication__admissionWf__false" v-bind:value="false" v-model="ablationMedication.admissionWf"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>DOAC</legend>
                <label><input type="radio" name="medication__admissionDoac" id="medication__admissionDoac__1" value="1" v-model="ablationMedication.admissionDoac"><span>なし</span></label>
                <label><input type="radio" name="medication__admissionDoac" id="medication__admissionDoac__2a" value="2a" v-model="ablationMedication.admissionDoac"><span>エドキサバン</span></label>
                <label><input type="radio" name="medication__admissionDoac" id="medication__admissionDoac__2b" value="2b" v-model="ablationMedication.admissionDoac"><span>アピキサバン</span></label>
                <label><input type="radio" name="medication__admissionDoac" id="medication__admissionDoac__3" value="3" v-model="ablationMedication.admissionDoac"><span>リバーロキサバン</span></label>
                <label><input type="radio" name="medication__admissionDoac" id="medication__admissionDoac__4" value="4" v-model="ablationMedication.admissionDoac"><span>ダビガトラン</span></label>
            </fieldset>
            <p class="form__row">
                <label for="medication__admissionDoacAmount">DOAC一日投与量</label>
                <input type="number" step="0.1" min="100.0" max="250.0" name="basic__doacAmount" id="basic__doacAmount" v-model.number="ablationMedication.admissionDoacAmount">mg
            </p>
            <fieldset>
                <legend>ASA</legend>
                <label><input type="radio" name="medication__admissionAsa" id="medication__admissionAsa__true" v-bind:value="true" v-model="ablationMedication.admissionAsa"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionAsa" id="medication__admissionAsa__false" v-bind:value="false" v-model="ablationMedication.admissionAsa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Thienopyridine</legend>
                <label><input type="radio" name="medication__admissionThienopyridine" id="medication__admissionThienopyridine__true" v-bind:value="true" v-model="ablationMedication.admissionThienopyridine"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionThienopyridine" id="medication__admissionThienopyridine__false" v-bind:value="false" v-model="ablationMedication.admissionThienopyridine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Prasugurel</legend>
                <label><input type="radio" name="medication__admissionPrasugurel" id="medication__admissionPrasugurel__true" v-bind:value="true" v-model="ablationMedication.admissionPrasugurel"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionPrasugurel" id="medication__admissionPrasugurel__false" v-bind:value="false" v-model="ablationMedication.admissionPrasugurel"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>その他の抗血小板薬</legend>
                <label><input type="radio" name="medication__admissionOtherAntiplatelet" id="medication__admissionOtherAntiplatelet__true" v-bind:value="true" v-model="ablationMedication.admissionOtherAntiplatelet"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionOtherAntiplatelet" id="medication__admissionOtherAntiplatelet__false" v-bind:value="false" v-model="ablationMedication.admissionOtherAntiplatelet"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>beta blocker</legend>
                <label><input type="radio" name="medication__admissionBetaBlocker" id="medication__admissionBetaBlocker__true" v-bind:value="true" v-model="ablationMedication.admissionBetaBlocker"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionBetaBlocker" id="medication__admissionBetaBlocker__false" v-bind:value="false" v-model="ablationMedication.admissionBetaBlocker"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Verapamil / Diltiazem</legend>
                <label><input type="radio" name="medication__admissionVerapamil" id="medication__admissionVerapamil__true" v-bind:value="true" v-model="ablationMedication.admissionVerapamil"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionVerapamil" id="medication__admissionVerapamil__false" v-bind:value="false" v-model="ablationMedication.admissionVerapamil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Digitalis</legend>
                <label><input type="radio" name="medication__admissionDigitalis" id="medication__admissionDigitalis__true" v-bind:value="true" v-model="ablationMedication.admissionDigitalis"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionDigitalis" id="medication__admissionDigitalis__false" v-bind:value="false" v-model="ablationMedication.admissionDigitalis"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ia</legend>
                <label><input type="radio" name="medication__admissionIa" id="medication__admissionIa__true" v-bind:value="true" v-model="ablationMedication.admissionIa"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionIa" id="medication__admissionIa__false" v-bind:value="false" v-model="ablationMedication.admissionIa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ib</legend>
                <label><input type="radio" name="medication__admissionIb" id="medication__admissionIb__true" v-bind:value="true" v-model="ablationMedication.admissionIb"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionIb" id="medication__admissionIb__false" v-bind:value="false" v-model="ablationMedication.admissionIb"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ic</legend>
                <label><input type="radio" name="medication__admissionIc" id="medication__admissionIc__true" v-bind:value="true" v-model="ablationMedication.admissionIc"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionIc" id="medication__admissionIc__false" v-bind:value="false" v-model="ablationMedication.admissionIc"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Amiodarone</legend>
                <label><input type="radio" name="medication__admissionAmiodarone" id="medication__admissionAmiodarone__true" v-bind:value="true" v-model="ablationMedication.admissionAmiodarone"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionAmiodarone" id="medication__admissionAmiodarone__false" v-bind:value="false" v-model="ablationMedication.admissionAmiodarone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Sotalol</legend>
                <label><input type="radio" name="medication__admissionSotalol" id="medication__admissionSotalol__true" v-bind:value="true" v-model="ablationMedication.admissionSotalol"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionSotalol" id="medication__admissionSotalol__false" v-bind:value="false" v-model="ablationMedication.admissionSotalol"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Bepridil</legend>
                <label><input type="radio" name="medication__admissionBepridil" id="medication__admissionBepridil__true" v-bind:value="true" v-model="ablationMedication.admissionBepridil"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionBepridil" id="medication__admissionBepridil__false" v-bind:value="false" v-model="ablationMedication.admissionBepridil"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ARB</legend>
                <label><input type="radio" name="medication__admissionArb" id="medication__admissionArb__true" v-bind:value="true" v-model="ablationMedication.admissionArb"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionArb" id="medication__admissionArb__false" v-bind:value="false" v-model="ablationMedication.admissionArb"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>ACE</legend>
                <label><input type="radio" name="medication__admissionAce" id="medication__admissionAce__true" v-bind:value="true" v-model="ablationMedication.admissionAce"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionAce" id="medication__admissionAce__false" v-bind:value="false" v-model="ablationMedication.admissionAce"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Ca拮抗薬(降圧薬)</legend>
                <label><input type="radio" name="medication__admissionAntiCa" id="medication__admissionAntiCa__true" v-bind:value="true" v-model="ablationMedication.admissionAntiCa"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionAntiCa" id="medication__admissionAntiCa__false" v-bind:value="false" v-model="ablationMedication.admissionAntiCa"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>降圧利尿薬</legend>
                <label><input type="radio" name="medication__admissionAntihypertensiveDiuretic" id="medication__admissionAntihypertensiveDiuretic__true" v-bind:value="true" v-model="ablationMedication.admissionAntihypertensiveDiuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionAntihypertensiveDiuretic" id="medication__admissionAntihypertensiveDiuretic__false" v-bind:value="false" v-model="ablationMedication.admissionAntihypertensiveDiuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>利尿薬(高圧利尿薬を除く)</legend>
                <label><input type="radio" name="medication__admissionDiuretic" id="medication__admissionDiuretic__true" v-bind:value="true" v-model="ablationMedication.admissionDiuretic"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionDiuretic" id="medication__admissionDiuretic__false" v-bind:value="false" v-model="ablationMedication.admissionDiuretic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Spronolactone / Eplerenone</legend>
                <label><input type="radio" name="medication__admissionSpironolactone" id="medication__admissionSpironolactone__true" v-bind:value="true" v-model="ablationMedication.admissionSpironolactone"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionSpironolactone" id="medication__admissionSpironolactone__false" v-bind:value="false" v-model="ablationMedication.admissionSpironolactone"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>スタチン</legend>
                <label><input type="radio" name="medication__admissionStatine" id="medication__admissionStatine__true" v-bind:value="true" v-model="ablationMedication.admissionStatine"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionStatine" id="medication__admissionStatine__false" v-bind:value="false" v-model="ablationMedication.admissionStatine"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>経口血糖降下薬</legend>
                <label><input type="radio" name="medication__admissionHypoglycemic" id="medication__admissionHypoglycemic__true" v-bind:value="true" v-model="ablationMedication.admissionHypoglycemic"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionHypoglycemic" id="medication__admissionHypoglycemic__false" v-bind:value="false" v-model="ablationMedication.admissionHypoglycemic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>インスリン</legend>
                <label><input type="radio" name="medication__admissionInsulin" id="medication__admissionInsulin__true" v-bind:value="true" v-model="ablationMedication.admissionInsulin"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionInsulin" id="medication__admissionInsulin__false" v-bind:value="false" v-model="ablationMedication.admissionInsulin"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>SGTL2</legend>
                <label><input type="radio" name="medication__admissionSglt2" id="medication__admissionSglt2__true" v-bind:value="true" v-model="ablationMedication.admissionSglt2"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionSglt2" id="medication__admissionSglt2__false" v-bind:value="false" v-model="ablationMedication.admissionSglt2"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>PPI</legend>
                <label><input type="radio" name="medication__admissionPpi" id="medication__admissionPpi__true" v-bind:value="true" v-model="ablationMedication.admissionPpi"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionPpi" id="medication__admissionPpi__false" v-bind:value="false" v-model="ablationMedication.admissionPpi"><span>いいえ</span></label>
            </fieldset>
            <!--<fieldset>
                <legend>H2 Blocker</legend>
                <label><input type="radio" name="medication__admissionH2Blocker" id="medication__admissionH2Blocker__true" v-bind:value="true" v-model="ablationMedication.admissionH2Blocker"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionH2Blocker" id="medication__admissionH2Blocker__false" v-bind:value="false" v-model="ablationMedication.admissionH2Blocker"><span>いいえ</span></label>
            </fieldset>-->
            <fieldset>
                <legend>ステロイド(定期内服)</legend>
                <label><input type="radio" name="medication__admissionSteroid" id="medication__admissionSteroid__true" v-bind:value="true" v-model="ablationMedication.admissionSteroid"><span>はい</span></label>
                <label><input type="radio" name="medication__admissionSteroid" id="medication__admissionSteroid__false" v-bind:value="false" v-model="ablationMedication.admissionSteroid"><span>いいえ</span></label>
            </fieldset>
        </section>
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
                <label><input type="radio" name="medication__thienopyridine" id="medication__thienopyridine__true" v-bind:value="true" v-model="ablationMedication.thienopyridine"><span>はい</span></label>
                <label><input type="radio" name="medication__thienopyridine" id="medication__thienopyridine__false" v-bind:value="false" v-model="ablationMedication.thienopyridine"><span>いいえ</span></label>
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
                <legend>AAD try</legend>
                <label><input type="radio" name="medication__aad" id="medication__aad__true" v-bind:value="true" v-model="ablationMedication.aad"><span>はい</span></label>
                <label><input type="radio" name="medication__aad" id="medication__aad__false" v-bind:value="false" v-model="ablationMedication.aad"><span>いいえ</span></label>
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
                <label><input type="radio" name="medication__bepridil" id="medication__bepridil__true" v-bind:value="true" v-model="ablationMedication.bepridil"><span>はい</span></label>
                <label><input type="radio" name="medication__bepridil" id="medication__bepridil__false" v-bind:value="false" v-model="ablationMedication.bepridil"><span>いいえ</span></label>
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
                <legend>経口血糖降下薬</legend>
                <label><input type="radio" name="medication__hypoglycemic" id="medication__hypoglycemic__true" v-bind:value="true" v-model="ablationMedication.hypoglycemic"><span>はい</span></label>
                <label><input type="radio" name="medication__hypoglycemic" id="medication__hypoglycemic__false" v-bind:value="false" v-model="ablationMedication.hypoglycemic"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>インスリン</legend>
                <label><input type="radio" name="medication__insulin" id="medication__insulin__true" v-bind:value="true" v-model="ablationMedication.insulin"><span>はい</span></label>
                <label><input type="radio" name="medication__insulin" id="medication__insulin__false" v-bind:value="false" v-model="ablationMedication.insulin"><span>いいえ</span></label>
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
            <!--<fieldset>
                <legend>H2 Blocker</legend>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__true" v-bind:value="true" v-model="ablationMedication.h2Blocker"><span>はい</span></label>
                <label><input type="radio" name="medication__h2Blocker" id="medication__h2Blocker__false" v-bind:value="false" v-model="ablationMedication.h2Blocker"><span>いいえ</span></label>
            </fieldset>-->
            <fieldset>
                <legend>NSAIDs常用</legend>
                <label><input type="radio" name="medication__nsaids" id="medication__nsaids__true" v-bind:value="true" v-model="ablationMedication.nsaids"><span>はい</span></label>
                <label><input type="radio" name="medication__nsaids" id="medication__nsaids__false" v-bind:value="false" v-model="ablationMedication.nsaids"><span>いいえ</span></label>
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
    props: {
        parentGivenId: null
    },
    data() {
        return {
            ablationMedication: {
            },
            isIdRouted: false
        }
    },
    methods:{
        detectId() {
            const routedId = this.$route.params.medicationId;
            const parentGivenId = this.parentGivenId;
            if ( routedId ){
                console.log( 'routed' )
                this.isIdRouted = true
                return routedId;
            } else {
                return parentGivenId;
            }
        },
        getAblationMedication() {
            const id = this.detectId();
            if (id) {
                this.axios.get( this.$store.getters.apiRoot + '/medication/' + id, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }
                ).then(( response ) => {
                    this.ablationMedication = response.data;
                    //if ( this.isIdRouted ){
                    //    this.$store.commit( 'UPDATE_PATIENT_ID', 1 );
                    //}
                });        
            }
        },
        updateAblationMedication() {
            const id = this.detectId();
            console.log( id );
            this.axios.post( 
                this.$store.getters.apiRoot + '/medication/' + id,
                this.ablationMedication, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    }
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
    },
    watch: {
        parentGivenId: function(){
            this.getAblationMedication();
        }
    }
}
</script>
