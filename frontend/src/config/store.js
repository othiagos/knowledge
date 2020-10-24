import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: false,
    user: null
  },
  mutations: {
    toggleMenu(stage, isVisible) {
      if (!stage.user) {
        stage.isMenuVisible = false
        return
      }
      if (isVisible === undefined) {
        stage.isMenuVisible =  !stage.isMenuVisible
      } else {
        stage.isMenuVisible = isVisible
      }
    },
    setUser(state, user) {
      state.user = user
      if (user) {
        axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
        state.isMenuVisible = true
      } else {
        delete axios.defaults.headers.common['Authorization']
        state.isMenuVisible = false
      }
    }
  }
})