<template>
    <div class="pageInformation">
        <dl>
            <dt>症例番号</dt>
            <dd>{{ patientId }}</dd>
            <dt>もくじ</dt>
            <dd>
                <ul>
                    <li v-for="(items, chapter) in contents" :key="chapter">{{ chapter }}
                        <ul>
                            <li v-for="item in items" :key="item.key">{{ item }}</li>
                        </ul>
                    </li>
                </ul>
            </dd>
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
<style scoped>
div.pageInformation {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: white;
}
</style>
