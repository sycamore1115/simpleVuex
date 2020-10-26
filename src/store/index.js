import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "小明",
    age: 23,
    address: "广东",
    job: "建筑师",
    phone:"13521452301",
    desc:['帅哥','美女'],
  },
  getters: {
    phoneShow:state =>{
      return state.phone.substring(0, 3)+ "****" + state.phone.substring(7,11)
    },
    sexShow:state=>{
      return sex=>{
        return state.desc[sex]
      }
    }
  },
  mutations: {
    increment(state){
      state.age++
    },
    addUser(state,user){
      state.name = user.name;
    }
  },
  actions: {
  },
  modules: {
  }
})
