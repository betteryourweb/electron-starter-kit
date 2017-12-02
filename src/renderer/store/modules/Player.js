import state from './player/state'
import getters from './player/getters'
import actions from './player/actions'
import mutations from './player/mutations'

const Player = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default Player
