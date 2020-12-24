<template>
    <div class="pageInformation">
        <dl>
            <dt>症例番号</dt>
            <dd>{{ patientId }}</dd>
            <dt>もくじ</dt>
            <dd>{{ contents }}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    name: 'PageInformation',
    props: [
        'contents'
    ],
    computed: {
        patientId() {
            return this.$store.getters.patientId;
        }
    }
}
</script>

