import Vue    from 'vue'
import Vuex   from 'vuex'
import window from './modules/window'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    window
  },
  strict: debug
})