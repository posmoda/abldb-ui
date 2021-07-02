<template>
    <section class="followingAblation__date">
        <h1>{{ ablationCount }}回目のアブレーション</h1>
        <section class="followingAblation__medication">
            <h2>施行日</h2>
            <p class="form__row">
                <label for="followingAblation__date">施行日</label>
                <input type="date" name="followingAblation__date" id="followingAblation__date" v-model="followingAblation.date">
            </p>
        </section>
        <!--<UCG :ucgId="followingAblation.ucgId"></UCG>-->
        <section class="followingAblation__content">
            <h2>Session内容</h2>
            <fieldset>
                <legend>3D system</legend>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__carto" value="CARTO" v-model="followingAblation.threedSystem"><span>CARTO</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__ensite" value="EnSite" v-model="followingAblation.threedSystem"><span>EnSite</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__rhythmia" value="Rhythmia" v-model="followingAblation.threedSystem"><span>Rhythmia</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__none" value="None" v-model="followingAblation.threedSystem"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LPV Re-Isolation</legend>
                <label><input type="radio" name="content__lpvReisolation" id="content__lpvReisolation__true" v-bind:value="true" v-model="followingAblation.lpvReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__lpvReisolation" id="content__lpvReisolation__false" v-bind:value="false" v-model="followingAblation.lpvReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LSPVのみ</legend>
                <label><input type="radio" name="content__onlyLspv" id="content__onlyLspv__true" v-bind:value="true" v-model="followingAblation.onlyLspv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyLspv" id="content__onlyLspv__false" v-bind:value="false" v-model="followingAblation.onlyLspv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LIPVのみ</legend>
                <label><input type="radio" name="content__onlyLipv" id="content__onlyLipv__true" v-bind:value="true" v-model="followingAblation.onlyLipv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyLipv" id="content__onlyLipv__false" v-bind:value="false" v-model="followingAblation.onlyLipv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PRV Re-Isolation</legend>
                <label><input type="radio" name="content__rpvReisolation" id="content__rpvReisolation__true" v-bind:value="true" v-model="followingAblation.rpvReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__rpvReisolation" id="content__rpvReisolation__false" v-bind:value="false" v-model="followingAblation.rpvReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RSPVのみ</legend>
                <label><input type="radio" name="content__onlyRspv" id="content__onlyRspv__true" v-bind:value="true" v-model="followingAblation.onlyRspv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyRspv" id="content__onlyRspv__false" v-bind:value="false" v-model="followingAblation.onlyRspv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RIPVのみ</legend>
                <label><input type="radio" name="content__onlyRipv" id="content__onlyRipv__true" v-bind:value="true" v-model="followingAblation.onlyRipv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyRipv" id="content__onlyRipv__false" v-bind:value="false" v-model="followingAblation.onlyRipv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Re-BOX</legend>
                <label><input type="radio" name="content__reBox" id="content__reBox__true" v-bind:value="true" v-model="followingAblation.reBox"><span>あり</span></label>
                <label><input type="radio" name="content__reBox" id="content__reBox__false" v-bind:value="false" v-model="followingAblation.reBox"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Roof Line)</legend>
                <label><input type="radio" name="content__pwReisolationRoof" id="content__pwReisolationRoof__true" v-bind:value="true" v-model="followingAblation.pwReisolationRoof"><span>あり</span></label>
                <label><input type="radio" name="content__pwReisolationRoof" id="content__pwReisolationRoof__false" v-bind:value="false" v-model="followingAblation.pwReisolationRoof"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Bottom Line)</legend>
                <label><input type="radio" name="content__pwReisolationBottom" id="content__pwReisolationBottom__true" v-bind:value="true" v-model="followingAblation.pwReisolationBottom"><span>あり</span></label>
                <label><input type="radio" name="content__pwReisolationBottom" id="content__pwReisolationBottom__false" v-bind:value="false" v-model="followingAblation.pwReisolationBottom"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Dormant Conduction 確認</legend>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__true" v-bind:value="true" v-model="followingAblation.dormantConduction"><span>あり</span></label>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__false" v-bind:value="false" v-model="followingAblation.dormantConduction"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__true" v-bind:value="true" v-model="followingAblation.afByAtp"><span>あり</span></label>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__false" v-bind:value="false" v-model="followingAblation.afByAtp"><span>なし</span></label>
            </fieldset>
            <h3>PVI以外</h3>
            <fieldset>
                <legend>SVC Rec</legend>
                <label><input type="radio" name="content__svcRec" id="content__svcRec__true" v-bind:value="true" v-model="followingAblation.svcRec"><span>あり</span></label>
                <label><input type="radio" name="content__svcRec" id="content__svcRec__false" v-bind:value="false" v-model="followingAblation.svcRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation</legend>
                <label><input type="radio" name="content__svcReisolation" id="content__svcReisolation__true" v-bind:value="true" v-model="followingAblation.svcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__svcReisolation" id="content__svcReisolation__false" v-bind:value="false" v-model="followingAblation.svcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__completedSvcReisolation" id="content__completedSvcReisolation__true" v-bind:value="true" v-model="followingAblation.completedSvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__completedSvcReisolation" id="content__completedSvcReisolation__false" v-bind:value="false" v-model="followingAblation.completedSvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCI</legend>
                <label><input type="radio" name="content__newSvci" id="content__newSvci__true" v-bind:value="true" v-model="followingAblation.newSvci"><span>あり</span></label>
                <label><input type="radio" name="content__newSvci" id="content__newSvci__false" v-bind:value="false" v-model="followingAblation.newSvci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCIの完成</legend>
                <label><input type="radio" name="content__completedNewSvci" id="content__completedNewSvci__true" v-bind:value="true" v-model="followingAblation.completedNewSvci"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewSvci" id="content__completedNewSvci__false" v-bind:value="false" v-model="followingAblation.completedNewSvci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation</legend>
                <label><input type="radio" name="content__plsvcReisolation" id="content__plsvcReisolation__true" v-bind:value="true" v-model="followingAblation.plsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__plsvcReisolation" id="content__plsvcReisolation__false" v-bind:value="false" v-model="followingAblation.plsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__completedPlsvcReisolation" id="content__completedPlsvcReisolation__true" v-bind:value="true" v-model="followingAblation.completedPlsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__completedPlsvcReisolation" id="content__completedPlsvcReisolation__false" v-bind:value="false" v-model="followingAblation.completedPlsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規PLSVC Isolation</legend>
                <label><input type="radio" name="content__newPlsvcReisolation" id="content__newPlsvcReisolation__true" v-bind:value="true" v-model="followingAblation.newPlsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__newPlsvcReisolation" id="content__newPlsvcReisolation__false" v-bind:value="false" v-model="followingAblation.newPlsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Non-PV Foci</legend>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__true" v-bind:value="true" v-model="followingAblation.nonPvFoci"><span>あり</span></label>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__false" v-bind:value="false" v-model="followingAblation.nonPvFoci"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__nonPvFociPlace">Non-PV Foci 場所</label>
                <input type="text" name="content__nonPvFociPlace" id="content__nonPvFociPlace" v-model="followingAblation.nonPvFociPlace">
            </p>
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
                <legend>Low voltage ablation</legend>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__true" v-bind:value="true" v-model="followingAblation.lowVoltageAbl"><span>あり</span></label>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__false" v-bind:value="false" v-model="followingAblation.lowVoltageAbl"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LA CFAE</legend>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__true" v-bind:value="true" v-model="followingAblation.laCfae"><span>あり</span></label>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__false" v-bind:value="false" v-model="followingAblation.laCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RA CFAE</legend>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__true" v-bind:value="true" v-model="followingAblation.raCfae"><span>あり</span></label>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__false" v-bind:value="false" v-model="followingAblation.raCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CS CFAE</legend>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__true" v-bind:value="true" v-model="followingAblation.csCfae"><span>あり</span></label>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__false" v-bind:value="false" v-model="followingAblation.csCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>GP</legend>
                <label><input type="radio" name="content__gp" id="content__gp__true" v-bind:value="true" v-model="followingAblation.gp"><span>あり</span></label>
                <label><input type="radio" name="content__gp" id="content__gp__false" v-bind:value="false" v-model="followingAblation.gp"><span>なし</span></label>
            </fieldset>
            <h3>その他の substrate ablation 詳細</h3>
            <fieldset>
                <legend>Chemical</legend>
                <label><input type="radio" name="content__chemical" id="content__chemical__true" v-bind:value="true" v-model="followingAblation.chemical"><span>あり</span></label>
                <label><input type="radio" name="content__chemical" id="content__chemical__false" v-bind:value="false" v-model="followingAblation.chemical"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Rec</legend>
                <label><input type="radio" name="content__roofLineRec" id="content__roofLineRec__true" v-bind:value="true" v-model="followingAblation.roofLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineRec" id="content__roofLineRec__false" v-bind:value="false" v-model="followingAblation.roofLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation</legend>
                <label><input type="radio" name="content__roofLineReablation" id="content__roofLineReablation__true" v-bind:value="true" v-model="followingAblation.roofLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineReablation" id="content__roofLineReablation__false" v-bind:value="false" v-model="followingAblation.roofLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__completedRoofLineReablation" id="content__completedRoofLineReablation__true" v-bind:value="true" v-model="followingAblation.completedRoofLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedRoofLineReablation" id="content__completedRoofLineReablation__false" v-bind:value="false" v-model="followingAblation.completedRoofLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line</legend>
                <label><input type="radio" name="content__newRoofLine" id="content__newRoofLine__true" v-bind:value="true" v-model="followingAblation.newRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__newRoofLine" id="content__newRoofLine__false" v-bind:value="false" v-model="followingAblation.newRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line完成</legend>
                <label><input type="radio" name="content__completedNewRoofLine" id="content__completedNewRoofLine__true" v-bind:value="true" v-model="followingAblation.completedNewRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewRoofLine" id="content__completedNewRoofLine__false" v-bind:value="false" v-model="followingAblation.completedNewRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Rec</legend>
                <label><input type="radio" name="content__bottomLineRec" id="content__bottomLineRec__true" v-bind:value="true" v-model="followingAblation.bottomLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineRec" id="content__bottomLineRec__false" v-bind:value="false" v-model="followingAblation.bottomLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation</legend>
                <label><input type="radio" name="content__bottomLineReablation" id="content__bottomLineReablation__true" v-bind:value="true" v-model="followingAblation.bottomLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineReablation" id="content__bottomLineReablation__false" v-bind:value="false" v-model="followingAblation.bottomLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__completedBottomLineReablation" id="content__completedBottomLineReablation__true" v-bind:value="true" v-model="followingAblation.completedBottomLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedBottomLineReablation" id="content__completedBottomLineReablation__false" v-bind:value="false" v-model="followingAblation.completedBottomLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line</legend>
                <label><input type="radio" name="content__newBottomLine" id="content__newBottomLine__true" v-bind:value="true" v-model="followingAblation.newBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__newBottomLine" id="content__newBottomLine__false" v-bind:value="false" v-model="followingAblation.newBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line完成</legend>
                <label><input type="radio" name="content__completedNewBottomLine" id="content__completedNewBottomLine__true" v-bind:value="true" v-model="followingAblation.completedNewBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewBottomLine" id="content__completedNewBottomLine__false" v-bind:value="false" v-model="followingAblation.completedNewBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Rec</legend>
                <label><input type="radio" name="content__mitralLineRec" id="content__mitralLineRec__true" v-bind:value="true" v-model="followingAblation.mitralLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineRec" id="content__mitralLineRec__false" v-bind:value="false" v-model="followingAblation.mitralLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation</legend>
                <label><input type="radio" name="content__mitralLineReablation" id="content__mitralLineReablation__true" v-bind:value="true" v-model="followingAblation.mitralLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineReablation" id="content__mitralLineReablation__false" v-bind:value="false" v-model="followingAblation.mitralLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation CS通電</legend>
                <label><input type="radio" name="content__mitralLineReablationCs" id="content__mitralLineReablationCs__true" v-bind:value="true" v-model="followingAblation.mitralLineReablationCs"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineReablationCs" id="content__mitralLineReablationCs__false" v-bind:value="false" v-model="followingAblation.mitralLineReablationCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation 完成</legend>
                <label><input type="radio" name="content__completedMitralLineReablation" id="content__completedMitralLineReablation__true" v-bind:value="true" v-model="followingAblation.completedMitralLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedMitralLineReablation" id="content__completedMitralLineReablation__false" v-bind:value="false" v-model="followingAblation.completedMitralLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line</legend>
                <label><input type="radio" name="content__newPostMitralLine" id="content__newPostMitralLine__true" v-bind:value="true" v-model="followingAblation.newPostMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__newPostMitralLine" id="content__newPostMitralLine__false" v-bind:value="false" v-model="followingAblation.newPostMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line CS通電</legend>
                <label><input type="radio" name="content__newPostMitralLineCs" id="content__newPostMitralLineCs__true" v-bind:value="true" v-model="followingAblation.newPostMitralLineCs"><span>あり</span></label>
                <label><input type="radio" name="content__newPostMitralLineCs" id="content__newPostMitralLineCs__false" v-bind:value="false" v-model="followingAblation.newPostMitralLineCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line</legend>
                <label><input type="radio" name="content__newAnteriorMitralLine" id="content__newAnteriorMitralLine__true" v-bind:value="true" v-model="followingAblation.newAnteriorMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__newAnteriorMitralLine" id="content__newAnteriorMitralLine__false" v-bind:value="false" v-model="followingAblation.newAnteriorMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedNewAnteriorMitralLine" id="content__completedNewAnteriorMitralLine__true" v-bind:value="true" v-model="followingAblation.completedNewAnteriorMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewAnteriorMitralLine" id="content__completedNewAnteriorMitralLine__false" v-bind:value="false" v-model="followingAblation.completedNewAnteriorMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedNewMitralLine" id="content__completedNewMitralLine__true" v-bind:value="true" v-model="followingAblation.completedNewMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewMitralLine" id="content__completedNewMitralLine__false" v-bind:value="false" v-model="followingAblation.completedNewMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Rec</legend>
                <label><input type="radio" name="content__ctiRec" id="content__ctiRec__true" v-bind:value="true" v-model="followingAblation.ctiRec"><span>あり</span></label>
                <label><input type="radio" name="content__ctiRec" id="content__ctiRec__false" v-bind:value="false" v-model="followingAblation.ctiRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation</legend>
                <label><input type="radio" name="content__ctiReablation" id="content__ctiReablation__true" v-bind:value="true" v-model="followingAblation.ctiReablation"><span>あり</span></label>
                <label><input type="radio" name="content__ctiReablation" id="content__ctiReablation__false" v-bind:value="false" v-model="followingAblation.ctiReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation 完成</legend>
                <label><input type="radio" name="content__completedCtiReablation" id="content__completedCtiReablation__true" v-bind:value="true" v-model="followingAblation.completedCtiReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedCtiReablation" id="content__completedCtiReablation__false" v-bind:value="false" v-model="followingAblation.completedCtiReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI</legend>
                <label><input type="radio" name="content__newCti" id="content__newCti__true" v-bind:value="true" v-model="followingAblation.newCti"><span>あり</span></label>
                <label><input type="radio" name="content__newCti" id="content__newCti__false" v-bind:value="false" v-model="followingAblation.newCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI 完成</legend>
                <label><input type="radio" name="content__completedNewCti" id="content__completedNewCti__true" v-bind:value="true" v-model="followingAblation.completedNewCti"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewCti" id="content__completedNewCti__false" v-bind:value="false" v-model="followingAblation.completedNewCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>AVN ablation</legend>
                <label><input type="radio" name="content__avnAblation" id="content__avnAblation__true" v-bind:value="true" v-model="followingAblation.avnAblation"><span>あり</span></label>
                <label><input type="radio" name="content__avnAblation" id="content__avnAblation__false" v-bind:value="false" v-model="followingAblation.avnAblation"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__otherThings">その他</label>
                <input type="text" name="content__otherThings" id="content__otherThings" v-model="followingAblation.otherThings">
            </p>
            <h3>手技開始時AF/ATの場合</h3>
            <fieldset>
                <legend>Conversion to S.R.</legend>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__true" v-bind:value="true" v-model="followingAblation.conversionToSr"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__false" v-bind:value="false" v-model="followingAblation.conversionToSr"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Conversion to AT</legend>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__true" v-bind:value="true" v-model="followingAblation.conversionToAt"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__false" v-bind:value="false" v-model="followingAblation.conversionToAt"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Conversion 施行</legend>
                <label><input type="radio" name="content__conversionExecution" id="content__conversionExecution__true" v-bind:value="true" v-model="followingAblation.conversionExecution"><span>あり</span></label>
                <label><input type="radio" name="content__conversionExecution" id="content__conversionExecution__false" v-bind:value="false" v-model="followingAblation.conversionExecution"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中に抗不整脈薬を使用</legend>
                <label><input type="radio" name="content__antiarrhythmicDuringOpe" id="content__antiarrhythmicDuringOpe__true" v-bind:value="true" v-model="followingAblation.antiarrhythmicDuringOpe"><span>あり</span></label>
                <label><input type="radio" name="content__antiarrhythmicDuringOpe" id="content__antiarrhythmicDuringOpe__false" v-bind:value="false" v-model="followingAblation.antiarrhythmicDuringOpe"><span>なし</span></label>
            </fieldset>
            <h3>Induction Test を施行</h3>
            <fieldset>
                <legend>Burst Pacing</legend>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__true" v-bind:value="true" v-model="followingAblation.burstPacing"><span>あり</span></label>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__false" v-bind:value="false" v-model="followingAblation.burstPacing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ISP</legend>
                <label><input type="radio" name="content__isp" id="content__isp__true" v-bind:value="true" v-model="followingAblation.isp"><span>あり</span></label>
                <label><input type="radio" name="content__isp" id="content__isp__false" v-bind:value="false" v-model="followingAblation.isp"><span>なし</span></label>
            </fieldset>
        </section>
        <section>
            <h2>合併症</h2>
            <fieldset>
                <legend>合併症</legend>
                <label><input type="radio" name="content__complications" id="content__complications__true" v-bind:value="true" v-model="followingAblation.complications"><span>あり</span></label>
                <label><input type="radio" name="content__complications" id="content__complications__false" v-bind:value="false" v-model="followingAblation.complications"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__complicationsDetail">合併症の詳細</label>
                <input type="text" name="content__complicationsDetail" id="content__complicationsDetail" v-model="followingAblation.complicationsDetail">
            </p>
        </section>
        <AblationMedication :parentGivenId="followingAblation.internalMedicineId"></AblationMedication>
        <p><button class="caution" v-on:click="openModal">このアブレーションを削除する</button></p>
        <Modal @close="closeModal" v-if="modal">
            <p>本当にこのアブレーションを削除しますか？</p>
            <template slot="footer">
                <button v-on:click="deleteFollowingAblation">削除</button><button v-on:click="closeModal">キャンセル</button>
            </template>
        </Modal>
    </section>
