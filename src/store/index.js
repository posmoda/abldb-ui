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
        loginUser: {
            id: "testUser",
            hospital: "TestHospital",
            token: "testToken"
        },
        apiRoot: "http://localhost:5000/api"
        //apiRoot: "https://www.postmoderns.info/abldb-api"
    },
    mutations: {
        [ types.UPDATE_PATIENT_ID ]( state, patientSerialNumber ){
            state.patientNumber = patientSerialNumber;
        },
        [ types.UPDATE_CURRENT_PATIENT ]( state, currentPatient ){
            state.currentPatient = currentPatient;
        },
        [ types.UPDATE_USER ]( state, userInfo ){
            state.loginUser = userInfo;
        }
    },
    getters,
    actions: {
        async updatePatientIdAction( context ) {
            var currentPatient = {}
        await axios
        .get( context.state.apiRoot + '/patients/' + context.state.patientNumber )
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
