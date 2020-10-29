import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    user:{
      name: "",
      age: "",
      address: "",
      job: "",
    },
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
    increment (state) {
      state.count++
    },
    addUser(state,user){
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
