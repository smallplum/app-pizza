const state = {
    isLogin: false
}
const getters = {
      isLogin : state => state.isLogin
}
const mutations = {
     loginStatus(state, aaa) {
       state.isLogin = aaa
     }
}
const actions = {
    setLogin({
      commit
    }, aaa) {
      commit("loginStatus", aaa)
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}