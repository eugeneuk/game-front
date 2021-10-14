export const state = () => ({
    token: null
})

// Setters
export const mutations = {
    setToken(state, token){
        state.token = token
    },
    clearToken(state){
        state.token = null
    }
}

// Getters
export const getters = {
    hasToken: s => !!s.token,
    showToken:s=>s.token
}

//Actions
export const actions = {
    login({commit}){
        commit('setToken', 'sometoken')
    },
    logout({commit}){
        commit('clearToken')
    },
}