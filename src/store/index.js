import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    increment(state){
      state.count++
    },
    incrementAsync (state) {
      setTimeout(() => {
        state.count++
      }, 1000)
    }
  },
  actions: {
    increment({commit}){
      commit('increment')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
  }
})
