<template>
    <header>
        <section class="header__stageNavigation">
            <ul :class="{ invalid: !currentPatient.patientSerialNumber }">
                <li :class="($route.name === 'Home') ? 'current' : ''"><router-link to="/">症例一覧</router-link></li>
                <li :class="($route.name === 'Register') ? 'current' : ''"><a v-on:click="openBaseline(currentPatient.patientSerialNumber)">ベースライン</a></li>
                <li :class="($route.name === 'FirstAblation') ? 'current' : ''"><a v-on:click="openFirstAbl(currentPatient.patientSerialNumber)">初回ABL</a></li>
                <li :class="($route.name === 'AblationMedication') ? 'current' : ''">
                    <a v-if="currentPatient.firstAblationId === null" class="invalid">初回ABL処方</a>
                    <a v-else-if="currentPatient.internalMedicineId" v-on:click="openFirstAblMed(currentPatient.internalMedicineId)">初回ABL処方</a>
                    <a v-else v-on:click="createFirstAblMedication(currentPatient.firstAblationId)">初回ABL処方</a>
                </li>
                <li :class="($route.name === 'FollowingAblation') ? 'current' : ''">
                    追加ABL
                    <ol>
                        <li v-for="(ablationId, index) in currentPatient.followingAblations" v-bind:key="ablationId"><a v-on:click="openFollowAbl(ablationId)">{{index + 2}}回目</a></li>
                        <li v-on:click="requestFollowAblation">新規ABL</li>
                    </ol>
                </li>
                <li :class="($route.name === 'FollowUp') ? 'current' : ''"><a v-on:click="openFollowUp(currentPatient.patientSerialNumber)">フォロー外来</a></li>
            </ul>
        </section>
    </header>
</template>
<script>
import Mixin from '@/mixins/mixin'
export default {
    name: 'Header',
    methods: {
        openBaseline( id ) {
            if (this.currentPatient.patientSerialNumber) {
                this.$router.push({ name: 'Register', params: { patientId: id } });        
            }
        },
        openFirstAbl(id) {
            if (this.currentPatient.patientSerialNumber) {
                this.$router.push({ name: 'FirstAblation', params: { patientId: id } });
                //this.$store.dispatch( 'updatePatientIdAction' );
            }
        },
        openFirstAblMed(id) {
            if (this.currentPatient.patientSerialNumber) {
                this.$router.push({ name: 'AblationMedication', params: { medicationId: id } })
            }
        },
        openFollowAbl(id) {
            if (this.currentPatient.patientSerialNumber) {
                this.$router.push({ name: 'FollowingAblation', params: { followAblationId: id }})
            }
        },
        openFollowUp( id ) {
            if (this.currentPatient.patientSerialNumber) {
                this.$router.push({ name: 'FollowUp', params: { patientId: id } });
            }
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
header {
    vertical-align: middle;
    display: flex;
    align-items: center;
}
.header__stageNavigation > ul {
    padding-left: 1em;
    vertical-align: middle;
    margin: 0;
    white-space: nowrap;
    cursor: pointer;
}
.header__stageNavigation a {
    text-decoration: none;
    color: inherit;
}
.header__stageNavigation .invalid {
    color: #b6b6b6;
    cursor: default;
}
.header__stageNavigation > ul > li {
    display: inline-block;
    position: relative;
    overflow: visible;
    background-color: #fcfcfc;
    line-height: 1em;
    margin: 0;
    margin-right: calc((1.2rem + 20px) / 2 );
    padding: 10px 10px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px 0 0 5px;
}
.header__stageNavigation > ul > li.current,
.header__stageNavigation > ul > li.current:hover > ol {
    background-color: #e26061;
    color: #fcfcfc;
}
.header__stageNavigation > ul > li:after {
    content: "";
    display: block;
    position: absolute;
    left: 100%;
    top: 0;
    height: 0;
    width: 0;
    border: calc((1.2rem + 20px) / 2) solid transparent;
    border-left: calc((1.2rem + 20px) / 2) solid #fcfcfc;

}
.header__stageNavigation > ul > li:last-child {
    border-radius: 5px;
}
.header__stageNavigation > ul > li:last-child:after {
    display: none;
}
.header__stageNavigation > ul > li.current:after {
    border-left: calc((1.2rem + 20px) / 2) solid #e26061;
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
    top: calc( 100% - 5px );
    width: auto;
    padding: 0;
    padding-top: 5px;
    background-color: #fcfcfc;
    border-radius: 0 0 5px 5px;
}
.header__stageNavigation > ul > li:hover > ol > li {
    margin: 0;
    padding: 0.2em 0.5em;
}
</style>
