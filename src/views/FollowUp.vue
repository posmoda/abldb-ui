<template>
    <section class="followUp" id="followUp">
        <h1>フォローアップ外来</h1>
        <section class="followUp__arrhythmia">
            <h2>1st session 後の不整脈の状況</h2>
            <fieldset>
                <legend>3ヶ月以内のAF/AT再発</legend>
                <label><input type="radio" name="arrhythmia__afInThreeMonths" id="arrhythmia__afInThreeMonths__true" v-bind:value="true" v-model="followUp.afInThreeMonths"><span>あり</span></label>
                <label><input type="radio" name="arrhythmia__afInThreeMonths" id="arrhythmia__afInThreeMonths__false" v-bind:value="false" v-model="followUp.afInThreeMonths"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>3ヶ月以内のAF/AT種類</legend>
                <label><input type="radio" name="arrhythmia__afInThreeMonthsKind" id="arrhythmia__afInThreeMonthsKind__paf" value="PAF" v-model="followUp.afInThreeMonthsKind"><span>PAF</span></label>
                <label><input type="radio" name="arrhythmia__afInThreeMonthsKind" id="arrhythmia__afInThreeMonthsKind__peaf" value="PeAF" v-model="followUp.afInThreeMonthsKind"><span>PeAF</span></label>
                <label><input type="radio" name="arrhythmia__afInThreeMonthsKind" id="arrhythmia__afInThreeMonthsKind__pat" value="PAT" v-model="followUp.afInThreeMonthsKind"><span>PAT</span></label>
                <label><input type="radio" name="arrhythmia__afInThreeMonthsKind" id="arrhythmia__afInThreeMonthsKind__persisAt" value="Persistent AT" v-model="followUp.afInThreeMonthsKind"><span>Persistent AT</span></label>
                <label><input type="radio" name="arrhythmia__afInThreeMonthsKind" id="arrhythmia__afInThreeMonthsKind__none" value="None" v-model="followUp.afInThreeMonthsKind"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="arrhythmia__afInThreeMonthsDate">3ヶ月以内の再発日</label>
                <input type="date" name="arrhythmia__afInThreeMonthsDate" id="arrhythmia__afInThreeMonthsDate" v-model="followUp.afInThreeMonthsDate">
            </p>
            <fieldset>
                <legend>3ヶ月以降のAF/AT再発</legend>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonths" id="arrhythmia__afAfterThreeMonths__true" v-bind:value="true" v-model="followUp.afAfterThreeMonths"><span>あり</span></label>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonths" id="arrhythmia__afAfterThreeMonths__false" v-bind:value="false" v-model="followUp.afAfterThreeMonths"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>3ヶ月以降のAF/AT種類</legend>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonthsKind" id="arrhythmia__afAfterThreeMonthsKind__paf" value="PAF" v-model="followUp.afAfterThreeMonthsKind"><span>PAF</span></label>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonthsKind" id="arrhythmia__afAfterThreeMonthsKind__peaf" value="PeAF" v-model="followUp.afAfterThreeMonthsKind"><span>PeAF</span></label>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonthsKind" id="arrhythmia__afAfterThreeMonthsKind__pat" value="PAT" v-model="followUp.afAfterThreeMonthsKind"><span>PAT</span></label>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonthsKind" id="arrhythmia__afAfterThreeMonthsKind__persisAt" value="Persistent AT" v-model="followUp.afAfterThreeMonthsKind"><span>Persistent AT</span></label>
                <label><input type="radio" name="arrhythmia__afAfterThreeMonthsKind" id="arrhythmia__afAfterThreeMonthsKind__none" value="None" v-model="followUp.afAfterThreeMonthsKind"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="arrhythmia__afAfterThreeMonthsDate">3ヶ月以降の再発日</label>
                <input type="date" name="arrhythmia__afAfterThreeMonthsDate" id="arrhythmia__afAfterThreeMonthsDate" v-model="followUp.afAfterThreeMonthsDate">
            </p>
            <fieldset>
                <legend>再発時の抗不整脈薬</legend>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmic" id="arrhythmia__afAntiarrhythmic__true" v-bind:value="true" v-model="followUp.afAntiarrhythmic"><span>あり</span></label>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmic" id="arrhythmia__afAntiarrhythmic__false" v-bind:value="false" v-model="followUp.afAntiarrhythmic"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>再発時に抗不整脈薬開始</legend>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmicStart" id="arrhythmia__afAntiarrhythmicStart__true" v-bind:value="true" v-model="followUp.afAntiarrhythmicStart"><span>あり</span></label>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmicStart" id="arrhythmia__afAntiarrhythmicStart__false" v-bind:value="false" v-model="followUp.afAntiarrhythmicStart"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>抗不整脈薬開始後にもAF/AT</legend>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmicStillAf" id="arrhythmia__afAntiarrhythmicStillAf__true" v-bind:value="true" v-model="followUp.afAntiarrhythmicStillAf"><span>あり</span></label>
                <label><input type="radio" name="arrhythmia__afAntiarrhythmicStillAf" id="arrhythmia__afAntiarrhythmicStillAf__false" v-bind:value="false" v-model="followUp.afAntiarrhythmicStillAf"><span>なし</span></label>
            </fieldset>
        </section>
        <section class="followUp__arrhythmiaAfterSecond">
            <h2>2nd session 後の不整脈の状況</h2>
            <fieldset>
                <legend>2nd session 90日以降のAF/AT再発</legend>
                <label><input type="radio" name="arrhythmiaAfterSecond__afNinetyDaysAfterSecond" id="arrhythmiaAfterSecond__afNinetyDaysAfterSecond__true" v-bind:value="true" v-model="followUp.afNinetyDaysAfterSecond"><span>あり</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afNinetyDaysAfterSecond" id="arrhythmiaAfterSecond__afNinetyDaysAfterSecond__false" v-bind:value="false" v-model="followUp.afNinetyDaysAfterSecond"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="arrhythmiaAfterSecond__afNinetyDaysAfterSecondDate">2nd session 90日以降の再発日</label>
                <input type="date" name="arrhythmiaAfterSecond__afNinetyDaysAfterSecondDate" id="arrhythmiaAfterSecond__afNinetyDaysAfterSecondDate" v-model="followUp.afNinetyDaysAfterSecondDate">
            </p>
            <fieldset>
                <legend>2nd session 後のAF/AT種類</legend>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondKind" id="arrhythmiaAfterSecond__afAfterSecondKind__paf" value="PAF" v-model="followUp.afAfterSecondKind"><span>PAF</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondKind" id="arrhythmiaAfterSecond__afAfterSecondKind__peaf" value="PeAF" v-model="followUp.afAfterSecondKind"><span>PeAF</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondKind" id="arrhythmiaAfterSecond__afAfterSecondKind__pat" value="PAT" v-model="followUp.afAfterSecondKind"><span>PAT</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondKind" id="arrhythmiaAfterSecond__afAfterSecondKind__persisAt" value="Persistent AT" v-model="followUp.afAfterSecondKind"><span>Persistent AT</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondKind" id="arrhythmiaAfterSecond__afAfterSecondKind__none" value="None" v-model="followUp.afAfterSecondKind"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>2nd session 後、再発時の抗不整脈薬</legend>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmic" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmic__true" v-bind:value="true" v-model="followUp.afAfterSecondAntiarrhythmic"><span>あり</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmic" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmic__false" v-bind:value="false" v-model="followUp.afAfterSecondAntiarrhythmic"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>2nd session 後、再発時に抗不整脈薬開始</legend>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStart" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStart__true" v-bind:value="true" v-model="followUp.afAfterSecondAntiarrhythmicStart"><span>あり</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStart" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStart__false" v-bind:value="false" v-model="followUp.afAfterSecondAntiarrhythmicStart"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>2nd session 後、抗不整脈薬開始後にもAF/AT</legend>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStillAf" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStillAf__true" v-bind:value="true" v-model="followUp.afAfterSecondAntiarrhythmicStillAf"><span>あり</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStillAf" id="arrhythmiaAfterSecond__afAfterSecondAntiarrhythmicStillAf__false" v-bind:value="false" v-model="followUp.afAfterSecondAntiarrhythmicStillAf"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="arrhythmiaAfterSecond__moreThanThirdSession">3rd session以上の施行</label>
                <span>自動表示します</span>
            </p>
        </section>
        <section class="followUp__finalStatus">
            <h2>最終状態</h2>
            <fieldset>
                <legend>最終f/u時のAF/AT状態</legend>
                <label><input type="radio" name="finalStatus__afFinalStatusKind" id="finalStatus__afFinalStatusKind__paf" value="PAF" v-model="followUp.afFinalStatusKind"><span>PAF</span></label>
                <label><input type="radio" name="finalStatus__afFinalStatusKind" id="finalStatus__afFinalStatusKind__peaf" value="PeAF" v-model="followUp.afFinalStatusKind"><span>PeAF</span></label>
                <label><input type="radio" name="finalStatus__afFinalStatusKind" id="finalStatus__afFinalStatusKind__pat" value="PAT" v-model="followUp.afFinalStatusKind"><span>PAT</span></label>
                <label><input type="radio" name="finalStatus__afFinalStatusKind" id="finalStatus__afFinalStatusKind__persisAt" value="Persistent AT" v-model="followUp.afFinalStatusKind"><span>Persistent AT</span></label>
                <label><input type="radio" name="finalStatus__afFinalStatusKind" id="finalStatus__afFinalStatusKind__none" value="None" v-model="followUp.afFinalStatusKind"><span>なし</span></label>
            </fieldset>
        </section>
        <section class="followUp__oac">
            <h2>抗凝固療法の状況</h2>
            <fieldset>
                <legend>最終f/u時 抗凝固薬</legend>
                <label><input type="radio" name="oac__oacFinalFollow" id="oac__oacFinalFollow__true" v-bind:value="true" v-model="followUp.oacFinalFollow"><span>あり</span></label>
                <label><input type="radio" name="oac__oacFinalFollow" id="oac__oacFinalFollow__false" v-bind:value="false" v-model="followUp.oacFinalFollow"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>最終session後の抗凝固薬OFF（周術期を除く）</legend>
                <label><input type="radio" name="oac__oacOffAfterFinalSession" id="oac__oacOffAfterFinalSession__true" v-bind:value="true" v-model="followUp.oacOffAfterFinalSession"><span>あり</span></label>
                <label><input type="radio" name="oac__oacOffAfterFinalSession" id="oac__oacOffAfterFinalSession__false" v-bind:value="false" v-model="followUp.oacOffAfterFinalSession"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="oac__oacOffAfterFinalSessionDate">最終session後の抗凝固薬OFF日</label>
                <input type="date" name="oac__oacOffAfterFinalSessionDate" id="oac__oacOffAfterFinalSessionDate" v-model="followUp.oacOffAfterFinalSessionDate">
            </p>
            <fieldset>
                <legend>最終session後の抗凝固薬再開</legend>
                <label><input type="radio" name="oac__oacRestartAfterFinalSession" id="oac__oacRestartAfterFinalSession__true" v-bind:value="true" v-model="followUp.oacRestartAfterFinalSession"><span>あり</span></label>
                <label><input type="radio" name="oac__oacRestartAfterFinalSession" id="oac__oacRestartAfterFinalSession__false" v-bind:value="false" v-model="followUp.oacRestartAfterFinalSession"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="oac__oacReOffAfterFinalSessionDate">最終session後の抗凝固薬再OFF日（周術期を除く）</label>
                <input type="date" name="oac__oacReOffAfterFinalSessionDate" id="oac__oacReOffAfterFinalSessionDate" v-model="followUp.oacReOffAfterFinalSessionDate">
            </p>
            <p class="form__row">
                <label for="oac__oacRestartAfterFinalSessionDate">最終session後の抗凝固薬再再開日</label>
                <input type="date" name="oac__oacRestartAfterFinalSessionDate" id="oac__oacRestartAfterFinalSessionDate" v-model="followUp.oacRestartAfterFinalSessionDate">
            </p>
        </section>
        <section class="followUp__antiArrhythmic">
            <h2>抗不整脈法の状況</h2>
            <fieldset>
                <legend>最終f/u時 抗不整脈薬</legend>
                <label><input type="radio" name="antiArrhythmic__antiArrhythmicFinalFollow" id="antiArrhythmic__antiArrhythmicFinalFollow__true" v-bind:value="true" v-model="followUp.antiArrhythmicFinalFollow"><span>あり</span></label>
                <label><input type="radio" name="antiArrhythmic__antiArrhythmicFinalFollow" id="antiArrhythmic__antiArrhythmicFinalFollow__false" v-bind:value="false" v-model="followUp.antiArrhythmicFinalFollow"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="antiArrhythmic__antiArrhythmicAfterFinalSessionOffDate">最終session後の抗不整脈薬OFF日</label>
                <input type="date" name="antiArrhythmic__antiArrhythmicAfterFinalSessionOffDate" id="antiArrhythmic__antiArrhythmicAfterFinalSessionOffDate" v-model="followUp.antiArrhythmicAfterFinalSessionOffDate">
            </p>
            <p class="form__row">
                <label for="antiArrhythmic__antiArrhythmicAfterFinalSessionStartDate">最終session後の抗不整脈薬開始日</label>
                <input type="date" name="antiArrhythmic__antiArrhythmicAfterFinalSessionStartDate" id="antiArrhythmic__antiArrhythmicAfterFinalSessionStartDate" v-model="followUp.antiArrhythmicAfterFinalSessionStartDate">
            </p>
            <p class="form__row">
                <label for="antiArrhythmic__antiArrhythmicAfterFinalSessionReOffDate">最終session後の抗不整脈薬再OFF日</label>
                <input type="date" name="antiArrhythmic__antiArrhythmicAfterFinalSessionReOffDate" id="antiArrhythmic__antiArrhythmicAfterFinalSessionReOffDate" v-model="followUp.antiArrhythmicAfterFinalSessionReOffDate">
            </p>
            <p class="form__row">
                <label for="antiArrhythmic__antiArrhythmicAfterFinalSessionRestartDate">最終session後の抗不整脈薬再再開日</label>
                <input type="date" name="antiArrhythmic__antiArrhythmicAfterFinalSessionRestartDate" id="antiArrhythmic__antiArrhythmicAfterFinalSessionRestartDate" v-model="followUp.antiArrhythmicAfterFinalSessionRestartDate">
            </p>
        </section>
            <h2>UCG</h2>
        <fieldset class="selectTab">
            <label><input type="radio" name="selectUcg" id="selectUcg1" value="1" v-model="ui.selectUcg"><span>0-3か月後のUCG</span></label>
            <label><input type="radio" name="selectUcg" id="selectUcg2" value="2" v-model="ui.selectUcg"><span>3-6か月後のUCG</span></label>
            <label><input type="radio" name="selectUcg" id="selectUcg3" value="3" v-model="ui.selectUcg"><span>6-12か月後のUCG</span></label>
        </fieldset>
        <section class="followUp__ucg selectCard" v-bind:class="{ show: ui.selectUcg == '1' }">
            <p class="form__row">
                <label for="ucg__ucg1Date">0-3か月後のf/u UCG日</label>
                <input type="date" name="ucg__ucg1Date" id="ucg__ucg1Date" v-model="followUp.ucg1Date">
            </p>
            <UCG :ucgId="followUp.ucgId1" @enableParentSave="enableSave" ref="ucg1"></UCG>
        </section>
        <section class="followUp__ucg selectCard" v-bind:class="{ show: ui.selectUcg == '2' }">
            <p class="form__row">
                <label for="ucg__ucg1Date">3-6か月後のf/u UCG日</label>
                <input type="date" name="ucg__ucg2Date" id="ucg__ucg2Date" v-model="followUp.ucg2Date">
            </p>
            <UCG :ucgId="followUp.ucgId2" @enableParentSave="enableSave" ref="ucg2"></UCG>
        </section>
        <section class="followUp__ucg selectCard" v-bind:class="{ show: ui.selectUcg == '3' }">
            <p class="form__row">
                <label for="ucg__ucg1Date">6-12か月後のf/u UCG日</label>
                <input type="date" name="ucg__ucg3Date" id="ucg__ucg3Date" v-model="followUp.ucg3Date">
            </p>
            <UCG :ucgId="followUp.ucgId3" @enableParentSave="enableSave" ref="ucg3"></UCG>
        </section>
        <h2>血液検査</h2>
        <fieldset class="selectTab">
            <label><input type="radio" name="selectBlood" id="selectBlood1" value="1" v-model="ui.selectBlood"><span>0-3か月後の血液検査</span></label>
            <label><input type="radio" name="selectBlood" id="selectBlood2" value="2" v-model="ui.selectBlood"><span>3-6か月後の血液検査</span></label>
            <label><input type="radio" name="selectBlood" id="selectBlood3" value="3" v-model="ui.selectBlood"><span>6-12か月後の血液検査</span></label>
        </fieldset>
        <section class="followUp__blood selectCard" v-bind:class="{ show: ui.selectBlood == '1' }">
            <p class="form__row">
                <label for="blood__blood1Date">0-3か月後のf/u 血液検査日</label>
                <input type="date" name="blood__blood1Date" id="blood__blood1Date" v-model="followUp.blood1Date">
            </p>
            <Blood :bloodId="followUp.bloodId1" @enableParentSave="enableSave" ref="blood1"></Blood>
        </section>
        <section class="followUp__blood selectCard" v-bind:class="{ show: ui.selectBlood == '2' }">
            <p class="form__row">
                <label for="blood__blood2Date">3-6か月後のf/u 血液検査日</label>
                <input type="date" name="blood__blood2Date" id="blood__blood2Date" v-model="followUp.blood2Date">
            </p>
            <Blood :bloodId="followUp.bloodId2" @enableParentSave="enableSave" ref="blood2"></Blood>
        </section>
        <section class="followUp__blood selectCard" v-bind:class="{ show: ui.selectBlood == '3' }">
            <p class="form__row">
                <label for="blood__blood3Date">6-12か月後のf/u 血液検査日</label>
                <input type="date" name="blood__blood3Date" id="blood__blood3Date" v-model="followUp.blood3Date">
            </p>
            <Blood :bloodId="followUp.bloodId3" @enableParentSave="enableSave" ref="blood3"></Blood>
        </section>
        <h2>Holter</h2>
        <fieldset class="selectTab">
            <label v-for="holter in holters" v-bind:key="holter.holter_id"><input type="radio" name="selectHolter" v-bind:id="holter.holter_id" v-bind:value="holter.holter_id" v-model="ui.selectHolter"><span v-if="holter.date">{{holter.date}}</span><span v-else>日付未入力</span></label>
            <button v-on:click="createHolter">新規Holter</button>
        </fieldset>
        <section v-for="holter in holters" v-bind:key="'holter' + String(holter.holter_id)" class="followUp__holter selectCard" v-bind:class="{ show: ui.selectHolter == holter.holter_id }">
            <Holter :holterId="holter.holter_id" @enableParentSave="enableSave" :ref="'holter' + holter.holter_id"></Holter>
        </section>
        <section class="followUp__followUpItems">
            <h2>f/u項目</h2>
            <fieldset>
                <legend>PV-CT</legend>
                <label><input type="radio" name="followUpItems__pvCt" id="followUpItems__pvCt__true" v-bind:value="true" v-model="followUp.pvCt"><span>あり</span></label>
                <label><input type="radio" name="followUpItems__pvCt" id="followUpItems__pvCt__false" v-bind:value="false" v-model="followUp.pvCt"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="followUpItems__ctDate">f/u CT日</label>
                <input type="date" name="followUpItems__ctDate" id="followUpItems__ctDate" v-model="followUp.ctDate">
            </p>
            <fieldset>
                <legend>PV stenosis</legend>
                <label><input type="radio" name="followUpItems__pvStenosis" id="followUpItems__pvStenosis__true" v-bind:value="true" v-model="followUp.pvStenosis"><span>あり</span></label>
                <label><input type="radio" name="followUpItems__pvStenosis" id="followUpItems__pvStenosis__false" v-bind:value="false" v-model="followUp.pvStenosis"><span>なし</span></label>
            </fieldset>
        </section>
        <section class="followUp__followUpEvents">
            <h2>f/uイベント</h2>
            <fieldset>
                <legend>心不全</legend>
                <label><input type="radio" name="followUpEvents__heartFailure" id="followUpEvents__heartFailure__true" v-bind:value="true" v-model="followUp.heartFailure"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__heartFailure" id="followUpEvents__heartFailure__false" v-bind:value="false" v-model="followUp.heartFailure"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.heartFailure }">
            <label for="followUpEvents__heartFailureAdmissionDate">心不全入院日</label>
                <input type="date" name="followUpEvents__heartFailureAdmissionDate" id="followUpEvents__heartFailureAdmissionDate" v-model="followUp.heartFailureAdmissionDate">
            </p>
            <fieldset>
                <legend>脳梗塞/TIA</legend>
                <label><input type="radio" name="followUpEvents__cerebralInfarction" id="followUpEvents__cerebralInfarction__true" v-bind:value="true" v-model="followUp.cerebralInfarction"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__cerebralInfarction" id="followUpEvents__cerebralInfarction__false" v-bind:value="false" v-model="followUp.cerebralInfarction"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.cerebralInfarction }">
                <label for="followUpEvents__cerebralInfarctionDate">脳梗塞/TIA発症日</label>
                <input type="date" name="followUpEvents__cerebralInfarctionDate" id="followUpEvents__cerebralInfarctionDate" v-model="followUp.cerebralInfarctionDate">
            </p>
            <p class="form__row" :class="{ hidden: !followUp.cerebralInfarction }">
                <label for="followUpEvents__cerebralInfarctionComment">脳梗塞コメント</label>
                <input type="text" name="followUpEvents__cerebralInfarctionComment" id="followUpEvents__cerebralInfarctionComment" v-model="followUp.cerebralInfarctionComment">
            </p>
            <fieldset>
                <legend>その他の全身性塞栓症</legend>
                <label><input type="radio" name="followUpEvents__embolus" id="followUpEvents__embolus__true" v-bind:value="true" v-model="followUp.embolus"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__embolus" id="followUpEvents__embolus__false" v-bind:value="false" v-model="followUp.embolus"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.embolus }">
                <label for="followUpEvents__embolusPart">その他の全身性塞栓症発症部位</label>
                <input type="text" name="followUpEvents__embolusPart" id="followUpEvents__embolusPart" v-model="followUp.embolusPart">
            </p>
            <p class="form__row" :class="{ hidden: !followUp.embolus}">
                <label for="followUpEvents__embolusDate">その他の全身性塞栓症発症日</label>
                <input type="date" name="followUpEvents__embolusDate" id="followUpEvents__embolusDate" v-model="followUp.embolusDate">
            </p>
            <fieldset>
                <legend>出血</legend>
                <label><input type="radio" name="followUpEvents__bleeding" id="followUpEvents__bleeding__true" v-bind:value="true" v-model="followUp.bleeding"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__bleeding" id="followUpEvents__bleeding__false" v-bind:value="false" v-model="followUp.bleeding"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.bleeding}">
                <label for="followUpEvents__bleedingDate">出血日</label>
                <input type="date" name="followUpEvents__bleedingDate" id="followUpEvents__bleedingDate" v-model="followUp.bleedingDate">
            </p>
            <p class="form__row" :class="{ hidden: !followUp.bleeding }">
                <label for="followUpEvents__bleedingDetail">出血詳細</label>
                <input type="text" name="followUpEvents__bleedingDetail" id="followUpEvents__bleedingDetail" v-model="followUp.bleedingDetail">
            </p>
            <fieldset>
                <legend>ISTH大出血</legend>
                <label><input type="radio" name="followUpEvents__isth" id="followUpEvents__isth__true" v-bind:value="true" v-model="followUp.isth"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__isth" id="followUpEvents__isth__false" v-bind:value="false" v-model="followUp.isth"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>頭蓋内出血</legend>
                <label><input type="radio" name="followUpEvents__headBleed" id="followUpEvents__headBleed__true" v-bind:value="true" v-model="followUp.headBleed"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__headBleed" id="followUpEvents__headBleed__false" v-bind:value="false" v-model="followUp.headBleed"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.headBleed}">
                <label for="followUpEvents__headBleedDate">頭蓋内出血日</label>
                <input type="date" name="followUpEvents__headBleedDate" id="followUpEvents__headBleedDate" v-model="followUp.headBleedDate">
            </p>
            <fieldset>
                <legend>消化管出血</legend>
                <label><input type="radio" name="followUpEvents__gastroBleed" id="followUpEvents__gastroBleed__true" v-bind:value="true" v-model="followUp.gastroBleed"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__gastroBleed" id="followUpEvents__gastroBleed__false" v-bind:value="false" v-model="followUp.gastroBleed"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.gastroBleed}">
                <label for="followUpEvents__gastroBleedDate">消化管出血日</label>
                <input type="date" name="followUpEvents__gastroBleedDate" id="followUpEvents__gastroBleedDate" v-model="followUp.gastroBleedDate">
            </p>
            <fieldset>
                <legend>死亡</legend>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__heartFailure" value="Heart Failure" v-model="followUp.death"><span>心不全死</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__cardiac" value="Cardiac" v-model="followUp.death"><span>心臓突然死</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__cerebral" value="Cerebral Infarction" v-model="followUp.death"><span>脳梗塞死</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__embolus" value="Embolus" v-model="followUp.death"><span>その他の全身塞栓症による死亡</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__gastroBleed" value="Gastrointestinal Bleeding" v-model="followUp.death"><span>消化管出血による死亡</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__pat" value="Other" v-model="followUp.death"><span>塞栓症、出血、心筋梗塞以外の死亡</span></label>
                <label><input type="radio" name="followUpEvents__death" id="followUpEvents__death__none" value="None" v-model="followUp.death"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: followUp.death != 'Other' }">
                <label for="basic__height">死亡原因</label>
                <input type="text" name="followUpEvents__deathDetail" id="followUpEvents__deathDetail" v-model="followUp.deathDetail">
            </p>
            <p class="form__row" :class="{ hidden: followUp.death == 'None' }">
            <label for="followUpEvents__deathDate">死亡日</label>
                <input type="date" name="followUpEvents__deathDate" id="followUpEvents__deathDate" v-model="followUp.deathDate">
            </p>
            <fieldset>
                <legend>新規デバイス移植</legend>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__pm" value="PM" v-model="followUp.newDevice"><span>PM</span></label>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__icd" value="ICD" v-model="followUp.newDevice"><span>ICD</span></label>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__crtp" value="CRTP" v-model="followUp.newDevice"><span>CRTP</span></label>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__crtd" value="CRTD" v-model="followUp.newDevice"><span>CRTD</span></label>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__loop" value="Loop" v-model="followUp.newDevice"><span>ループレコーダー</span></label>
                <label><input type="radio" name="followUpEvents__newDevice" id="followUpEvents__newDevice__none" value="None" v-model="followUp.newDevice"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.newDevice || followUp.newDevice == 'None' }">
                <label for="followUpEvents__newDeviceDate">新規デバイス移植日</label>
                <input type="date" name="followUpEvents__newDeviceDate" id="followUpEvents__newDeviceDate" v-model="followUp.newDeviceDate">
            </p>
            <fieldset>
                <legend>PCI施行</legend>
                <label><input type="radio" name="followUpEvents__pci" id="followUpEvents__pci__true" v-bind:value="true" v-model="followUp.pci"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__pci" id="followUpEvents__pci__false" v-bind:value="false" v-model="followUp.pci"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.pci}">
                <label for="followUpEvents__pciDate">PCI施行日</label>
                <input type="date" name="followUpEvents__pciDate" id="followUpEvents__pciDate" v-model="followUp.pciDate">
            </p>
            <fieldset>
                <legend>CABG施行</legend>
                <label><input type="radio" name="followUpEvents__cabg" id="followUpEvents__cabg__true" v-bind:value="true" v-model="followUp.cabg"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__cabg" id="followUpEvents__cabg__false" v-bind:value="false" v-model="followUp.cabg"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.cabg}">
                <label for="followUpEvents__cabgDate">CABG施行日</label>
                <input type="date" name="followUpEvents__cabgDate" id="followUpEvents__cabgDate" v-model="followUp.cabgDate">
            </p>
            <fieldset>
                <legend>その他の心臓手術施行</legend>
                <label><input type="radio" name="followUpEvents__heartOpe" id="followUpEvents__heartOpe__true" v-bind:value="true" v-model="followUp.heartOpe"><span>あり</span></label>
                <label><input type="radio" name="followUpEvents__heartOpe" id="followUpEvents__heartOpe__false" v-bind:value="false" v-model="followUp.heartOpe"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !followUp.heartOpe}">
                <label for="followUpEvents__heartOpeDate">その他の心臓手術日</label>
                <input type="date" name="followUpEvents__heartOpeDate" id="followUpEvents__heartOpeDate" v-model="followUp.heartOpeDate">
            </p>
            <p class="form__row">
                <label for="followUpEvents__lastDate">最終観察日</label>
                <input type="date" name="followUpEvents__lastDate" id="followUpEvents__lastDate" v-model="followUp.lastDate">
            </p>
            <p class="form__row">
                <label for="followUpEvents__primaryDoctor">かかりつけ医</label>
                <input type="text" name="followUpEvents__primaryDoctor" id="followUpEvents__primaryDoctor" v-model="followUp.primaryDoctor">
            </p>
        </section>
        <section class="form__save">
            <button class="form__saveButton" type="button" :disabled="isSaveDisabled" v-on:click="updateAll">保存する</button>
        </section>
    </section>
