<template>
    <section class="firstAblation">
        <h1>初回アブレーション </h1>
        <section class="firstAblation__content">
            <h2>アブレーションの内容</h2>
        <p class="form__row">
            <label for="content__date">施行日</label>
            <input type="date" name="content__date" id="content__date" v-model="firstAblation.date">
        </p>
            <fieldset>
                <legend>3D system</legend>
                <label><input type="checkbox" name="content__threedSystem" id="content__threedSystem__carto" value="CARTO" v-model="firstAblation.threedSystemCarto"><span>CARTO</span></label>
                <label><input type="checkbox" name="content__threedSystem" id="content__threedSystem__ensite" value="EnSite" v-model="firstAblation.threedSystemEnsite"><span>EnSite</span></label>
                <label><input type="checkbox" name="content__threedSystem" id="content__threedSystem__rhythmia" value="Rhythmia" v-model="firstAblation.threedSystemRhythmia"><span>Rhythmia</span></label>
            </fieldset>
            <fieldset :class="{ hidden: !firstAblation.threedSystemCarto }">
                <legend>CARTO</legend>
                <label><input type="radio" name="content__carto" id="content__carto__fourmm" value="4mm" v-model="firstAblation.carto"><span>4mm</span></label>
                <label><input type="radio" name="content__carto" id="content__carto__eightmm" value="8mm" v-model="firstAblation.carto"><span>8mm</span></label>
                <label><input type="radio" name="content__carto" id="content__carto__st" value="st" v-model="firstAblation.carto"><span>ST</span></label>
                <label><input type="radio" name="content__carto" id="content__carto__stsf" value="stsf" v-model="firstAblation.carto"><span>ST/SF</span></label>
                <label><input type="radio" name="content__carto" id="content__carto__irrigation" value="irrigation" v-model="firstAblation.carto"><span>irrigation</span></label>
            </fieldset>
            <fieldset :class="{ hidden: !firstAblation.threedSystemEnsite }">
                <legend>EnSite</legend>
                <label><input type="radio" name="content__ensite" id="content__ensite__fourmm" value="4mm" v-model="firstAblation.ensite"><span>4mm</span></label>
                <label><input type="radio" name="content__ensite" id="content__ensite__eightmm" value="8mm" v-model="firstAblation.ensite"><span>8mm</span></label>
                <label><input type="radio" name="content__ensite" id="content__ensite__tacticath" value="tacticath" v-model="firstAblation.ensite"><span>TactiCath</span></label>
                <label><input type="radio" name="content__ensite" id="content__ensite__flexability" value="flexability" v-model="firstAblation.ensite"><span>Flexability</span></label>
            </fieldset>
            <fieldset :class="{ hidden: !firstAblation.threedSystemRhythmia }">
                <legend>Rhythmia</legend>
                <label><input type="radio" name="content__rhythmia" id="content__rhythmia__fourmm" value="4mm" v-model="firstAblation.rhythmia"><span>4mm</span></label>
                <label><input type="radio" name="content__rhythmia" id="content__rhythmia__eightmm" value="8mm" v-model="firstAblation.rhythmia"><span>8mm</span></label>
                <label><input type="radio" name="content__rhythmia" id="content__rhythmia__mifi" value="mifi" v-model="firstAblation.rhythmia"><span>MiFi</span></label>
                <label><input type="radio" name="content__rhythmia" id="content__rhythmia__stablepoint" value="stablepoint" v-model="firstAblation.rhythmia"><span>StablePoint</span></label>
            </fieldset>
            <!--<fieldset>
                <legend>アブカテ種別</legend>
                <label><input type="radio" name="content__ablKind" id="content__ablKind__st" value="st" v-model="firstAblation.ablKind"><span>ST</span></label>
                <label><input type="radio" name="content__ablKind" id="content__ablKind__cryoCf" value="cryo_cf" v-model="firstAblation.ablKind"><span>Cryo + CF illig</span></label>
                <label><input type="radio" name="content__ablKind" id="content__ablKind__stsf" value="stsf" v-model="firstAblation.ablKind"><span>STSF</span></label>
            </fieldset>-->
            <fieldset>
                <legend>造影剤使用</legend>
                <label><input type="radio" name="content__contrast" id="content__contrast__true" v-bind:value="true" v-model="firstAblation.contrast"><span>あり</span></label>
                <label><input type="radio" name="content__contrast" id="content__contrast__false" v-bind:value="false" v-model="firstAblation.contrast"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__operationDuration">手技時間(min)</label>
                <input type="number" step="1" min="0" name="content__operationDuration" id="content__operationDuration" v-model.number="firstAblation.operationDuration">
            </p>
            <p class="form__row">
                <label for="content__perspectiveDuration">透視時間(min)</label>
                <input type="number" step="1" min="0" name="content__perspectiveDuration" id="content__perspectiveDuration" v-model.number="firstAblation.perspectiveDuration">
            </p>
            <p class="form__row">
                <label for="content__skinDose">皮膚線量(mGv)</label>
                <input type="number" step="1" min="0" name="content__skinDose" id="content__skinDose" v-model.number="firstAblation.skinDose">
            </p>
            <p class="form__row">
                <label for="content__totalDose">総線量(mGv)</label>
                <input type="number" step="1" min="0" name="content__totalDose" id="content__totalDose" v-model.number="firstAblation.totalDose">
            </p>
            <fieldset>
                <legend>術中左房造影</legend>
                <label><input type="radio" name="content__leftAngiography" id="content__leftAngiography__true" v-bind:value="true" v-model="firstAblation.leftAngiography"><span>あり</span></label>
                <label><input type="radio" name="content__leftAngiography" id="content__leftAngiography__false" v-bind:value="false" v-model="firstAblation.leftAngiography"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>EEPVI</legend>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__true" v-bind:value="true" v-model="firstAblation.eepvi"><span>あり</span></label>
                <label><input type="radio" name="content__eepvi" id="content__eepvi__false" v-bind:value="false" v-model="firstAblation.eepvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>EEPVI完成</legend>
                <label><input type="radio" name="content__completedEepvi" id="content__completedEepvi__true" v-bind:value="true" v-model="firstAblation.completedEepvi"><span>はい</span></label>
                <label><input type="radio" name="content__completedEepvi" id="content__completedEepvi__false" v-bind:value="false" v-model="firstAblation.completedEepvi"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>BOX (one ring)</legend>
                <label><input type="radio" name="content__boxOneRing" id="content__boxOneRing__true" v-bind:value="true" v-model="firstAblation.boxOneRing"><span>あり</span></label>
                <label><input type="radio" name="content__boxOneRing" id="content__boxOneRing__false" v-bind:value="false" v-model="firstAblation.boxOneRing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Posterior Center Line</legend>
                <label><input type="radio" name="content__posteriorCenterLine" id="content__posteriorCenterLine__true" v-bind:value="true" v-model="firstAblation.posteriorCenterLine"><span>あり</span></label>
                <label><input type="radio" name="content__posteriorCenterLine" id="content__posteriorCenterLine__false" v-bind:value="false" v-model="firstAblation.posteriorCenterLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>BOX完成</legend>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__true" v-bind:value="true" v-model="firstAblation.completedBox"><span>はい</span></label>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__false" v-bind:value="false" v-model="firstAblation.completedBox"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Dormant Conduction 確認</legend>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__true" v-bind:value="true" v-model="firstAblation.dormantConduction"><span>あり</span></label>
                <label><input type="radio" name="content__dormantConduction" id="content__dormantConduction__false" v-bind:value="false" v-model="firstAblation.dormantConduction"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ATP静注でAF誘発</legend>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__true" v-bind:value="true" v-model="firstAblation.afByAtp"><span>あり</span></label>
                <label><input type="radio" name="content__afByAtp" id="content__afByAtp__false" v-bind:value="false" v-model="firstAblation.afByAtp"><span>なし</span></label>
            </fieldset>
            <h3>PVI以外</h3>
            <!--<fieldset>
                <legend>PVI以外施行していない</legend>
                <label><input type="radio" name="content__onlyPvi" id="content__onlyPvi__true" v-bind:value="true" v-model="firstAblation.onlyPvi"><span>はい</span></label>
                <label><input type="radio" name="content__onlyPvi" id="content__onlyPvi__false" v-bind:value="false" v-model="firstAblation.onlyPvi"><span>いいえ</span></label>
            </fieldset>-->
            <fieldset>
                <legend>SVCI</legend>
                <label><input type="radio" name="content__svci" id="content__svci__true" v-bind:value="true" v-model="firstAblation.svci"><span>あり</span></label>
                <label><input type="radio" name="content__svci" id="content__svci__false" v-bind:value="false" v-model="firstAblation.svci"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SVCI完成</legend>
                <label><input type="radio" name="content__completedSvci" id="content__completedSvci__true" v-bind:value="true" v-model="firstAblation.completedSvci"><span>はい</span></label>
                <label><input type="radio" name="content__completedSvci" id="content__completedSvci__false" v-bind:value="false" v-model="firstAblation.completedSvci"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Isolation</legend>
                <label><input type="radio" name="content__plsvc" id="content__plsvc__true" v-bind:value="true" v-model="firstAblation.plsvc"><span>あり</span></label>
                <label><input type="radio" name="content__plsvc" id="content__plsvc__false" v-bind:value="false" v-model="firstAblation.plsvc"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>PLSVC Isolation 完成</legend>
                <label><input type="radio" name="content__completedPlsvc" id="content__completedPlsvc__true" v-bind:value="true" v-model="firstAblation.completedPlsvc"><span>はい</span></label>
                <label><input type="radio" name="content__completedPlsvc" id="content__completedPlsvc__false" v-bind:value="false" v-model="firstAblation.completedPlsvc"><span>いいえ</span></label>
            </fieldset>
            <fieldset>
                <legend>Non-PV Foci</legend>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__true" v-bind:value="true" v-model="firstAblation.nonPvFoci"><span>あり</span></label>
                <label><input type="radio" name="content__nonPvFoci" id="content__nonPvFoci__false" v-bind:value="false" v-model="firstAblation.nonPvFoci"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__nonPvFociPlace">Non-PV Foci 場所</label>
                <input type="text" name="content__nonPvFociPlace" id="content__nonPvFociPlace" v-model="firstAblation.nonPvFociPlace">
            </p>
            <fieldset>
                <legend>LVZ塊</legend>
                <label><input type="radio" name="content__lvz" id="content__lvz__true" v-bind:value="true" v-model="firstAblation.lvz"><span>あり</span></label>
                <label><input type="radio" name="content__lvz" id="content__lvz__false" v-bind:value="false" v-model="firstAblation.lvz"><span>なし</span></label>
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
                <legend>Low voltage ablation</legend>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__true" v-bind:value="true" v-model="firstAblation.lowVoltageAbl"><span>あり</span></label>
                <label><input type="radio" name="content__lowVoltageAbl" id="content__lowVoltageAbl__false" v-bind:value="false" v-model="firstAblation.lowVoltageAbl"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>LA CFAE</legend>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__true" v-bind:value="true" v-model="firstAblation.laCfae"><span>あり</span></label>
                <label><input type="radio" name="content__laCfae" id="content__laCfae__false" v-bind:value="false" v-model="firstAblation.laCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>RA CFAE</legend>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__true" v-bind:value="true" v-model="firstAblation.raCfae"><span>あり</span></label>
                <label><input type="radio" name="content__raCfae" id="content__raCfae__false" v-bind:value="false" v-model="firstAblation.raCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CS CFAE</legend>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__true" v-bind:value="true" v-model="firstAblation.csCfae"><span>あり</span></label>
                <label><input type="radio" name="content__csCfae" id="content__csCfae__false" v-bind:value="false" v-model="firstAblation.csCfae"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>GP</legend>
                <label><input type="radio" name="content__gp" id="content__gp__true" v-bind:value="true" v-model="firstAblation.gp"><span>あり</span></label>
                <label><input type="radio" name="content__gp" id="content__gp__false" v-bind:value="false" v-model="firstAblation.gp"><span>なし</span></label>
            </fieldset>
            <h3>その他の substrate ablation 詳細</h3>
            <fieldset>
                <legend>Chemical</legend>
                <label><input type="radio" name="content__chemical" id="content__chemical__true" v-bind:value="true" v-model="firstAblation.chemical"><span>あり</span></label>
                <label><input type="radio" name="content__chemical" id="content__chemical__false" v-bind:value="false" v-model="firstAblation.chemical"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line (非BOX例)</legend>
                <label><input type="radio" name="content__roofLine" id="content__roofLine__true" v-bind:value="true" v-model="firstAblation.roofLine"><span>あり</span></label>
                <label><input type="radio" name="content__roofLine" id="content__roofLine__false" v-bind:value="false" v-model="firstAblation.roofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Roof Line 完成</legend>
                <label><input type="radio" name="content__completedRoofLine" id="content__completedRoofLine__true" v-bind:value="true" v-model="firstAblation.completedRoofLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedRoofLine" id="content__completedRoofLine__false" v-bind:value="false" v-model="firstAblation.completedRoofLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line (非BOX例)</legend>
                <label><input type="radio" name="content__bottomLine" id="content__bottomLine__true" v-bind:value="true" v-model="firstAblation.bottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLine" id="content__bottomLine__false" v-bind:value="false" v-model="firstAblation.bottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Bottom Line 完成</legend>
                <label><input type="radio" name="content__completedBottomLine" id="content__completedBottomLine__true" v-bind:value="true" v-model="firstAblation.completedBottomLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedBottomLine" id="content__completedBottomLine__false" v-bind:value="false" v-model="firstAblation.completedBottomLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Posterior Mitral Line</legend>
                <label><input type="radio" name="content__postMitralLine" id="content__postMitralLine__true" v-bind:value="true" v-model="firstAblation.postMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__postMitralLine" id="content__postMitralLine__false" v-bind:value="false" v-model="firstAblation.postMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Anterior Mitral Line</legend>
                <label><input type="radio" name="content__antMitralLine" id="content__antMitralLine__true" v-bind:value="true" v-model="firstAblation.antMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__antMitralLine" id="content__antMitralLine__false" v-bind:value="false" v-model="firstAblation.antMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line CS通電</legend>
                <label><input type="radio" name="content__mitralLineCs" id="content__mitralLineCs__true" v-bind:value="true" v-model="firstAblation.mitralLineCs"><span>あり</span></label>
                <label><input type="radio" name="content__mitralLineCs" id="content__mitralLineCs__false" v-bind:value="false" v-model="firstAblation.mitralLineCs"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Mitral Line 完成</legend>
                <label><input type="radio" name="content__completedMitralLine" id="content__completedMitralLine__true" v-bind:value="true" v-model="firstAblation.completedMitralLine"><span>あり</span></label>
                <label><input type="radio" name="content__completedMitralLine" id="content__completedMitralLine__false" v-bind:value="false" v-model="firstAblation.completedMitralLine"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI</legend>
                <label><input type="radio" name="content__cti" id="content__cti__true" v-bind:value="true" v-model="firstAblation.cti"><span>あり</span></label>
                <label><input type="radio" name="content__cti" id="content__cti__false" v-bind:value="false" v-model="firstAblation.cti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI 完成</legend>
                <label><input type="radio" name="content__completedCti" id="content__completedCti__true" v-bind:value="true" v-model="firstAblation.completedCti"><span>あり</span></label>
                <label><input type="radio" name="content__completedCti" id="content__completedCti__false" v-bind:value="false" v-model="firstAblation.completedCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CTI 施行済</legend>
                <label><input type="radio" name="content__pastCti" id="content__pastCti__true" v-bind:value="true" v-model="firstAblation.pastCti"><span>あり</span></label>
                <label><input type="radio" name="content__pastCti" id="content__pastCti__false" v-bind:value="false" v-model="firstAblation.pastCti"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB-PVI</legend>
                <label><input type="radio" name="content__cbPvi" id="content__cbPvi__true" v-bind:value="true" v-model="firstAblation.cbPvi"><span>あり</span></label>
                <label><input type="radio" name="content__cbPvi" id="content__cbPvi__false" v-bind:value="false" v-model="firstAblation.cbPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB で Roof Line</legend>
                <label><input type="radio" name="content__roofLineByCb" id="content__roofLineByCb__true" v-bind:value="true" v-model="firstAblation.roofLineByCb"><span>あり</span></label>
                <label><input type="radio" name="content__roofLineByCb" id="content__roofLineByCb__false" v-bind:value="false" v-model="firstAblation.roofLineByCb"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CB で Bottom Line</legend>
                <label><input type="radio" name="content__bottomLineByCb" id="content__bottomLineByCb__true" v-bind:value="true" v-model="firstAblation.bottomLineByCb"><span>あり</span></label>
                <label><input type="radio" name="content__bottomLineByCb" id="content__bottomLineByCb__false" v-bind:value="false" v-model="firstAblation.bottomLineByCb"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Laser-PVI</legend>
                <label><input type="radio" name="content__laserPvi" id="content__laserPvi__true" v-bind:value="true" v-model="firstAblation.laserPvi"><span>あり</span></label>
                <label><input type="radio" name="content__laserPvi" id="content__laserPvi__false" v-bind:value="false" v-model="firstAblation.laserPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>HOT-PVI</legend>
                <label><input type="radio" name="content__hotPvi" id="content__hotPvi__true" v-bind:value="true" v-model="firstAblation.hotPvi"><span>あり</span></label>
                <label><input type="radio" name="content__hotPvi" id="content__hotPvi__false" v-bind:value="false" v-model="firstAblation.hotPvi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>その他</legend>
                <label><input type="radio" name="content__other" id="content__other__true" v-bind:value="true" v-model="firstAblation.other"><span>あり</span></label>
                <label><input type="radio" name="content__other" id="content__other__false" v-bind:value="false" v-model="firstAblation.other"><span>なし</span></label>
            </fieldset>
            <p class="form__row">
                <label for="content__otherDetail">その他</label>
                <input type="text" name="content__otherDetail" id="content__otherDetail" v-model="firstAblation.otherDetail">
            </p>
            <h3>手技開始時AF/ATの場合</h3>
            <fieldset>
                <legend>Conversion to S.R.</legend>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__true" v-bind:value="true" v-model="firstAblation.conversionToSr"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToSr" id="content__conversionToSr__false" v-bind:value="false" v-model="firstAblation.conversionToSr"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Conversion to AT</legend>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__true" v-bind:value="true" v-model="firstAblation.conversionToAt"><span>あり</span></label>
                <label><input type="radio" name="content__conversionToAt" id="content__conversionToAt__false" v-bind:value="false" v-model="firstAblation.conversionToAt"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Cardioversion施行</legend>
                <label><input type="radio" name="content__cardioversion" id="content__cardioversion__true" v-bind:value="true" v-model="firstAblation.cardioversion"><span>あり</span></label>
                <label><input type="radio" name="content__cardioversion" id="content__cardioversion__false" v-bind:value="false" v-model="firstAblation.cardioversion"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>術中に抗不整脈薬を使用</legend>
                <label><input type="radio" name="content__antiarrhythmia" id="content__antiarrhythmia__true" v-bind:value="true" v-model="firstAblation.antiarrhythmia"><span>あり</span></label>
                <label><input type="radio" name="content__antiarrhythmia" id="content__antiarrhythmia__false" v-bind:value="false" v-model="firstAblation.antiarrhythmia"><span>なし</span></label>
            </fieldset>
            <h3>Induction test を施行</h3>
            <fieldset>
                <legend>Burst Pacing</legend>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__true" v-bind:value="true" v-model="firstAblation.burstPacing"><span>あり</span></label>
                <label><input type="radio" name="content__burstPacing" id="content__burstPacing__false" v-bind:value="false" v-model="firstAblation.burstPacing"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ISP</legend>
                <label><input type="radio" name="content__isp" id="content__isp__true" v-bind:value="true" v-model="firstAblation.isp"><span>あり</span></label>
                <label><input type="radio" name="content__isp" id="content__isp__false" v-bind:value="false" v-model="firstAblation.isp"><span>なし</span></label>
            </fieldset>
        </section>
        <section>
        <h2>合併症</h2>
            <fieldset>
                <legend>手技関連死亡</legend>
                <label><input type="radio" name="complex__deathByOpe" id="complex__deathByOpe__true" v-bind:value="true" v-model="firstAblation.deathByOpe"><span>あり</span></label>
                <label><input type="radio" name="complex__deathByOpe" id="complex__deathByOpe__false" v-bind:value="false" v-model="firstAblation.deathByOpe"><span>なし</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !firstAblation.deathByOpe }">
                <label for="complex__deathOn">死亡年月日</label>
                <input type="date" name="complex__deathOn" id="complex__deathOn" v-model="firstAblation.deathOn">
            </p>
            <p class="form__row" :class="{ hidden: !firstAblation.deathByOpe }">
                <label for="complex__reasonOfDeath">死亡原因</label>
                <input type="text" name="complex__reasonOfDeath" id="complex__reasonOfDeath" v-model="firstAblation.reasonOfDeath">
            </p>
            <fieldset>
                <legend>合併症あり</legend>
                <label><input type="radio" name="complex__complications" id="complex__complications__true" v-bind:value="true" v-model="firstAblation.complications"><span>あり</span></label>
                <label><input type="radio" name="complex__complications" id="complex__complications__false" v-bind:value="false" v-model="firstAblation.complications"><span>なし</span></label>
            </fieldset>
            <fieldset class="panel" :class="{ hidden: !firstAblation.complications }">
                <legend>合併症</legend>
                <label><input type="checkbox" name="complex__heartSwellNeedsPuncture" id="complex__heartSwellNeedsPuncture" v-model="firstAblation.heartSwellNeedsPuncture"><span>穿刺を要した心嚢水貯留</span></label>
                <label><input type="checkbox" name="complex__heartSwellNeedsOpenChest" id="complex__heartSwellNeedsOpenChest" v-model="firstAblation.heartSwellNeedsOpenChest"><span>開胸を要した心嚢水貯留</span></label>
                <label><input type="checkbox" name="complex__heartSwellNeedsNoOpe" id="complex__heartSwellNeedsNoOpe" v-model="firstAblation.heartSwellNeedsNoOpe"><span>侵襲的治療を要さない心嚢水貯留</span></label>
                <label><input type="checkbox" name="complex__leftFistula" id="complex__leftFistula" v-model="firstAblation.leftFistula"><span>左房食道瘻</span></label>
                <label><input type="checkbox" name="complex__esophagealDisorder" id="complex__esophagealDisorder" v-model="firstAblation.esophagealDisorder"><span>食道神経叢障害／急性胃拡張</span></label>
                <label><input type="checkbox" name="complex__phrenicDisorder" id="complex__phrenicDisorder" v-model="firstAblation.phrenicDisorder"><span>横隔神経障害</span></label>
                <label><input type="checkbox" name="complex__tia" id="complex__tia" v-model="firstAblation.tia"><span>症候性脳梗塞／TIA</span></label>
                <label><input type="checkbox" name="complex__otherEmbolism" id="complex__otherEmbolism" v-model="firstAblation.otherEmbolism"><span>その他の血栓塞栓症</span></label>
                <label><input type="checkbox" name="complex__airEmbolism" id="complex__airEmbolism" v-model="firstAblation.airEmbolism"><span>空気塞栓症</span></label>
                <label><input type="checkbox" name="complex__infarctionAroundOpe" id="complex__infarctionAroundOpe" v-model="firstAblation.infarctionAroundOpe"><span>術中・術後の心筋梗塞</span></label>
                <label><input type="checkbox" name="complex__endocarditis" id="complex__endocarditis" v-model="firstAblation.endocarditis"><span>感染性心内膜炎</span></label>
                <label><input type="checkbox" name="complex__sepsis" id="complex__sepsis" v-model="firstAblation.sepsis"><span>敗血症</span></label>
                <label><input type="checkbox" name="complex__pseudoaneurysm" id="complex__pseudoaneurysm" v-model="firstAblation.pseudoaneurysm"><span>仮性動脈瘤</span></label>
                <label><input type="checkbox" name="complex__arteriovenousFistula" id="complex__arteriovenousFistula" v-model="firstAblation.arteriovenousFistula"><span>動静脈瘤</span></label>
                <label><input type="checkbox" name="complex__punctureHematoma" id="complex__punctureHematoma" v-model="firstAblation.punctureHematoma"><span>穿刺部血腫</span></label>
                <label><input type="checkbox" name="complex__retroperitonealHematoma" id="complex__retroperitonealHematoma" v-model="firstAblation.retroperitonealHematoma"><span>後腹膜血腫</span></label>
                <label><input type="checkbox" name="complex__transfusion" id="complex__transfusion" v-model="firstAblation.transfusion"><span>輸血</span></label>
                <label><input type="checkbox" name="complex__pulmonaryVeinStenosis" id="complex__pulmonaryVeinStenosis" v-model="firstAblation.pulmonaryVeinStenosis"><span>急性肺静脈狭窄・閉塞</span></label>
                <label><input type="checkbox" name="complex__pulmonaryEmbolism" id="complex__pulmonaryEmbolism" v-model="firstAblation.pulmonaryEmbolism"><span>肺塞栓症</span></label>
                <label><input type="checkbox" name="complex__temporaryPmByAvb" id="complex__temporaryPmByAvb" v-model="firstAblation.temporaryPmByAvb"><span>temporary PM使用 due to AVB</span></label>
                <label><input type="checkbox" name="complex__unexpectedAtrioventricularBlock" id="complex__unexpectedAtrioventricularBlock" v-model="firstAblation.unexpectedAtrioventricularBlock"><span>予定しない恒久型ペースメーカーを要した房室ブロック</span></label>
                <label><input type="checkbox" name="complex__pneumothorax" id="complex__pneumothorax" v-model="firstAblation.pneumothorax"><span>気胸</span></label>
                <label><input type="checkbox" name="complex__hemothorax" id="complex__hemothorax" v-model="firstAblation.hemothorax"><span>血胸</span></label>
                <label><input type="checkbox" name="complex__sinusDissection" id="complex__sinusDissection" v-model="firstAblation.sinusDissection"><span>冠静脈洞乖離</span></label>
                <label><input type="checkbox" name="complex__curedDamagedValve" id="complex__curedDamagedValve" v-model="firstAblation.curedDamagedValve"><span>外科治療を要した弁損傷</span></label>
                <label><input type="checkbox" name="complex__aorticDissection" id="complex__aorticDissection" v-model="firstAblation.aorticDissection"><span>大動脈解離</span></label>
                <label><input type="checkbox" name="complex__allergy" id="complex__allergy" v-model="firstAblation.allergy"><span>アレルギー</span></label>
                <label><input type="checkbox" name="complex__otherComplications" id="complex__otherComplications" v-model="firstAblation.otherComplications"><span>その他の合併症</span></label>
            </fieldset>
            <p class="form__row" :class="{ hidden: !firstAblation.otherEmbolism }">
                <label for="complex__other">その他の血栓塞栓症部位</label>
                <input type="text" name="complex__otherEmbolismPart" id="complex__otherEmbolismPart" v-model="firstAblation.otherEmbolismPart">
            </p>
            <p class="form__row" :class="{ hidden: !firstAblation.transfusion }">
                <label for="complex__transfusionReason">輸血の原因</label>
                <input type="text" name="complex__transfusionReason" id="complex__transfusionReason" v-model="firstAblation.transfusionReason">
            </p>
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
    },
    methods: {
        updateFirstAblation: function() {
            this.axios.post( 
                this.$store.getters.apiRoot + '/1st-abl/' + this.$route.params.patientId, //this.$store.getters.patientId,
                this.firstAblation, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                    data: {}
                }
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'Baseline update: SUCCESS' )
                } else {
                    console.log( 'Baseline update: FAILED' )
                }
            });
        },
        getFirstAblation: function() {
            this.axios.get( this.$store.getters.apiRoot + '/1st-abl/' + this.$route.params.patientId, { //this.$store.getters.patientId
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.firstAblation = response.data;
                this.$store.dispatch('updatePatientIdAction');
            })
        }
    },
    mounted: function() {
        this.$emit('pushContents');
        this.getFirstAblation();
    },
    beforeUpdate: function() {
        this.updateFirstAblation();
    },
    destroyed: function() {
    }
}
</script>
