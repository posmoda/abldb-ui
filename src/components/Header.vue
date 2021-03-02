<template>
    <header>
        <h1><a href="/">アブレーションレジストリー</a></h1>
        <section class="header__user">
            <p>ユーザー名</p>
            <button>ログアウト</button>
        </section>
        <section class="header__stageNavigation">
            <ul>
                <li><router-link to="/">症例一覧</router-link></li>
                <li><a v-on:click="openBaseline">ベースライン</a></li>
                <li><a v-on:click="openFirstAbl">初回ABL</a></li>
                <li>
                    <a v-if="currentPatient.internalMedicineId" v-on:click="openFirstAblMed(currentPatient.internalMedicineId)">初回ABL処方</a>
                    <a v-else v-on:click="createFirstAblMedication(currentPatient.firstAblationId)">初回ABL処方</a>
                </li>
                <li>
                    追加ABL
                    <ol>
                        <li v-for="ablation in currentPatient.followingAblations" v-bind:key="ablation"><a v-on:click="openFollowAbl(ablation)">hoge</a></li>
                        <li v-on:click="requestFollowAblation">新規ABL</li>
                    </ol>
                </li>
                <li>
                    フォロー外来
                    <ol>
                        <li>hoge</li>
                    </ol>
                </li>
            </ul>
        </section>
    </header>
</template>
<script>
import Mixin from '@/mixins/mixin'
export default {
    name: 'Header',
    methods: {
        openBaseline() {
            this.$router.push( 'register', true, false );
        },
        openFirstAbl() {
            this.$router.push( 'first_ablation', true, false );
        },
        openFirstAblMed(id) {
            this.$router.push({ name: 'AblationMedication', params: { medicationId: id } })
        },
        openFollowAbl(id) {
            this.$router.push({ name: 'FollowingAblation', params: { followAblationId: id }})
        }
    },
    computed: {
        currentPatient: function() {
            return this.$store.getters.currentPatient;
        }
    },
    mixins: [Mixin]
}
</script>
<style scoped>
.header__stageNabigation > ul {

}
.header__stageNavigation > ul > li {
    display: inline-block;
    position: relative;
    overflow: visible;
}
.header__stageNavigation > ul > li > ol {
    display: none;
}
.header__stageNavigation > ul > li:hover > ol {
    display: block;
    position: absolute;
}
</style>
