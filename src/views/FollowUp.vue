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
                <label><input type="radio" name="arrhythmiaAfterSecond__afAntiarrhythmicStillAf" id="arrhythmiaAfterSecond__afAntiarrhythmicStillAf__true" v-bind:value="true" v-model="followUp.afAntiarrhythmicStillAf"><span>あり</span></label>
                <label><input type="radio" name="arrhythmiaAfterSecond__afAntiarrhythmicStillAf" id="arrhythmiaAfterSecond__afAntiarrhythmicStillAf__false" v-bind:value="false" v-model="followUp.afAntiarrhythmicStillAf"><span>なし</span></label>
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
            <h2>抗凝固療法の状況</h2>
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
                <label><input type="radio" name="followUpItems__pcStenosis" id="followUpItems__pcStenosis__true" v-bind:value="true" v-model="followUp.pcStenosis"><span>あり</span></label>
                <label><input type="radio" name="followUpItems__pcStenosis" id="followUpItems__pcStenosis__false" v-bind:value="false" v-model="followUp.pcStenosis"><span>なし</span></label>
            </fieldset>
        </section>
    </section>
</template>
<script>
export default {
    name: 'FollowUp',
    data() {
        return {
            followUp: {}
        }
    },
    mounted: function() {
        this.$emit('pushContents');
    }
}
</script>



