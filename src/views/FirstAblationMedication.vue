<template>
    <section class="firstAblationMedication">
        <h1>初回アブレーション内服薬</h1>
        <section class="firstAblationMedication__content">
            <h2>内服薬</h2>
            <fieldset>
                <legend>BOX完成</legend>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__true" value="true" v-model="firstAblationMedication.completedBox"><span>はい</span></label>
                <label><input type="radio" name="content__completedBox" id="content__completedBox__false" value="false" v-model="firstAblationMedication.completedBox"><span>いいえ</span></label>
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
