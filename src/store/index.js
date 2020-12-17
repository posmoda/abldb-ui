import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patientId: null,
    },
    mutations: {
        [types.UPDATE_PATIENT_ID](state, newId){
            state.patientId = newId;
        },
    },
    actions: {
    },
    modules: {
    }
})