</template>
<script>
//import UCG from '@/components/ucg.vue'
import AblationMedication from '@/views/AblationMedication.vue'
import Modal from '@/components/Modal.vue'
export default {
    components: {
        //UCG,
        AblationMedication,
        Modal
    },
    data() {
        return {
            followingAblation: {
            },
            modal: false
        }
    },
    methods: {
        getFollowAblation() {
            const followAblationId = this.$route.params.followAblationId
            this.axios.get( this.$store.getters.apiRoot + '/following_ablation/' + followAblationId, {
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.followingAblation = response.data;
                this.$store.commit( 'UPDATE_PATIENT_ID', response.data.patientSerialNumber );
                this.$store.dispatch( 'updatePatientIdAction' );
            });
        },
        updateFollowAblation( data ) {
            const followAblationId = this.$route.params.followAblationId;
            this.axios.post(
                this.$store.getters.apiRoot + '/following_ablation/' + followAblationId,
                data, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }
            ).then(( response ) => {
                if( response.status == 200 ) {
                    console.log( 'FollowingAblation update: SUCCESS' )
                }
            });
        },
        openModal: function() {
            this.modal = true;
        },
        closeModal: function() {
            this.modal = false;
        },
        deleteFollowingAblation() {
            const followingAblationId = this.$route.params.followAblationId;
            this.axios.post(
                this.$store.getters.apiRoot + '/following_ablation/' + followingAblationId,
                { order: 'delete' }, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }
            ).then(( response ) => {
                if( response.status == 200 ) {
                    console.log( 'FollowingAblation delete: SUCCESS' )
                    this.$router.push({ name: 'Home' });        
                }
            })
        }
    },
    computed: {
        ablationCount() {
            const ablId = this.$route.params.followAblationId;
            const followAblationList = this.$store.getters.currentPatient.followingAblations;
            return followAblationList.indexOf( ablId ) + 2;
        }
    },
    created: function() {
        this.getFollowAblation();
    },
    mounted: function() {
        this.$emit('pushContents');
    },
    //beforeUpdate: function() {
    //    this.updateFollowAblation();
    //},
    watch: {
        $route() {
            this.getFollowAblation();
        },
        followingAblation: {
            handler: function( newData ) {
                this.updateFollowAblation( newData );
            },
            deep: true
        }   
    }
}
</script>
