import {remote} from 'electron'
const win = remote.getCurrentWindow()

const actions = {}
const mutations = {
  fullscreen (state) {
    console.log('Maximized', {isMax: state.isMaximized})
    state.isFullscreen = true
    win.setFullScreen(true)
  },
  restoreFullscreen (state) {
    console.log('Maximized', {isMax: state.isMaximized})
    state.isFullscreen = false
    win.setFullScreen(false)
  },
  maximize (state) {
    console.log('Maximized', {isMax: state.isMaximized})
    state.isMaximized = true
    win.maximize()
  },
  minimize (state) {
    console.log('Minimized', {isMax: state.isMaximized})
    win.minimize()
  },
  restore (state) {
    console.log('restored', {isMax: state.isMaximized})
    state.isMaximized = false
    win.restore()
  },
  close (state) {
    console.log('closed', {isMax: state.isMaximized})
    win.close()
  }
}
/**
 * @type {{isMaximized(*): *}}
 */
const getters = {
  isMaximized (state) {
    return state.isMaximized
  },
  isFullscreen (state) {
    return state.isFullscreen
  }
}
const state = {
  isMaximized: false,
  isFullscreen: false
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
