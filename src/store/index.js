import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-type'
import createPersistedState  from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

const getters = {
    patientId: (state) => {
        return state.currentPatient.patientSerialNumber;
    },
    apiRoot: (state) => {
        return state.apiRoot;
    },
    loginToken: (state) => {
        return state.loginUser.token;
    },
    currentPatient: (state) => {
        return state.currentPatient;
    },
    loginUser: (state) => {
        return state.loginUser;
    },
    currentPage: (state) => {
        return state.currentPage;
    }
}

export default new Vuex.Store({
    state: {
        patientNumber: null,
        currentPatient: {
            patientSerialNumber: null,
            firstAblationId: null,
            internalMedicineId: null,
            followingAblations: []
        },
        currentPage: 1,
        loginUser: {
            id: null,
            hospital: null,
            token: null
        },
        apiRoot: "http://localhost:5000/api"
        //apiRoot: "https://abldb.med.kyoto-u.ac.jp/api"
    },
    mutations: {
        [ types.UPDATE_PATIENT_ID ]( state, patientSerialNumber ){
            state.patientNumber = patientSerialNumber;
        },
        [ types.UPDATE_CURRENT_PATIENT ]( state, currentPatient ){
            state.currentPatient = currentPatient;
        },
        [ types.UPDATE_USER ]( state, loginUser ){
            state.loginUser = loginUser;
        },
        [ types.UPDATE_CURRENT_PAGE ]( state, currentPage ){
            state.currentPage = currentPage;
        }
    },
    getters,
    actions: {
        async updatePatientIdAction( context ) {
            var currentPatient = {}
        await axios.get( context.state.apiRoot + '/patients/' + context.state.patientNumber, {
            headers: { "Authorization": "Bearer " + context.state.loginUser.token },
            data: {}
        })
        .then( response => {
            currentPatient = response.data;
        });
         context.commit( "UPDATE_CURRENT_PATIENT", currentPatient );
        }
    },
    modules: {
    },
    plugins: [createPersistedState(
        {
            key: 'abldb',
            paths: ['patientNumber', 'currentPatient', 'loginUser']
        }
    )]
})
