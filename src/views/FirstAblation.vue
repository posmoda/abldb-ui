<template>
    <section class="firstAblation">
        <h1>初回アブレーション </h1>
        <section class="firstAblation__content">
            <h2>アブレーションの内容</h2>
            <fieldset>
                <legend>3D system</legend>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__carto" value="CARTO" v-model="firstAblation.threedSystem"><span>CARTO</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__ensite" value="EnSite" v-model="firstAblation.threedSystem"><span>EnSite</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__rhythmia" value="Rhythmia" v-model="firstAblation.threedSystem"><span>Rhythmia</span></label>
                <label><input type="radio" name="content__threedSystem" id="content__threedSystem__none" value="None" v-model="firstAblation.threedSystem"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio05v">左房 Low voltage area 割合 (&lt;0.5V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio05v" id="content__leftLowVoltageRatio05v" v-model.number="firstAblation.leftLowVoltageRatio05v">
            </p>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio08v">左房 Low voltage area 割合 (&lt;0.8V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio08v" id="content__leftLowVoltageRatio08v" v-model.number="firstAblation.leftLowVoltageRatio08v">
            </p>
            <p class="form__row">
                <label for="content__leftLowVoltageRatio05v">左房 Low voltage area 割合 (&lt;1.0V)</label>
                <input type="number" step="0.01" min="0.0" max="1.0" name="content__leftLowVoltageRatio10v" id="content__leftLowVoltageRatio10v" v-model.number="firstAblation.leftLowVoltageRatio10v">
            </p>
            <fieldset>
                <legend>術中左房造影</legend>
                <label><input type="radio" name="content__leftAngiography" id="content__leftAngiography__true" value="true" v-model="firstAblation.leftAngiography"><span>あり</span></label>
                <label><input type="radio" name="content__leftAngiography" id="content__leftAngiography__false" value="false" v-model="firstAblation.leftAngiography"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>EEPVI</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" value="true" v-model="firstAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" value="false" v-model="firstAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>EEPVI完成</legend>
                <label><input type="radio" name="content__completedEepvi" id="content__completedEepvi__true" value="true" v-model="firstAblation.completedEepvi"><span>はい</span></label>
                <label><input type="radio" name="content__completedEepvi" id="content__completedEepvi__false" value="false" v-model="firstAblation.completedEepvi"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>BOX (one ring)</legend>
                <label><input type="radio" name="content__boxOneRing" id="content__boxOneRing__true" value="true" v-model="firstAblation.boxOneRing"><span>あり</span></label>
                <label><input type="radio" name="content__boxOneRing" id="content__boxOneRing__false" value="false" v-model="firstAblation.boxOneRing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Posterior Center Line</legend>
                <label><input type="radio" name="content__posteriorCenterLine" id="content__posteriorCenterLine__true" value="true" v-model="firstAblation.posteriorCenterLine"><span>あり</span></label>
                <label><input type="radio" name="content__posteriorCenterLine" id="content__posteriorCenterLine__false" value="false" v-model="firstAblation.posteriorCenterLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>BOX完成</legend>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__true" value="true" v-model="firstAblation.completedBox"><span>はい</span></label>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__false" value="false" v-model="firstAblation.completedBox"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Dormant Conduction 確認</legend>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__true" value="true" v-model="firstAblation.dormantConduction"><span>あり</span></label>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__false" value="false" v-model="firstAblation.dormantConduction"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__true" value="true" v-model="firstAblation.afByAtp"><span>あり</span></label>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__false" value="false" v-model="firstAblation.afByAtp"><span>なし</span></label>
            </fieldset>
            <h3>PVI以外</h3>
            <fieldset>
                <legend>PVI以外施行していない</legend>
                <label><input type="radio" name="content__onlyPvi" id="content__onlyPvi__true" value="true" v-model="firstAblation.onlyPvi"><span>はい</span></label>
                <label><input type="radio" name="content__onlyPvi" id="content__onlyPvi__false" value="false" v-model="firstAblation.onlyPvi"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>SVCI</legend>
                <label><input type="radio" name="content__svci" id="content__svci__true" value="true" v-model="firstAblation.svci"><span>あり</span></label>
                <label><input type="radio" name="content__svci" id="content__svci__false" value="false" v-model="firstAblation.svci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVCI完成</legend>
                <label><input type="radio" name="content__completedSvci" id="content__completedSvci__true" value="true" v-model="firstAblation.completedSvci"><span>はい</span></label>
                <label><input type="radio" name="content__completedSvci" id="content__completedSvci__false" value="false" v-model="firstAblation.completedSvci"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Isolation</legend>
                <label><input type="radio" name="content__plsvc" id="content__plsvc__true" value="true" v-model="firstAblation.plsvc"><span>あり</span></label>
                <label><input type="radio" name="content__plsvc" id="content__plsvc__false" value="false" v-model="firstAblation.plsvc"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Isolation 完成</legend>
                <label><input type="radio" name="content__completedPlsvc" id="content__completedPlsvc__true" value="true" v-model="firstAblation.completedPlsvc"><span>はい</span></label>
                <label><input type="radio" name="content__completedPlsvc" id="content__completedPlsvc__false" value="false" v-model="firstAblation.completedPlsvc"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Non-PV Foci</legend>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__true" value="true" v-model="firstAblation.nonPvFoci"><span>あり</span></label>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__false" value="false" v-model="firstAblation.nonPvFoci"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__nonPvFociPlace">Non-PV Foci 場所</label>
                <input type="text" name="content__nonPvFociPlace" id="content__nonPvFociPlace" v-model="firstAblation.nonPvFocePlace">
            </p>
            <fieldset>
                <legend>Low voltage ablation</legend>
                <label><input type="radio" name="content__lowValtageAbl" id="content__lowValtageAbl__true" value="true" v-model="firstAblation.lowValtageAbl"><span>あり</span></label>
                <label><input type="radio" name="content__lowValtageAbl" id="content__lowValtageAbl__false" value="false" v-model="firstAblation.lowValtageAbl"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LA CFAE</legend>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__true" value="true" v-model="firstAblation.laCfae"><span>あり</span></label>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__false" value="false" v-model="firstAblation.laCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RA CFAE</legend>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__true" value="true" v-model="firstAblation.raCfae"><span>あり</span></label>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__false" value="false" v-model="firstAblation.raCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CS CFAE</legend>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__true" value="true" v-model="firstAblation.csCfae"><span>あり</span></label>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__false" value="false" v-model="firstAblation.csCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>GP</legend>
                <label><input type="radio" name="content__gp" id="content__gp__true" value="true" v-model="firstAblation.gp"><span>あり</span></label>
                <label><input type="radio" name="content__gp" id="content__gp__false" value="false" v-model="firstAblation.gp"><span>なし</span></label>
            </fieldset>
            <h3>その他の substrate ablation 詳細</h3>
            <fieldset>
                <legend>Chemical</legend>
                <label><input type="radio" name="content__chemical" id="content__chemical__true" value="true" v-model="firstAblation.chemical"><span>あり</span></label>
                <label><input type="radio" name="content__chemical" id="content__chemical__false" value="false" v-model="firstAblation.chemical"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line (非BOX例)</legend>
                <label><input type="radio" name="content__roofLine" id="content__roofLine__true" value="true" v-model="firstAblation.roofLine"><span>あり</span></label>
                <label><input type="radio" name="content__roofLine" id="content__roofLine__false" value="false" v-model="firstAblation.roofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line 完成</legend>
                <label><input type="radio" name="content__completedRoofLine" id="content__completedRoofLine__true" value="true" v-model="firstAblation.completedRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedRoofLine" id="content__completedRoofLine__false" value="false" v-model="firstAblation.completedRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line 完成</legend>
                <label><input type="radio" name="content__completedBottomLine" id="content__completedBottomLine__true" value="true" v-model="firstAblation.completedBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedBottomLine" id="content__completedBottomLine__false" value="false" v-model="firstAblation.completedBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Posterior Mitral Line</legend>
                <label><input type="radio" name="content__postMitralLine" id="content__postMitralLine__true" value="true" v-model="firstAblation.postMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__postMitralLine" id="content__postMitralLine__false" value="false" v-model="firstAblation.postMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Anterior Mitral Line</legend>
                <label><input type="radio" name="content__antMitralLine" id="content__antMitralLine__true" value="true" v-model="firstAblation.antMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__antMitralLine" id="content__antMitralLine__false" value="false" v-model="firstAblation.antMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line CS通電</legend>
                <label><input type="radio" name="content__mitralLineCs" id="content__mitralLineCs__true" value="true" v-model="firstAblation.mitralLineCs"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineCs" id="content__mitralLineCs__false" value="false" v-model="firstAblation.mitralLineCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedMitralLine" id="content__completedMitralLine__true" value="true" v-model="firstAblation.completedMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedMitralLine" id="content__completedMitralLine__false" value="false" v-model="firstAblation.completedMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI</legend>
                <label><input type="radio" name="content__cti" id="content__cti__true" value="true" v-model="firstAblation.cti"><span>あり</span></label>
                <label><input type="radio" name="content__cti" id="content__cti__false" value="false" v-model="firstAblation.cti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI 完成</legend>
                <label><input type="radio" name="content__completedCti" id="content__completedCti__true" value="true" v-model="firstAblation.completedCti"><span>あり</span></label>
                <label><input type="radio" name="content__completedCti" id="content__completedCti__false" value="false" v-model="firstAblation.completedCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI 施行済</legend>
                <label><input type="radio" name="content__pastPvi" id="content__pastPvi__true" value="true" v-model="firstAblation.pastPvi"><span>あり</span></label>
                <label><input type="radio" name="content__pastPvi" id="content__pastPvi__false" value="false" v-model="firstAblation.pastPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB-PVI</legend>
                <label><input type="radio" name="content__cbPvi" id="content__cbPvi__true" value="true" v-model="firstAblation.cbPvi"><span>あり</span></label>
                <label><input type="radio" name="content__cbPvi" id="content__cbPvi__false" value="false" v-model="firstAblation.cbPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB で Roof Line</legend>
                <label><input type="radio" name="content__roofLineByCb" id="content__roofLineByCb__true" value="true" v-model="firstAblation.roofLineByCb"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineByCb" id="content__roofLineByCb__false" value="false" v-model="firstAblation.roofLineByCb"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB で Bottom Line</legend>
                <label><input type="radio" name="content__bottomLineByCb" id="content__bottomLineByCb__true" value="true" v-model="firstAblation.bottomLineByCb"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineByCb" id="content__bottomLineByCb__false" value="false" v-model="firstAblation.bottomLineByCb"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Laser-PVI</legend>
                <label><input type="radio" name="content__laserPvi" id="content__laserPvi__true" value="true" v-model="firstAblation.laserPvi"><span>あり</span></label>
                <label><input type="radio" name="content__laserPvi" id="content__laserPvi__false" value="false" v-model="firstAblation.laserPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>HOT-PVI</legend>
                <label><input type="radio" name="content__hotPvi" id="content__hotPvi__true" value="true" v-model="firstAblation.hotPvi"><span>あり</span></label>
                <label><input type="radio" name="content__hotPvi" id="content__hotPvi__false" value="false" v-model="firstAblation.hotPvi"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__other">その他</label>
                <input type="text" name="content__other" id="content__other" v-model="firstAblation.other">
            </p>
            <h3>手技開始時AF/ATの場合</h3>
            <fieldset>
                <legend>Conversion to S.R.</legend>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__true" value="true" v-model="firstAblation.conversionToSr"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__false" value="false" v-model="firstAblation.conversionToSr"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Conversion to AT</legend>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__true" value="true" v-model="firstAblation.conversionToAt"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__false" value="false" v-model="firstAblation.conversionToAt"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Cardioversion施行</legend>
                <label><input type="radio" name="content__cardioversion" id="content__cardioversion__true" value="true" v-model="firstAblation.cardioversion"><span>あり</span></label>
                <label><input type="radio" name="content__cardioversion" id="content__cardioversion__false" value="false" v-model="firstAblation.cardioversion"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中に抗不整脈薬を使用</legend>
                <label><input type="radio" name="content__antiarthythmia" id="content__antiarthythmia__true" value="true" v-model="firstAblation.antiarthythmia"><span>あり</span></label>
                <label><input type="radio" name="content__antiarthythmia" id="content__antiarthythmia__false" value="false" v-model="firstAblation.antiarthythmia"><span>なし</span></label>
            </fieldset>
            <h3>Induction test を施行</h3>
            <fieldset>
                <legend>Burst Pacing</legend>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__true" value="true" v-model="firstAblation.burstPacing"><span>あり</span></label>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__false" value="false" v-model="firstAblation.burstPacing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ISP</legend>
                <label><input type="radio" name="content__isp" id="content__isp__true" value="true" v-model="firstAblation.isp"><span>あり</span></label>
                <label><input type="radio" name="content__isp" id="content__isp__false" value="false" v-model="firstAblation.isp"><span>なし</span></label>
            </fieldset>
        </section>
        <section>
        <h2>合併症</h2>
            <fieldset>
                <legend>合併症あり</legend>
                <label><input type="radio" name="complex__complications" id="complex__complications__true" value="true" v-model="firstAblation.complications"><span>あり</span></label>
                <label><input type="radio" name="complex__complications" id="complex__complications__false" value="false" v-model="firstAblation.complications"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>手技関連死亡</legend>
                <label><input type="radio" name="complex__deathByOpe" id="complex__deathByOpe__true" value="true" v-model="firstAblation.deathByOpe"><span>あり</span></label>
                <label><input type="radio" name="complex__deathByOpe" id="complex__deathByOpe__false" value="false" v-model="firstAblation.deathByOpe"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="complex__other">死亡年月日</label>
                <input type="date" name="complex__other" id="complex__other" v-model="firstAblation.other">
            </p>
            <p class="form__row">
                <label for="complex__other">死亡原因</label>
                <input type="text" name="complex__other" id="complex__other" v-model="firstAblation.other">
            </p>
            <fieldset>
                <legend>穿刺を要した心嚢水貯留</legend>
                <label><input type="radio" name="complex__heartSwellNeedsPuncture" id="complex__heartSwellNeedsPuncture__true" value="true" v-model="firstAblation.heartSwellNeedsPuncture"><span>あり</span></label>
                <label><input type="radio" name="complex__heartSwellNeedsPuncture" id="complex__heartSwellNeedsPuncture__false" value="false" v-model="firstAblation.heartSwellNeedsPuncture"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>開胸を要した心嚢水貯留</legend>
                <label><input type="radio" name="complex__heartSwellNeedsOpenChest" id="complex__heartSwellNeedsOpenChest__true" value="true" v-model="firstAblation.heartSwellNeedsOpenChest"><span>あり</span></label>
                <label><input type="radio" name="complex__heartSwellNeedsOpenChest" id="complex__heartSwellNeedsOpenChest__false" value="false" v-model="firstAblation.heartSwellNeedsOpenChest"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>侵襲的治療を要さない心嚢水貯留</legend>
                <label><input type="radio" name="complex__heartSwellNeedsNoOpe" id="complex__heartSwellNeedsNoOpe__true" value="true" v-model="firstAblation.heartSwellNeedsNoOpe"><span>あり</span></label>
                <label><input type="radio" name="complex__heartSwellNeedsNoOpe" id="complex__heartSwellNeedsNoOpe__false" value="false" v-model="firstAblation.heartSwellNeedsNoOpe"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>左房食道痩</legend>
                <label><input type="radio" name="complex__leftFistula" id="complex__leftFistula__true" value="true" v-model="firstAblation.leftFistula"><span>あり</span></label>
                <label><input type="radio" name="complex__leftFistula" id="complex__leftFistula__false" value="false" v-model="firstAblation.leftFistula"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>食道神経叢障害／急性胃拡張</legend>
                <label><input type="radio" name="complex__esophagealDisorder" id="complex__esophagealDisorder__true" value="true" v-model="firstAblation.esophagealDisorder"><span>あり</span></label>
                <label><input type="radio" name="complex__esophagealDisorder" id="complex__esophagealDisorder__false" value="false" v-model="firstAblation.esophagealDisorder"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>横隔神経障害</legend>
                <label><input type="radio" name="complex__phrenicDisorder" id="complex__phrenicDisorder__true" value="true" v-model="firstAblation.phrenicDisorder"><span>あり</span></label>
                <label><input type="radio" name="complex__phrenicDisorder" id="complex__phrenicDisorder__false" value="false" v-model="firstAblation.phrenicDisorder"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>症候性脳梗塞／TIA</legend>
                <label><input type="radio" name="complex__tia" id="complex__tia__true" value="true" v-model="firstAblation.tia"><span>あり</span></label>
                <label><input type="radio" name="complex__tia" id="complex__tia__false" value="false" v-model="firstAblation.tia"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>そのほかの血栓塞栓症</legend>
                <label><input type="radio" name="complex__otherEmbolism" id="complex__otherEmbolism__true" value="true" v-model="firstAblation.otherEmbolism"><span>あり</span></label>
                <label><input type="radio" name="complex__otherEmbolism" id="complex__otherEmbolism__false" value="false" v-model="firstAblation.otherEmbolism"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="complex__other">その他の血栓塞栓症部位</label>
                <input type="text" name="complex__other" id="complex__other" v-model="firstAblation.other">
            </p>
            <fieldset>
                <legend>空気塞栓症</legend>
                <label><input type="radio" name="complex__airEmbolism" id="complex__airEmbolism__true" value="true" v-model="firstAblation.airEmbolism"><span>あり</span></label>
                <label><input type="radio" name="complex__airEmbolism" id="complex__airEmbolism__false" value="false" v-model="firstAblation.airEmbolism"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>遷延性低血圧(BP&lt;90mmHg or 昇圧剤使用)</legend>
                <label><input type="radio" name="complex__delayedHypotension" id="complex__delayedHypotension__true" value="true" v-model="firstAblation.delayedHypotension"><span>あり</span></label>
                <label><input type="radio" name="complex__delayedHypotension" id="complex__delayedHypotension__false" value="false" v-model="firstAblation.delayedHypotension"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中・術後の心筋梗塞</legend>
                <label><input type="radio" name="complex__infarctionAroundOpe" id="complex__infarctionAroundOpe__true" value="true" v-model="firstAblation.infarctionAroundOpe"><span>あり</span></label>
                <label><input type="radio" name="complex__infarctionAroundOpe" id="complex__infarctionAroundOpe__false" value="false" v-model="firstAblation.infarctionAroundOpe"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中・術後の手技関連冠動脈狭窄</legend>
                <label><input type="radio" name="complex__stenosisAroundOpe" id="complex__stenosisAroundOpe__true" value="true" v-model="firstAblation.stenosisAroundOpe"><span>あり</span></label>
                <label><input type="radio" name="complex__stenosisAroundOpe" id="complex__stenosisAroundOpe__false" value="false" v-model="firstAblation.stenosisAroundOpe"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>感染性心内膜炎</legend>
                <label><input type="radio" name="complex__endocarditis" id="complex__endocarditis__true" value="true" v-model="firstAblation.endocarditis"><span>あり</span></label>
                <label><input type="radio" name="complex__endocarditis" id="complex__endocarditis__false" value="false" v-model="firstAblation.endocarditis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>敗血症</legend>
                <label><input type="radio" name="complex__sepsis" id="complex__sepsis__true" value="true" v-model="firstAblation.sepsis"><span>あり</span></label>
                <label><input type="radio" name="complex__sepsis" id="complex__sepsis__false" value="false" v-model="firstAblation.sepsis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>処置を要した心不全</legend>
                <label><input type="radio" name="complex__heartFailure" id="complex__heartFailure__true" value="true" v-model="firstAblation.heartFailure"><span>あり</span></label>
                <label><input type="radio" name="complex__heartFailure" id="complex__heartFailure__false" value="false" v-model="firstAblation.heartFailure"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>処置を要した呼吸不全</legend>
                <label><input type="radio" name="complex__respiratorFailure" id="complex__respiratorFailure__true" value="true" v-model="firstAblation.respiratorFailure"><span>あり</span></label>
                <label><input type="radio" name="complex__respiratorFailure" id="complex__respiratorFailure__false" value="false" v-model="firstAblation.respiratorFailure"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>仮性動脈瘤</legend>
                <label><input type="radio" name="complex__pseudoaneurysm" id="complex__pseudoaneurysm__true" value="true" v-model="firstAblation.pseudoaneurysm"><span>あり</span></label>
                <label><input type="radio" name="complex__pseudoaneurysm" id="complex__pseudoaneurysm__false" value="false" v-model="firstAblation.pseudoaneurysm"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>動静脈瘤</legend>
                <label><input type="radio" name="complex__arteriovenousFistula" id="complex__arteriovenousFistula__true" value="true" v-model="firstAblation.arteriovenousFistula"><span>あり</span></label>
                <label><input type="radio" name="complex__arteriovenousFistula" id="complex__arteriovenousFistula__false" value="false" v-model="firstAblation.arteriovenousFistula"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>穿刺部血腫</legend>
                <label><input type="radio" name="complex__punctureHematoma" id="complex__punctureHematoma__true" value="true" v-model="firstAblation.punctureHematoma"><span>あり</span></label>
                <label><input type="radio" name="complex__punctureHematoma" id="complex__punctureHematoma__false" value="false" v-model="firstAblation.punctureHematoma"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>後腹膜血腫</legend>
                <label><input type="radio" name="complex__retroperitonealHematoma" id="complex__retroperitonealHematoma__true" value="true" v-model="firstAblation.retroperitonealHematoma"><span>あり</span></label>
                <label><input type="radio" name="complex__retroperitonealHematoma" id="complex__retroperitonealHematoma__false" value="false" v-model="firstAblation.retroperitonealHematoma"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>輸血</legend>
                <label><input type="radio" name="complex__transfusion" id="complex__transfusion__true" value="true" v-model="firstAblation.transfusion"><span>あり</span></label>
                <label><input type="radio" name="complex__transfusion" id="complex__transfusion__false" value="false" v-model="firstAblation.transfusion"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="complex__transfusionReason">輸血の原因</label>
                <input type="text" name="complex__transfusionReason" id="complex__transfusionReason" v-model="firstAblation.transfusionReason">
            </p>
            <fieldset>
                <legend>急性肺静脈狭窄・閉塞</legend>
                <label><input type="radio" name="complex__pulmonaryVeinStenosis" id="complex__pulmonaryVeinStenosis__true" value="true" v-model="firstAblation.pulmonaryVeinStenosis"><span>あり</span></label>
                <label><input type="radio" name="complex__pulmonaryVeinStenosis" id="complex__pulmonaryVeinStenosis__false" value="false" v-model="firstAblation.pulmonaryVeinStenosis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>肺塞栓症</legend>
                <label><input type="radio" name="complex__pulmonaryEmbolism" id="complex__pulmonaryEmbolism__true" value="true" v-model="firstAblation.pulmonaryEmbolism"><span>あり</span></label>
                <label><input type="radio" name="complex__pulmonaryEmbolism" id="complex__pulmonaryEmbolism__false" value="false" v-model="firstAblation.pulmonaryEmbolism"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>temporary PM使用 due to SSS</legend>
                <label><input type="radio" name="complex__temporaryPmBySss" id="complex__temporaryPmBySss__true" value="true" v-model="firstAblation.temporaryPmBySss"><span>あり</span></label>
                <label><input type="radio" name="complex__temporaryPmBySss" id="complex__temporaryPmBySss__false" value="false" v-model="firstAblation.temporaryPmBySss"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>予定しない恒久型ペースメーカーを要した洞不全</legend>
                <label><input type="radio" name="complex__unexpectedSinusFailure" id="complex__unexpectedSinusFailure__true" value="true" v-model="firstAblation.unexpectedSinusFailure"><span>あり</span></label>
                <label><input type="radio" name="complex__unexpectedSinusFailure" id="complex__unexpectedSinusFailure__false" value="false" v-model="firstAblation.unexpectedSinusFailure"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>temporary PM使用 due to AVB</legend>
                <label><input type="radio" name="complex__temporaryPmByAvb" id="complex__temporaryPmByAvb__true" value="true" v-model="firstAblation.temporaryPmByAvb"><span>あり</span></label>
                <label><input type="radio" name="complex__temporaryPmByAvb" id="complex__temporaryPmByAvb__false" value="false" v-model="firstAblation.temporaryPmByAvb"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>予定しない恒久型ペースメーカーを要した房室ブロック</legend>
                <label><input type="radio" name="complex__unexpectedAtrioventricularBlock" id="complex__unexpectedAtrioventricularBlock__true" value="true" v-model="firstAblation.unexpectedAtrioventricularBlock"><span>あり</span></label>
                <label><input type="radio" name="complex__unexpectedAtrioventricularBlock" id="complex__unexpectedAtrioventricularBlock__false" value="false" v-model="firstAblation.unexpectedAtrioventricularBlock"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>気胸</legend>
                <label><input type="radio" name="complex__pneumothorax" id="complex__pneumothorax__true" value="true" v-model="firstAblation.pneumothorax"><span>あり</span></label>
                <label><input type="radio" name="complex__pneumothorax" id="complex__pneumothorax__false" value="false" v-model="firstAblation.pneumothorax"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>血胸</legend>
                <label><input type="radio" name="complex__hemothorax" id="complex__hemothorax__true" value="true" v-model="firstAblation.hemothorax"><span>あり</span></label>
                <label><input type="radio" name="complex__hemothorax" id="complex__hemothorax__false" value="false" v-model="firstAblation.hemothorax"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>冠静脈洞解離</legend>
                <label><input type="radio" name="complex__sinusDissection" id="complex__sinusDissection__true" value="true" v-model="firstAblation.sinusDissection"><span>あり</span></label>
                <label><input type="radio" name="complex__sinusDissection" id="complex__sinusDissection__false" value="false" v-model="firstAblation.sinusDissection"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>冠静脈洞狭窄</legend>
                <label><input type="radio" name="complex__sinusStenosis" id="complex__sinusStenosis__true" value="true" v-model="firstAblation.sinusStenosis"><span>あり</span></label>
                <label><input type="radio" name="complex__sinusStenosis" id="complex__sinusStenosis__false" value="false" v-model="firstAblation.sinusStenosis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>処置を行わなかった弁損傷</legend>
                <label><input type="radio" name="complex__holdDamagedValve" id="complex__holdDamagedValve__true" value="true" v-model="firstAblation.holdDamagedValve"><span>あり</span></label>
                <label><input type="radio" name="complex__holdDamagedValve" id="complex__holdDamagedValve__false" value="false" v-model="firstAblation.holdDamagedValve"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>外科治療を要した弁損傷</legend>
                <label><input type="radio" name="complex__curedDamagedValve" id="complex__curedDamagedValve__true" value="true" v-model="firstAblation.curedDamagedValve"><span>あり</span></label>
                <label><input type="radio" name="complex__curedDamagedValve" id="complex__curedDamagedValve__false" value="false" v-model="firstAblation.curedDamagedValve"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>大動脈解離</legend>
                <label><input type="radio" name="complex__aorticDissection" id="complex__aorticDissection__true" value="true" v-model="firstAblation.aorticDissection"><span>あり</span></label>
                <label><input type="radio" name="complex__aorticDissection" id="complex__aorticDissection__false" value="false" v-model="firstAblation.aorticDissection"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>造影剤アレルギー</legend>
                <label><input type="radio" name="complex__contrastAgentAllergy" id="complex__contrastAgentAllergy__true" value="true" v-model="firstAblation.contrastAgentAllergy"><span>あり</span></label>
                <label><input type="radio" name="complex__contrastAgentAllergy" id="complex__contrastAgentAllergy__false" value="false" v-model="firstAblation.contrastAgentAllergy"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="complex__agentAllergyDetail">造影剤アレルギーの症状</label>
                <input type="text" name="complex__agentAllergyDetail" id="complex__agentAllergyDetail" v-model="firstAblation.agentAllergyDetail">
            </p>
            <fieldset>
                <legend>造影剤以外の薬剤によるアレルギー</legend>
                <label><input type="radio" name="complex__otherMedicineAllergy" id="complex__otherMedicineAllergy__true" value="true" v-model="firstAblation.otherMedicineAllergy"><span>あり</span></label>
                <label><input type="radio" name="complex__otherMedicineAllergy" id="complex__otherMedicineAllergy__false" value="false" v-model="firstAblation.otherMedicineAllergy"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="complex__otherMedicineNameCausesAllergy">造影剤以外の薬剤によるアレルギーの被疑薬</label>
                <input type="text" name="complex__otherMedicineNameCausesAllergy" id="complex__otherMedicineNameCausesAllergy" v-model="firstAblation.otherMedicineNameCausesAllergy">
            </p>
            <fieldset>
                <legend>その他の合併症</legend>
                <label><input type="radio" name="complex__otherComplications" id="complex__otherComplications__true" value="true" v-model="firstAblation.otherComplications"><span>あり</span></label>
                <label><input type="radio" name="complex__otherComplications" id="complex__otherComplications__false" value="false" v-model="firstAblation.otherComplications"><span>なし</span></label>
            </fieldset>
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            firstAblation: {
            }
        }
    }
}
</script>
