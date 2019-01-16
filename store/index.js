// import Vue from 'vue'
import Vuex from 'vuex'
let store = () => new Vuex.Store({
    state: {
        token: '',
        userId: ''
    },
    mutations: {
        setToken (state,token) {
            state.token = token
        },
        setUserId (state,userId) {
            state.userId = userId
        }
    }    
})
export default store