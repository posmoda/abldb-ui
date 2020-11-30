<template>
    <section class="followingAblation__date">
        <h1>初回アブレーション内服薬</h1>
        <section class="followingAblation__medication">
            <h2>施行日</h2>
            <p class="form__row">
                <label for="followingAblation__date">施行日</label>
                <input type="date" name="followingAblation__date" id="followingAblation__date" v-model.number="followingAblation.date">
            </p>
        </section>
        <UCG></UCG>
        <section class="followingAblation__content">
            <h2>Session内容</h2>
            <fieldset>
                <legend>3D system</legend>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__carto" value="CARTO" v-model="followingAblation.threedSystem"><span>CARTO</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__ensite" value="EnSite" v-model="followingAblation.threedSystem"><span>EnSite</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__rhythmia" value="Rhythmia" v-model="followingAblation.threedSystem"><span>Rhythmia</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__none" value="None" v-model="followingAblation.threedSystem"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio05v">左房 Low voltage area 割合 (&lt;0.5V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio05v" id="content__leftLowVoltageRatio05v" v-model.number="followingAblation.leftLowVoltageRatio05v">
            </p>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio08v">左房 Low voltage area 割合 (&lt;0.8V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio08v" id="content__leftLowVoltageRatio08v" v-model.number="followingAblation.leftLowVoltageRatio08v">
            </p>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio05v">左房 Low voltage area 割合 (&lt;1.0V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio10v" id="content__leftLowVoltageRatio10v" v-model.number="followingAblation.leftLowVoltageRatio10v">
            </p>
            <fieldset>
                <legend>LPV Re-Isolation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LSPVのみ</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LIPVのみ</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PRV Re-Isolation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RSPVのみ</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RIPVのみ</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Re-BOX</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Roof Line)</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Bottom Line)</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Dormant Conduction 確認</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <h3>PVI以外</h3>
            <fieldset>
                <legend>SVC Rec</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCI</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCIの完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規PLSVC Isolation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Non-PV Foci</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>




            <fieldset>
                <legend>Low voltage ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LA CFAE</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RA CFAE</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CS CFAE</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>GP</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>





            <fieldset>
                <legend>Chemical</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Rec</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Rec</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Rec</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation CS通電</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation 完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line CS通電</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line 完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Mitral Line 完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Rec</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation 完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI 完成</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>AVN ablation</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="followingAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="followingAblation.eepvi"><span>なし</span></label>
            </fieldset>
        </section>
    </section>
</template>
<script>
import UCG from '@/components/ucg.vue'
export default {
    components: {
        UCG
    },
    data() {
        return {
            followingAblation: {
            }
        }
    }
}
</script>
