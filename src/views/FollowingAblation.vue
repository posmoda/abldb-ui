<template>
    <section class="followingAblation__date">
        <h1>2回目以降のアブレーション</h1>
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
                <label><input type="radio" name="content__lpvReisolation" id="content__lpvReisolation__true" value="true" v-model="followingAblation.lpvReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__lpvReisolation" id="content__lpvReisolation__false" value="false" v-model="followingAblation.lpvReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LSPVのみ</legend>
                <label><input type="radio" name="content__onlyLspv" id="content__onlyLspv__true" value="true" v-model="followingAblation.onlyLspv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyLspv" id="content__onlyLspv__false" value="false" v-model="followingAblation.onlyLspv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LIPVのみ</legend>
                <label><input type="radio" name="content__onlyLipv" id="content__onlyLipv__true" value="true" v-model="followingAblation.onlyLipv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyLipv" id="content__onlyLipv__false" value="false" v-model="followingAblation.onlyLipv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PRV Re-Isolation</legend>
                <label><input type="radio" name="content__rpvReisolation" id="content__rpvReisolation__true" value="true" v-model="followingAblation.rpvReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__rpvReisolation" id="content__rpvReisolation__false" value="false" v-model="followingAblation.rpvReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RSPVのみ</legend>
                <label><input type="radio" name="content__onlyRspv" id="content__onlyRspv__true" value="true" v-model="followingAblation.onlyRspv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyRspv" id="content__onlyRspv__false" value="false" v-model="followingAblation.onlyRspv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RIPVのみ</legend>
                <label><input type="radio" name="content__onlyRipv" id="content__onlyRipv__true" value="true" v-model="followingAblation.onlyRipv"><span>あり</span></label>
                <label><input type="radio" name="content__onlyRipv" id="content__onlyRipv__false" value="false" v-model="followingAblation.onlyRipv"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Re-BOX</legend>
                <label><input type="radio" name="content__reBox" id="content__reBox__true" value="true" v-model="followingAblation.reBox"><span>あり</span></label>
                <label><input type="radio" name="content__reBox" id="content__reBox__false" value="false" v-model="followingAblation.reBox"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Roof Line)</legend>
                <label><input type="radio" name="content__pwReisolationRoof" id="content__pwReisolationRoof__true" value="true" v-model="followingAblation.pwReisolationRoof"><span>あり</span></label>
                <label><input type="radio" name="content__pwReisolationRoof" id="content__pwReisolationRoof__false" value="false" v-model="followingAblation.pwReisolationRoof"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PW Re-Isolation (Bottom Line)</legend>
                <label><input type="radio" name="content__pwReisolationBottom" id="content__pwReisolationBottom__true" value="true" v-model="followingAblation.pwReisolationBottom"><span>あり</span></label>
                <label><input type="radio" name="content__pwReisolationBottom" id="content__pwReisolationBottom__false" value="false" v-model="followingAblation.pwReisolationBottom"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Dormant Conduction 確認</legend>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__true" value="true" v-model="followingAblation.dormantConduction"><span>あり</span></label>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__false" value="false" v-model="followingAblation.dormantConduction"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__true" value="true" v-model="followingAblation.afByAtp"><span>あり</span></label>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__false" value="false" v-model="followingAblation.afByAtp"><span>なし</span></label>
            </fieldset>
            <h3>PVI以外</h3>
            <fieldset>
                <legend>SVC Rec</legend>
                <label><input type="radio" name="content__svcRec" id="content__svcRec__true" value="true" v-model="followingAblation.svcRec"><span>あり</span></label>
                <label><input type="radio" name="content__svcRec" id="content__svcRec__false" value="false" v-model="followingAblation.svcRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation</legend>
                <label><input type="radio" name="content__svcReisolation" id="content__svcReisolation__true" value="true" v-model="followingAblation.svcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__svcReisolation" id="content__svcReisolation__false" value="false" v-model="followingAblation.svcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__completedSvcReisolation" id="content__completedSvcReisolation__true" value="true" v-model="followingAblation.completedSvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__completedSvcReisolation" id="content__completedSvcReisolation__false" value="false" v-model="followingAblation.completedSvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCI</legend>
                <label><input type="radio" name="content__newSvci" id="content__newSvci__true" value="true" v-model="followingAblation.newSvci"><span>あり</span></label>
                <label><input type="radio" name="content__newSvci" id="content__newSvci__false" value="false" v-model="followingAblation.newSvci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規SVCIの完成</legend>
                <label><input type="radio" name="content__completedNewSvci" id="content__completedNewSvci__true" value="true" v-model="followingAblation.completedNewSvci"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewSvci" id="content__completedNewSvci__false" value="false" v-model="followingAblation.completedNewSvci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation</legend>
                <label><input type="radio" name="content__plsvcReisolation" id="content__plsvcReisolation__true" value="true" v-model="followingAblation.plsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__plsvcReisolation" id="content__plsvcReisolation__false" value="false" v-model="followingAblation.plsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Re-Isolation完成</legend>
                <label><input type="radio" name="content__completedPlsvcReisolation" id="content__completedPlsvcReisolation__true" value="true" v-model="followingAblation.completedPlsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__completedPlsvcReisolation" id="content__completedPlsvcReisolation__false" value="false" v-model="followingAblation.completedPlsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規PLSVC Isolation</legend>
                <label><input type="radio" name="content__newPlsvcReisolation" id="content__newPlsvcReisolation__true" value="true" v-model="followingAblation.newPlsvcReisolation"><span>あり</span></label>
                <label><input type="radio" name="content__newPlsvcReisolation" id="content__newPlsvcReisolation__false" value="false" v-model="followingAblation.newPlsvcReisolation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Non-PV Foci</legend>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__true" value="true" v-model="followingAblation.nonPvFoci"><span>あり</span></label>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__false" value="false" v-model="followingAblation.nonPvFoci"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__nonPvFociPlace">Non-PV Foci 場所</label>
                <input type="text" name="content__nonPvFociPlace" id="content__nonPvFociPlace" v-model="followingAblation.nonPvFociPlace">
            </p>
            <fieldset>
                <legend>Low voltage ablation</legend>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__true" value="true" v-model="followingAblation.lowVoltageAbl"><span>あり</span></label>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__false" value="false" v-model="followingAblation.lowVoltageAbl"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LA CFAE</legend>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__true" value="true" v-model="followingAblation.laCfae"><span>あり</span></label>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__false" value="false" v-model="followingAblation.laCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RA CFAE</legend>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__true" value="true" v-model="followingAblation.raCfae"><span>あり</span></label>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__false" value="false" v-model="followingAblation.raCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CS CFAE</legend>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__true" value="true" v-model="followingAblation.csCfae"><span>あり</span></label>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__false" value="false" v-model="followingAblation.csCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>GP</legend>
                <label><input type="radio" name="content__gp" id="content__gp__true" value="true" v-model="followingAblation.gp"><span>あり</span></label>
                <label><input type="radio" name="content__gp" id="content__gp__false" value="false" v-model="followingAblation.gp"><span>なし</span></label>
            </fieldset>
            <h3>その他の substrate ablation 詳細</h3>
            <fieldset>
                <legend>Chemical</legend>
                <label><input type="radio" name="content__chemical" id="content__chemical__true" value="true" v-model="followingAblation.chemical"><span>あり</span></label>
                <label><input type="radio" name="content__chemical" id="content__chemical__false" value="false" v-model="followingAblation.chemical"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Rec</legend>
                <label><input type="radio" name="content__roofLineRec" id="content__roofLineRec__true" value="true" v-model="followingAblation.roofLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineRec" id="content__roofLineRec__false" value="false" v-model="followingAblation.roofLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation</legend>
                <label><input type="radio" name="content__roofLineReablation" id="content__roofLineReablation__true" value="true" v-model="followingAblation.roofLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineReablation" id="content__roofLineReablation__false" value="false" v-model="followingAblation.roofLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__completedRoofLineReablation" id="content__completedRoofLineReablation__true" value="true" v-model="followingAblation.completedRoofLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedRoofLineReablation" id="content__completedRoofLineReablation__false" value="false" v-model="followingAblation.completedRoofLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line</legend>
                <label><input type="radio" name="content__newRoofLine" id="content__newRoofLine__true" value="true" v-model="followingAblation.newRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__newRoofLine" id="content__newRoofLine__false" value="false" v-model="followingAblation.newRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Roof Line完成</legend>
                <label><input type="radio" name="content__completedNewRoofLine" id="content__completedNewRoofLine__true" value="true" v-model="followingAblation.completedNewRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewRoofLine" id="content__completedNewRoofLine__false" value="false" v-model="followingAblation.completedNewRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Rec</legend>
                <label><input type="radio" name="content__bottomLineRec" id="content__bottomLineRec__true" value="true" v-model="followingAblation.bottomLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineRec" id="content__bottomLineRec__false" value="false" v-model="followingAblation.bottomLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation</legend>
                <label><input type="radio" name="content__bottomLineReablation" id="content__bottomLineReablation__true" value="true" v-model="followingAblation.bottomLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineReablation" id="content__bottomLineReablation__false" value="false" v-model="followingAblation.bottomLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line Re-Ablation完成</legend>
                <label><input type="radio" name="content__completedBottomLineReablation" id="content__completedBottomLineReablation__true" value="true" v-model="followingAblation.completedBottomLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedBottomLineReablation" id="content__completedBottomLineReablation__false" value="false" v-model="followingAblation.completedBottomLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line</legend>
                <label><input type="radio" name="content__newBottomLine" id="content__newBottomLine__true" value="true" v-model="followingAblation.newBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__newBottomLine" id="content__newBottomLine__false" value="false" v-model="followingAblation.newBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規Bottom Line完成</legend>
                <label><input type="radio" name="content__completedNewBottomLine" id="content__completedNewBottomLine__true" value="true" v-model="followingAblation.completedNewBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewBottomLine" id="content__completedNewBottomLine__false" value="false" v-model="followingAblation.completedNewBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Rec</legend>
                <label><input type="radio" name="content__mitralLineRec" id="content__mitralLineRec__true" value="true" v-model="followingAblation.mitralLineRec"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineRec" id="content__mitralLineRec__false" value="false" v-model="followingAblation.mitralLineRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation</legend>
                <label><input type="radio" name="content__mitralLineReablation" id="content__mitralLineReablation__true" value="true" v-model="followingAblation.mitralLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineReablation" id="content__mitralLineReablation__false" value="false" v-model="followingAblation.mitralLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation CS通電</legend>
                <label><input type="radio" name="content__mitralLineReablationCs" id="content__mitralLineReablationCs__true" value="true" v-model="followingAblation.mitralLineReablationCs"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineReablationCs" id="content__mitralLineReablationCs__false" value="false" v-model="followingAblation.mitralLineReablationCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line Re-Ablation 完成</legend>
                <label><input type="radio" name="content__completedMitralLineReablation" id="content__completedMitralLineReablation__true" value="true" v-model="followingAblation.completedMitralLineReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedMitralLineReablation" id="content__completedMitralLineReablation__false" value="false" v-model="followingAblation.completedMitralLineReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line</legend>
                <label><input type="radio" name="content__newPostMitralLine" id="content__newPostMitralLine__true" value="true" v-model="followingAblation.newPostMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__newPostMitralLine" id="content__newPostMitralLine__false" value="false" v-model="followingAblation.newPostMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Posterior Mitral Line CS通電</legend>
                <label><input type="radio" name="content__newPostMitralLineCs" id="content__newPostMitralLineCs__true" value="true" v-model="followingAblation.newPostMitralLineCs"><span>あり</span></label>
                <label><input type="radio" name="content__newPostMitralLineCs" id="content__newPostMitralLineCs__false" value="false" v-model="followingAblation.newPostMitralLineCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line</legend>
                <label><input type="radio" name="content__newAnteriorMitralLine" id="content__newAnteriorMitralLine__true" value="true" v-model="followingAblation.newAnteriorMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__newAnteriorMitralLine" id="content__newAnteriorMitralLine__false" value="false" v-model="followingAblation.newAnteriorMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Anterior Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedNewAnteriorMitralLine" id="content__completedNewAnteriorMitralLine__true" value="true" v-model="followingAblation.completedNewAnteriorMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewAnteriorMitralLine" id="content__completedNewAnteriorMitralLine__false" value="false" v-model="followingAblation.completedNewAnteriorMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規 Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedNewMitralLine" id="content__completedNewMitralLine__true" value="true" v-model="followingAblation.completedNewMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewMitralLine" id="content__completedNewMitralLine__false" value="false" v-model="followingAblation.completedNewMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Rec</legend>
                <label><input type="radio" name="content__ctiRec" id="content__ctiRec__true" value="true" v-model="followingAblation.ctiRec"><span>あり</span></label>
                <label><input type="radio" name="content__ctiRec" id="content__ctiRec__false" value="false" v-model="followingAblation.ctiRec"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation</legend>
                <label><input type="radio" name="content__ctiReablation" id="content__ctiReablation__true" value="true" v-model="followingAblation.ctiReablation"><span>あり</span></label>
                <label><input type="radio" name="content__ctiReablation" id="content__ctiReablation__false" value="false" v-model="followingAblation.ctiReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI Re-Ablation 完成</legend>
                <label><input type="radio" name="content__completedCtiReablation" id="content__completedCtiReablation__true" value="true" v-model="followingAblation.completedCtiReablation"><span>あり</span></label>
                <label><input type="radio" name="content__completedCtiReablation" id="content__completedCtiReablation__false" value="false" v-model="followingAblation.completedCtiReablation"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI</legend>
                <label><input type="radio" name="content__newCti" id="content__newCti__true" value="true" v-model="followingAblation.newCti"><span>あり</span></label>
                <label><input type="radio" name="content__newCti" id="content__newCti__false" value="false" v-model="followingAblation.newCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>新規CTI 完成</legend>
                <label><input type="radio" name="content__completedNewCti" id="content__completedNewCti__true" value="true" v-model="followingAblation.completedNewCti"><span>あり</span></label>
                <label><input type="radio" name="content__completedNewCti" id="content__completedNewCti__false" value="false" v-model="followingAblation.completedNewCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>AVN ablation</legend>
                <label><input type="radio" name="content__avnAblation" id="content__avnAblation__true" value="true" v-model="followingAblation.avnAblation"><span>あり</span></label>
                <label><input type="radio" name="content__avnAblation" id="content__avnAblation__false" value="false" v-model="followingAblation.avnAblation"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__otherThings">その他</label>
                <input type="text" name="content__otherThings" id="content__otherThings" v-model="followingAblation.otherThings">
            </p>
            <h3>手技開始時AF/ATの場合</h3>
            <fieldset>
                <legend>Conversion to S.R.</legend>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__true" value="true" v-model="followingAblation.conversionToSr"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__false" value="false" v-model="followingAblation.conversionToSr"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Conversion to AT</legend>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__true" value="true" v-model="followingAblation.conversionToAt"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__false" value="false" v-model="followingAblation.conversionToAt"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Cardioversion 施行</legend>
                <label><input type="radio" name="content__conversionExecusion" id="content__conversionExecusion__true" value="true" v-model="followingAblation.conversionExecusion"><span>あり</span></label>
                <label><input type="radio" name="content__conversionExecusion" id="content__conversionExecusion__false" value="false" v-model="followingAblation.conversionExecusion"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中に抗不整脈薬を使用</legend>
                <label><input type="radio" name="content__antiarrhythmicDuringOpe" id="content__antiarrhythmicDuringOpe__true" value="true" v-model="followingAblation.antiarrhythmicDuringOpe"><span>あり</span></label>
                <label><input type="radio" name="content__antiarrhythmicDuringOpe" id="content__antiarrhythmicDuringOpe__false" value="false" v-model="followingAblation.antiarrhythmicDuringOpe"><span>なし</span></label>
            </fieldset>
            <h3>Induction Test を施行</h3>
            <fieldset>
                <legend>Burst Pacing</legend>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__true" value="true" v-model="followingAblation.burstPacing"><span>あり</span></label>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__false" value="false" v-model="followingAblation.burstPacing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ISP</legend>
                <label><input type="radio" name="content__isp" id="content__isp__true" value="true" v-model="followingAblation.isp"><span>あり</span></label>
                <label><input type="radio" name="content__isp" id="content__isp__false" value="false" v-model="followingAblation.isp"><span>なし</span></label>
            </fieldset>
        </section>
        <section>
            <h2>合併症</h2>
            <fieldset>
                <legend>合併症</legend>
                <label><input type="radio" name="content__complications" id="content__complications__true" value="true" v-model="followingAblation.complications"><span>あり</span></label>
                <label><input type="radio" name="content__complications" id="content__complications__false" value="false" v-model="followingAblation.complications"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <input type="text" name="content__complications_detail" id="content__complications_detail" v-model="followingAblation.complications_detail">
            </p>
        </section>
        <AblationMedication></AblationMedication>
    </section>
</template>
<script>
import UCG from '@/components/ucg.vue'
import AblationMedication from '@/views/AblationMedication.vue'
export default {
    components: {
        UCG,
        AblationMedication
    },
    data() {
        return {
            followingAblation: {
            }
        }
    },
    mounted: function() {
        this.$emit('pushContents');
    }
}
</script>
