<template>
    <section class="register" id="register">
        <h1>ベースライン</h1>
        <section class="register__basic">
        <h2>基本情報</h2>
        <fieldset>
            <legend>性別</legend>
            <label><input type="radio" name="basic__sex" id="male" v-bind:value="true" v-model="patient.sex"><span>男性</span></label>
            <label><input type="radio" name="basic__sex" id="female" v-bind:value="false" v-model="patient.sex"><span>女性</span></label>
        </fieldset>
        <p class="form__row">
            <label for="basic__birthday">誕生日</label>
            <input type="date" name="basic__birthday" id="basic__birthday" v-model="patient.birthday">
        </p>
        <p class="form__row">
            <label for="basic__height">身長</label>
            <input type="number" step="0.1" min="100.0" max="250.0" name="basic__height" id="basic__height" v-model.number="patient.height">cm
        </p>
        <p class="form__row">
            <label for="basic__weight">体重</label>
            <input type="number" step="0.1" min="20.0" max="300.0" name="basic__weight" id="basic_weight" v-model.number="patient.weight">kg
        </p>
        <fieldset>
            <legend>AFの種類</legend>
            <label><input type="radio" name="basic_afKind" id="basic__afKind__null" v-bind:value="null" v-model="patient.afKind"><span>なし</span></label>
            <label><input type="radio" name="basic_afKind" id="basic__afKind__paf" value="paf" v-model="patient.afKind"><span>PAF</span></label>
            <label><input type="radio" name="basic_afKind" id="basic__afKind__peaf" value="peaf" v-model="patient.afKind"><span>PeAF</span></label>
            <label><input type="radio" name="basic_afKind" id="basic__afKind__lspeaf" value="lapeaf" v-model="patient.afKind"><span>LSPeAF</span></label>
        </fieldset>
        <fieldset>
            <legend>RFCA or CB</legend>
            <label><input type="radio" name="basic__rfcaCb" id="basic__rfcaCb__rfca" value="RFCA" v-model="patient.rfcaCb"><span>RFCA</span></label>
            <label><input type="radio" name="basic__rfcaCb" id="basic__rfcaCb__cryo" value="Cryo" v-model="patient.rfcaCb"><span>Cryo</span></label>
        </fieldset>
        <fieldset>
            <legend>Modified EHRA Score</legend>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__null" v-bind:value="null" v-model="patient.ehraScore"><span>なし</span></label>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__1" value="1" v-model="patient.ehraScore"><span>1</span></label>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__2a" value="2a" v-model="patient.ehraScore"><span>2a</span></label>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__2b" value="2b" v-model="patient.ehraScore"><span>2b</span></label>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__3" value="3" v-model="patient.ehraScore"><span>3</span></label>
            <label><input type="radio" name="basic__ehraScore" id="basic__ehraScore__4" value="4" v-model="patient.ehraScore"><span>4</span></label>
        </fieldset>
        <fieldset>
            <legend>症候の有無</legend>
            <label><input type="radio" name="basic__hasSymptom" id="true" v-bind:value="true" v-model="patient.hasSymptom"><span>あり</span></label>
            <label><input type="radio" name="basic__hasSymptom" id="false" v-bind:value="false" v-model="patient.hasSymptom"><span>なし</span></label>
        </fieldset>
        <!--<fieldset>
            <legend>Frality Scale</legend>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__null" v-bind:value="null" v-model.number="patient.fralityScale"><span>なし</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__1" value="1" v-model.number="patient.fralityScale"><span>1</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__2" value="2" v-model.number="patient.fralityScale"><span>2</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__3" value="3" v-model.number="patient.fralityScale"><span>3</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__4" value="4" v-model.number="patient.fralityScale"><span>4</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__5" value="5" v-model.number="patient.fralityScale"><span>5</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__6" value="6" v-model.number="patient.fralityScale"><span>6</span></label>
            <label><input type="radio" name="basic__fralityScale" id="basic__fralityScale__7" value="7" v-model.number="patient.fralityScale"><span>7</span></label>
        </fieldset>-->
        </section>
        <section class="register__ecg">
        <h2>入院時 12ch ECG</h2>
        <fieldset>
            <legend>Rhythm</legend>
            <label><input type="radio" name="ecg__rhythm" id="ecg__rhyhtm__sr" value="sr" v-model="patient.rhythm"><span>S.R.</span></label>
            <label><input type="radio" name="ecg__rhythm" id="ecg__rhyhtm__af" value="af" v-model="patient.rhythm"><span>AF</span></label>
            <label><input type="radio" name="ecg__rhythm" id="ecg__rhyhtm__aPace" value="a_pacing" v-model="patient.rhythm"><span>A Pacing</span></label>
        </fieldset>
        <p class="form__row">
            <label for="ecg__hr">HR</label>
            <input type="number" name="ecg__hr" id="ecg__hr" v-model="patient.heartRate">
        </p>
        <p class="form__row">
            <label for="ecg__prGap">PR間隔</label>
            <input type="number" name="ecg__prGap" id="ecg__prGap" v-model="patient.prGap">
        </p>
        <p class="form__row">
            <label for="ecg__qrsWidth">QRS幅</label>
            <input type="number" name="ecg__qrsWidth" id="ecg__qrsWidth" v-model="patient.qrs">
        </p>
        <fieldset>
            <legend>SSS</legend>
            <label><input type="radio" name="ecg__sss" id="ecg__sss__null" v-bind:value="null" v-model.number="patient.sss"><span>なし</span></label>
            <label><input type="radio" name="ecg__sss" id="ecg__sss__1" value="1" v-model.number="patient.sss"><span>I型</span></label>
            <label><input type="radio" name="ecg__sss" id="ecg__sss__2" value="2" v-model.number="patient.sss"><span>II型</span></label>
            <label><input type="radio" name="ecg__sss" id="ecg__sss__3" value="3" v-model.number="patient.sss"><span>III型</span></label>
        </fieldset>
        <fieldset>
            <legend>AV Block</legend>
            <label><input type="radio" name="ecg__avBlock" id="ecg__avBlock__1" value="1" v-model.number="patient.avBlock"><span>Whenckebach</span></label>
            <label><input type="radio" name="ecg__avBlock" id="ecg__avBlock__2" value="2" v-model.number="patient.avBlock"><span>Mobitz</span></label>
            <label><input type="radio" name="ecg__avBlock" id="ecg__avBlock__3" value="3" v-model.number="patient.avBlock"><span>Advenced</span></label>
            <label><input type="radio" name="ecg__avBlock" id="ecg__avBlock__4" value="4" v-model.number="patient.avBlock"><span>Complete</span></label>
        </fieldset>
        <fieldset>
            <legend>デバイス</legend>
            <label><input type="checkbox" name="ecg__device__pm" id="ecg__device__pm" v-model="patient.pm"><span>ペースぺーカー</span></label>
            <label><input type="checkbox" name="ecg__device__icd" id="ecg__device__icd" v-model="patient.icd"><span>ICD</span></label>
            <label><input type="checkbox" name="ecg__device__crtp" id="ecg__device__crtp" v-model="patient.crtp"><span>CRTP</span></label>
            <label><input type="checkbox" name="ecg__device__crtd" id="ecg__device__crtd" v-model="patient.crtd"><span>CRTD</span></label>
        </fieldset>
        <p class="form__row">
            <label for="ecg__afOnset">AF発症時期</label>
            <input type="date" name="ecg__afOnset" id="ecg__afOnset" v-model="patient.afOnsetOn">
        </p>
        <p class="form__row">
            <label for="ecg__afImmobilize">AF固定時期</label>
            <input type="date" name="basic__birthday" id="basic__birthday" v-model="patient.afImmobilizedOn">
        </p>
        </section>
        <section class="register__history">
            <h2>既往歴</h2>
            <fieldset>
                <legend>Maze歴</legend>
                <label><input type="radio" name="history__maze" id="history__maze__true" v-bind:value="true" v-model="patient.maze"><span>あり</span></label>
                <label><input type="radio" name="history__maze" id="history__maze__false" v-bind:value="false" v-model="patient.maze"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>開心術後</legend>
                <label><input type="radio" name="history__openHeart" id="history__openHeart__true" v-bind:value="true" v-model="patient.openHeart"><span>あり</span></label>
                <label><input type="radio" name="history__openHeart" id="history__openHeart__false" v-bind:value="false" v-model="patient.openHeart"><span>なし</span></label>
            </fieldset>
        <p class="form__row">
            <label for="basic__height">開心術詳細</label>
            <input type="text" name="history__openHeart__detail" id="history__openHeart__detail" v-model="patient.openHeartDetail">
        </p>
            <fieldset>
                <legend>HT</legend>
                <label><input type="radio" name="history__ht" id="history__ht__true" v-bind:value="true" v-model="patient.ht"><span>あり</span></label>
                <label><input type="radio" name="history__ht" id="history__ht__false" v-bind:value="false" v-model="patient.ht"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>DM</legend>
                <label><input type="radio" name="history__dm" id="history__dm__true" v-bind:value="true" v-model="patient.dm"><span>あり</span></label>
                <label><input type="radio" name="history__dm" id="history__dm__false" v-bind:value="false" v-model="patient.dm"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>DysLip</legend>
                <label><input type="radio" name="history__dyslip" id="history__dyslip__true" v-bind:value="true" v-model="patient.dyslip"><span>あり</span></label>
                <label><input type="radio" name="history__dyslip" id="history__dyslip__false" v-bind:value="false" v-model="patient.dyslip"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>HU</legend>
                <label><input type="radio" name="history__hu" id="history__hu__true" v-bind:value="true" v-model="patient.hu"><span>あり</span></label>
                <label><input type="radio" name="history__hu" id="history__hu__false" v-bind:value="false" v-model="patient.hu"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>喫煙歴</legend>
                <label><input type="radio" name="history__smoke" id="history__smoke__0" value="0" v-model.number="patient.smokingHistory"><span>なし</span></label>
                <label><input type="radio" name="history__smoke" id="history__smoke__1" value="1" v-model.number="patient.smokingHistory"><span>過去に喫煙</span></label>
                <label><input type="radio" name="history__smoke" id="history__smoke__2" value="2" v-model.number="patient.smokingHistory"><span>喫煙中</span></label>
            </fieldset>
            <fieldset>
                <legend>維持透析中</legend>
                <label><input type="radio" name="history__dialysys" id="history__dialysys__true" v-bind:value="true" v-model="patient.dialysys"><span>あり</span></label>
                <label><input type="radio" name="history__dialysys" id="history__dialysys__false" v-bind:value="false" v-model="patient.dialysys"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Thrombosis</legend>
                <label><input type="radio" name="history__thrombosis" id="history__thrombosis__true" v-bind:value="true" v-model="patient.thrombosis"><span>あり</span></label>
                <label><input type="radio" name="history__thrombosis" id="history__thrombosis__false" v-bind:value="false" v-model="patient.thrombosis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>TIA</legend>
                <label><input type="radio" name="history__tia" id="history__tia__true" v-bind:value="true" v-model="patient.tia"><span>あり</span></label>
                <label><input type="radio" name="history__tia" id="history__tia__false" v-bind:value="false" v-model="patient.tia"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Ischemic stroke</legend>
                <label><input type="radio" name="history__ischemicStroke" id="history__isthBleeding__true" v-bind:value="true" v-model="patient.ischemicStroke"><span>あり</span></label>
                <label><input type="radio" name="history__ischemicStroke" id="history__isthBleeding__false" v-bind:value="false" v-model="patient.ischemicStroke"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Hemorrhagic stroke</legend>
                <label><input type="radio" name="history__hemorrhagicStroke" id="history__hemorrhagicStroke__true" v-bind:value="true" v-model="patient.hemorrhagicStroke"><span>あり</span></label>
                <label><input type="radio" name="history__hemorrhagicStroke" id="history__hemorrhagicStroke__false" v-bind:value="false" v-model="patient.hemorrhagicStroke"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ISTH大出血</legend>
                <label><input type="radio" name="history__isthBleeding" id="history__isthBleeding__true" v-bind:value="true" v-model="patient.isthBleeding"><span>あり</span></label>
                <label><input type="radio" name="history__isthBleeding" id="history__isthBleeding__false" v-bind:value="false" v-model="patient.isthBleeding"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>重大ではないが臨床的に問題となる出血</legend>
                <label><input type="radio" name="history__problematicBleeding" id="history__problematicBleeding__true" v-bind:value="true" v-model="patient.problematicBleeding"><span>あり</span></label>
                <label><input type="radio" name="history__problematicBleeding" id="history__problematicBleeding__false" v-bind:value="false" v-model="patient.problematicBleeding"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>CHF既往</legend>
                <label><input type="radio" name="history__chfNyha" id="history__chfNyha__true" v-bind:value="true" v-model="patient.chfNyha"><span>あり</span></label>
                <label><input type="radio" name="history__chfNyha" id="history__chfNyha__false" v-bind:value="false" v-model="patient.chfNyha"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>大血管+末梢血管疾患</legend>
                <label><input type="radio" name="history__bloodVesselDisease" id="history__bloodVesselDisease__true" v-bind:value="true" v-model="patient.bloodVesselDisease"><span>あり</span></label>
                <label><input type="radio" name="history__bloodVesselDisease" id="history__bloodVesselDisease__false" v-bind:value="false" v-model="patient.bloodVesselDisease"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>SAS</legend>
                <label><input type="radio" name="history__sas" id="history__sas__true" v-bind:value="true" v-model="patient.sas"><span>あり</span></label>
                <label><input type="radio" name="history__sas" id="history__sas__false" v-bind:value="false" v-model="patient.sas"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>OMI</legend>
                <label><input type="radio" name="history__omi" id="history__omi__true" v-bind:value="true" v-model="patient.omi"><span>あり</span></label>
                <label><input type="radio" name="history__omi" id="history__omi__false" v-bind:value="false" v-model="patient.omi"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>IHD (OMI + AP + PCI + CABG)</legend>
                <label><input type="radio" name="history__ihd" id="history__ihd__true" v-bind:value="true" v-model="patient.ihd"><span>あり</span></label>
                <label><input type="radio" name="history__ihd" id="history__ihd__false" v-bind:value="false" v-model="patient.ihd"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>HCM</legend>
                <label><input type="radio" name="history__hcm" id="history__hcm__true" v-bind:value="true" v-model="patient.hcm"><span>あり</span></label>
                <label><input type="radio" name="history__hcm" id="history__hcm__false" v-bind:value="false" v-model="patient.hcm"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>DCM</legend>
                <label><input type="radio" name="history__dcm" id="history__dcm__true" v-bind:value="true" v-model="patient.dcm"><span>あり</span></label>
                <label><input type="radio" name="history__dcm" id="history__dcm__false" v-bind:value="false" v-model="patient.dcm"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>他の心筋症 (IHD, HHD, NCM, ARVC, Sarcoidosis, Amiloidosis, Lamin etc)</legend>
                <label><input type="radio" name="history__otherCardiomiopathy" id="history__otherCardiomiopathy__true" v-bind:value="true" v-model="patient.otherCardiomiopathy"><span>あり</span></label>
                <label><input type="radio" name="history__otherCardiomiopathy" id="history__otherCardiomiopathy__false" v-bind:value="false" v-model="patient.otherCardiomiopathy"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>MR(術後)</legend>
                <label><input type="radio" name="history__mr" id="history__mr__true" v-bind:value="true" v-model="patient.mr"><span>あり</span></label>
                <label><input type="radio" name="history__mr" id="history__mr__false" v-bind:value="false" v-model="patient.mr"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>MS(術後)</legend>
                <label><input type="radio" name="history__ms" id="history__ms__true" v-bind:value="true" v-model="patient.ms"><span>あり</span></label>
                <label><input type="radio" name="history__ms" id="history__ms__false" v-bind:value="false" v-model="patient.ms"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ほかの弁膜症術後</legend>
                <label><input type="radio" name="history__valvularDisease" id="history__valvularDisease__true" v-bind:value="true" v-model="patient.valvularDisease"><span>あり</span></label>
                <label><input type="radio" name="history__valvularDisease" id="history__valvularDisease__false" v-bind:value="false" v-model="patient.valvularDisease"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>甲状腺機能亢進症(既往、加療中を含む)</legend>
                <label><input type="radio" name="history__hyperthyroidism" id="history__hyperthyroidism__true" v-bind:value="true" v-model="patient.hyperthyroidism"><span>あり</span></label>
                <label><input type="radio" name="history__hyperthyroidism" id="history__hyperthyroidism__false" v-bind:value="false" v-model="patient.hyperthyroidism"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>甲状腺機能低下症(既往、加療中を含む)</legend>
                <label><input type="radio" name="history__hypothyreosis" id="history__hypothyreosis__true" v-bind:value="true" v-model="patient.hypothyreosis"><span>あり</span></label>
                <label><input type="radio" name="history__hypothyreosis" id="history__hypothyreosis__false" v-bind:value="false" v-model="patient.hypothyreosis"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>ASD(術後or残存)</legend>
                <label><input type="radio" name="history__asd" id="history__asd__true" v-bind:value="true" v-model="patient.asd"><span>あり</span></label>
                <label><input type="radio" name="history__asd" id="history__asd__false" v-bind:value="false" v-model="patient.asd"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>Other Congenital（術後or残存）</legend>
                <label><input type="radio" name="history__otherCongenital" id="history__otherCongenital__true" v-bind:value="true" v-model="patient.otherCongenital"><span>あり</span></label>
                <label><input type="radio" name="history__otherCongenital" id="history__otherCongenital__false" v-bind:value="false" v-model="patient.otherCongenital"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>膠原病</legend>
                <label><input type="radio" name="history__ctd" id="history__ctd__true" v-bind:value="true" v-model="patient.ctd"><span>あり</span></label>
                <label><input type="radio" name="history__ctd" id="history__ctd__false" v-bind:value="false" v-model="patient.ctd"><span>なし</span></label>
            </fieldset>
            <fieldset>
                <legend>悪性腫瘍</legend>
                <label><input type="radio" name="history__malignancy" id="history__malignancy__true" v-bind:value="true" v-model="patient.malignancy"><span>あり</span></label>
                <label><input type="radio" name="history__malignancy" id="history__malignancy__false" v-bind:value="false" v-model="patient.malignancy"><span>なし</span></label>
            </fieldset>
        </section>
        <section class="register__blood">
            <h2>入院時血液検査</h2>
            <p class="form__row">
                <label for="blood__hba1c">HbA1c (NGSP)</label>
                <input type="number" step="0.1" name="blood__hba1c" id="blood__hba1c" v-model="patient.hba1c">
            </p>
            <p class="form__row">
                <label for="blood__cre">Cre</label>
                <input type="number" step="0.01" name="blood__cre" id="blood__cre" v-model="patient.cre">
            </p>
            <p class="form__row">
                <label for="blood__egfr">eGFR</label>
                <input type="number" step="0.1" name="blood__egfr" id="blood__egfr" v-model="patient.egfr">
            </p>
            <!--<p class="form__row">
                <label for="blood__Ccr">Ccr</label>
                <input type="number" step="0.1" name="blood__ccr" id="blood__ccr" v-bind:value="ccr" readonly>
                <input type="number" step="0.1" name="blood__ccr" id="blood__ccr" v-model="patient.ccr">
            </p>-->
            <p class="form__row">
                <label for="blood__ntProBnp">NT-proBNP</label>
                <input type="number" step="0.1" name="blood__ntProBnp" id="blood__ntProBnp" v-model="patient.ntProBnp">
            </p>
            <p class="form__row">
                <label for="blood__bnp">BNP</label>
                <input type="number" step="0.1" name="blood__bnp" id="blood__bnp" v-model="patient.bnp">
            </p>
            <p class="form__row">
                <label for="blood__aptt">APTT</label>
                <input type="number" step="0.1" name="blood__aptt" id="blood__aptt" v-model="patient.aptt">
            </p>
            <p class="form__row">
                <label for="blood__ptInr">PT-INR</label>
                <input type="number" step="0.01" name="blood__ptInr" id="blood__ptInr" v-model="patient.ptInr">
            </p>
            <p class="form__row">
                <label for="blood__dDimer">D-Dimer</label>
                <input type="number" step="0.1" name="blood__dDimer" id="blood__dDimer" v-model="patient.dDimer">
            </p>
            <p class="form__row">
                <label for="blood__hb">Hb</label>
                <input type="number" step="0.1" name="blood__hb" id="blood__hb" v-model="patient.hb">
            </p>
            <p class="form__row">
                <label for="blood__hmt">Ht</label>
                <input type="number" step="0.1" name="blood__hmt" id="blood__hmt" v-model="patient.hmt">
            </p>
            <p class="form__row">
                <label for="blood__tsh">TSH</label>
                <input type="number" step="0.01" name="blood__tsh" id="blood__tsh" v-model="patient.tsh">
            </p>
            <p class="form__row">
                <label for="blood__ft4">FT4</label>
                <input type="number" step="0.01" name="blood__ft4" id="blood__ft4" v-model="patient.ft4">
            </p>
            <p class="form__row">
                <label for="blood__ast">AST</label>
                <input type="number" step="1" name="blood__ast" id="blood__ast" v-model="patient.ast">
            </p>
            <p class="form__row">
                <label for="blood__alt">ALT</label>
                <input type="number" step="1" name="blood__alt" id="blood__alt" v-model="patient.alt">
            </p>
            <p class="form__row">
                <label for="blood__tbil">T-Bil</label>
                <input type="number" step="0.1" name="blood__tbil" id="blood__tbil" v-model="patient.tbil">
            </p>
        </section>
        <UCG :ucgId="patient.ucgId" @enableParentSave="enableSave" ref="ucg"></UCG>
        <section class="form__save">
            <button class="form__saveButton" type="button" :disabled="isSaveDisabled" v-on:click="updateAll">保存する</button>
        </section>
    </section>
