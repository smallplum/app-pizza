const state = {
    currentUser: null,
    
}
const getters = {
     currentUser : state => state.currentUser
}
const mutations = {
     //更改用户的状态信息
      userStatus(state, user){
        //console.log(state.isLogin)console.log(state.isLogin)
       if (user) {
         state.isLogin = true
         state.currentUser = user
         
       } else { 
         state.currentUser = null
         state.isLogin = false
       }
     }
}
const actions = {
  setUser({commit},user){
    commit("userStatus", user)
  },
  
}
export default {
  state,
  getters,
  mutations,
  actions
}