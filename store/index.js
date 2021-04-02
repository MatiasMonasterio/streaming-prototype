export const state = () => ({
    bgNoIndex: true,
    loginPage: false
})

export const mutations = {
    bgTransparentToggle( state, value ) {
        state.bgNoIndex = value
    },
    inLoginPage( state, value ) {
        state.loginPage = value
    }
}

export const actions = {
    bgTransparentToogleAction({ commit }, value ) {
        commit( 'bgTransparentToggle', value )
    },
    inLoginPageAction({ commit }, value ) {
        commit('inLoginPage', value)
    }
}