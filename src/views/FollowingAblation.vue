<template>
    <section class="followingAblation">
        <h1>初回アブレーション内服薬</h1>
        <section class="followingAblation__medication">
            <h2>退院時内服薬</h2>
            <p class="form__row">
                <label for="medication__doacAmount">施行日</label>
                <input type="date" name="basic__doacAmount" id="basic__doacAmount" v-model.number="followingAblation.doacAmount">
            </p>
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            followingAblation: {
            }
        }
    }
}
</script>
