<template>
    <header>
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
h1 {
    margin: 0;
}
.header__stageNavigation > ul {
    padding-left: 1em;
}
.header__stageNavigation > ul > li {
    display: inline-block;
    position: relative;
    overflow: visible;
    background-color: #fcfcfc;
    line-height: 1em;
    margin: 0;
    margin-right: calc((1.2rem + 10px) / 2 );
    padding: 5px 10px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px 0 0 5px;
}
.header__stageNavigation > ul > li:after {
    content: "";
    display: block;
    position: absolute;
    left: 100%;
    top: 0;
    height: 0;
    width: 0;
    border: calc((1.2rem + 10px) / 2) solid transparent;
    border-left: calc((1.2rem + 10px) / 2) solid #fcfcfc;

}
.header__stageNavigation > ul > li > ol {
    display: none;
    list-style: none;
    font-size: 1rem;
}
.header__stageNavigation > ul > li:hover > ol {
    display: block;
    position: absolute;
    left: 0;
    width: auto;
    padding: 0;
    background-color: #fcfcfc;
    border-radius: 0 0 5px 5px;
}
.header__stageNavigation > ul > li:hover > ol > li {
    margin: 0;
    padding: 0.2em 0.5em;
}
</style>
