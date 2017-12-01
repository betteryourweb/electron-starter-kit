import {remote} from 'electron'
const win = remote.getCurrentWindow()

const actions = {}
const mutations = {
  maximize (state) {
    this.isMaximized = true
    win.maximize()
  },
  minimize (state) {
    win.minimize()
  },
  restore (state) {
    this.isMaximized = false
    win.maximize()
  },
  close (state) {
    win.close()
  }
}
/**
 * @type {{isMaximized(*): *}}
 */
const getters = {
  isMaximized (state) {
    return state.isMaximized
  }
}
const state = {
  isMaximized: false
}

export default {
  namespaces: true,
  state,
  getters,
  mutations,
  actions
}
