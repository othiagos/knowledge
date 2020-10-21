import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuVisible: true
  },
  mutations: {
    toggleMenu(stage, isVisible) {
      if (isVisible === undefined) {
        stage.isMenuVisible =  !stage.isMenuVisible
      } else {
        stage.isMenuVisible = isVisible
      }
      console.log('toogle is ' + stage.isMenuVisible)
    }
  }
})