</template>
<script>
import UCG from '@/components/ucg.vue'
import Blood from '@/components/Blood.vue'
import Holter from '@/components/Holter.vue'
export default {
    name: 'FollowUp',
    components: {
        UCG,
        Blood,
        Holter
    },
    data() {
        return {
            followUp: {
                ucgId1: null,
                ucgId2: null,
                ucgId3: null,
                bloodId1: null,
                bloodId2: null,
                bloodId3: null
            },
            ui: {
                selectUcg: '1',
                selectBlood: '1',
                //selectHolter: this.holters[0]
            },
            holters: [],
            isSaveDisabled: true
        }
    },
    methods: {
        updateFollowUp: function(){
            this.axios.post( 
                this.$store.getters.apiRoot + '/followup/' + this.$route.params.patientId,//this.$store.getters.patientId,
                this.followUp, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'Follow up update: SUCCESS' )
                } else {
                    console.log( 'Follow up update: FAILED' )
                }
            });
        },
        getFollowUp: function(){
            this.axios.get( this.$store.getters.apiRoot + '/followup/' + this.$route.params.patientId, { //this.$store.getters.patientId
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.followUp = response.data;
            })
        },
        getHolterList: function() {
            this.axios.get( this.$store.getters.apiRoot + '/holter_list/' + this.$route.params.patientId, { //this.$store.getters.patientId
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.holters = response.data;
            })
        },
        createHolter: function() {
            this.axios.get( this.$store.getters.apiRoot + '/holter/' + this.$route.params.patientId + '/new', { //this.$store.getters.patientId
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.holters = response.data;
            })

        },
        disableSave: function(){
            this.isSaveDisabled = true;
        },
        enableSave: function(){
            this.isSaveDisabled = false;
        },
        updateAll: function() {
            this.updateFollowUp();
            this.$refs.ucg1.updateUcg();
            this.$refs.ucg2.updateUcg();
            this.$refs.ucg3.updateUcg();
            this.$refs.blood1.updateBlood();
            this.$refs.blood2.updateBlood();
            this.$refs.blood3.updateBlood();

            for( let i = 0; i < this.holters.length; i++ ){
                let refHolterId = this.holters[i].holter_id;
                console.log('holter' + refHolterId);
                this.$refs['holter' + refHolterId][0].updateHolter();
            }

            this.disableSave();
        }
    },
    mounted: function() {
        this.$emit('pushContents');
        this.getFollowUp();
        this.getHolterList();
    },
    beforeUpdate: function() {
        //this.updateFollowUp();
    },
    watch: {
        followUp: {
            handler: function() {
                this.enableSave();
            },
            deep: true
        }
    },
    computed: {
        ucgId: {
            get: function( number ) {
                return this.followUp[ 'ucgId' + String(number) ];
            },
            set: function( number, id ) {
                this.followUp[ 'ucgId' + String( number ) ] = id;
            }
        }
    }
}
</script>
<style>
/*
.followUp__ucg,
.followUp__blood,
.followUp__holter {
    display: none;
    padding: 1em;
    margin-top: 0;
    border: 1px solid gray;
}
.followUp__ucg.show,
.followUp__blood.show,
.followUp__holter.show{
    display: block;
}
*/
</style>
