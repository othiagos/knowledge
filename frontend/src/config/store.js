import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true,
    user: {
      name: 'User Mock',
      email: 'mock@mock.com'
    }
  },
  mutations: {
    toggleMenu(stage, isVisible) {
      if (isVisible === undefined) {
        stage.isMenuVisible =  !stage.isMenuVisible
      } else {
        stage.isMenuVisible = isVisible
      }
    }
  }
})