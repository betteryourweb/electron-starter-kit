export default {
  getAudio (state) {
    return state.audio
  },
  getMusicFiles (state) {
    return state.audio.files || []
  },
  getPlayer (state) {
    return state.audio.player
  },
  nextTrack (state) {
    return state.nextTrack
  },
  prevTrack (state) {
    return state.prevTrack
  }
}