</template>

<script>
import UCG from '@/components/ucg.vue'
export default {
    name: 'Register',
    components: {
        UCG
    },
    data() {
        return {
            patient: {
                patientSerialNumber: this.$store.getters.patientId,
                ucgId: null
            },
            isSaveDisabled: true,
        }
    },
    methods: {
        isSection: function( element ){
            return element.nodeName === "SECTION"
        },
        updateBaseline: function(){
            this.axios.post( 
                this.$store.getters.apiRoot + '/baseline/' + this.$route.params.patientId,//this.$store.getters.patientId,
                this.patient, {
                    headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                }
            ).then(( response ) => {
                if( response.status == 200 ){
                    console.log( 'Baseline update: SUCCESS' )
                } else {
                    console.log( 'Baseline update: FAILED' )
                }
            });
        },
        getBaseline: function(){
            this.axios.get( this.$store.getters.apiRoot + '/baseline/' + this.$route.params.patientId, {//this.$store.getters.patientId
                headers: { "Authorization": "Bearer " + this.$store.getters.loginToken },
                data: {}
            }
            ).then(( response ) => {
                this.patient = response.data;
            })
        },
        disableSave: function(){
            this.isSaveDisabled = true;
        },
        enableSave: function(){
            this.isSaveDisabled = false;
        },
        updateAll: function() {
            this.updateBaseline();
            this.$refs.ucg.updateUcg();
            this.disableSave();
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.$emit('pushContents');
        });
        this.getBaseline();
    },
    beforeUpdate: function() {
        //this.updateBaseline();
    },
    watch: {
        patient: {
            handler: function() {
                this.enableSave();
            },
            deep: true
        }
    },
    computed: {
        ucgId: {
            get: function() {
                return this.patient.ucgId;
            },
            set: function(id) {
                this.patient.ucgId = id;
            }
        },
        ccr: function() {
            let sexValue = 0
            if( this.patient.sex ){
                sexValue = 1
            } else {
                sexValue = 0.85
            }
            let age = 60

            let ccr = sexValue * ( ( 140 - age ) * this.patient.weight ) / ( 72 * this.patient.cre )
            return ccr 
        }
    }
}
</script>
<style scoped>
</style>
