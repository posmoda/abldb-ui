import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-type'

Vue.use(Vuex)

const getters = {
    patientId: (state) => {
        return state.patientId;
    }
}

export default new Vuex.Store({
    state: {
        patientId: 12345678,
        pageContents: 'test'
    },
    mutations: {
        [ types.UPDATE_PATIENT_ID ](state, newId){
            state.patientId = newId;
        },
        [ types.UPDATE_PAGE_CONTENTS ]( state, contents ){
            state.pageContents = contents;
        }
    },
    getters,
    actions: {
    },
    modules: {
    }
})
