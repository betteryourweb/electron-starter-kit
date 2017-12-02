import _ from 'lodash'

export default {
  getVideosFromDir ({dispatch, commit, getters}, dir) {
    const dirs = []
    const tmpFilelist = commit('readdir', dir)
    _.each(tmpFilelist, file => {
      dirs.push(file)
    })
  },
  play ({state, commit}) {
    commit('isPlaying')
    state.player.play()
  },
  pause ({state, commit}) {
    commit('notPlaying')
    state.player.pause()
  },
  stop ({state, commit, dispatch}) {
    commit('notPlaying')
    state.player.pause()
    state.player.currentTime = 0
  },
  forward ({state, commit, dispatch}) {
    commit('isPlaying')
    console.log('nextTrack', state.nextTrack)
    dispatch('load', state.nextTrack).then(() => {
      setTimeout(() => dispatch('play'), 10)
    })
  },
  back ({state, commit, dispatch}) {
    commit('isPlaying')
    dispatch('load', state.prevTrack).then(() => {
      setTimeout(() => dispatch('play'), 10)
    })
  },
  load ({state, commit}, item) {
    if (state.playlist.length === 0) commit('setPlaylist', state.audio.files)
    commit('setAudioSrc', item.fullpath)
    console.log(state.audio, item, state)
    let loaded = state.player.load()
    console.log({loaded, playlist: state.playlist})
    return loaded
  },
  setPlayer (state, type) {
    console.log({playerType: type})
    state.player = state.players[type]
  },
  setTags (state, file) {
    //
  }
}
