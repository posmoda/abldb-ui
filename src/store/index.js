import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-type'

Vue.use(Vuex)

const getters = {
    patientId: (state) => {
        return state.patientId;
    },
    apiRoot: (state) => {
        return state.apiRoot;
    }
}

export default new Vuex.Store({
    state: {
        patientId: null,
        loginUser: {
            id: "testUser",
            token: "testToken"
        },
        apiRoot: "http://localhost:5000/api"
    },
    mutations: {
        [ types.UPDATE_PATIENT_ID ]( state, newId ){
            state.patientId = newId;
        },
        [ types.UPDATE_USER ]( state, userInfo ){
            state.loginUser = userInfo;
        }
    },
    getters,
    actions: {
    },
    modules: {
    }
})
