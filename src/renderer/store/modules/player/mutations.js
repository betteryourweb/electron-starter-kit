import util from '@/lib/utils'
import _ from 'lodash'
import path from 'path'

export default {
  musicFiles (state, files) {
    // this.getMusic()
  },
  getMusic (state, dir) {
    console.log({dir, util})
    state.audio.files = _.filter(util.walk(dir).files, file => {
      let isValid = _.filter(state.audio.extensions, ext => {
        isValid = false
        if (path.extname(file.name).toLowerCase() === ext) {
          return true
        }
        // return isValid
      })
      // console.log({isValid})
      if (isValid.toString()) return true
    })
    console.log('files', state.audio.files)
    console.log(state)
  },
  setPlayers (state, players) {
    state.players = players
    console.log(state.players)
  },
  setPlayer (state, type) {
    if (state.playerType === 'type') {
      return true
    }
    state.playerType = type
    state.player = state.players[state.playerType]
    console.log({players: state.players, player: state.player})
  },
  setAudioSrc (state, src) {
    state.playing = src
    state.audio.src = src
    // const tracks = {}
    _.each(state.playlist, (file, i) => {
      // console.log({src: state.audio.src, i})
      if (file.fullpath === state.audio.src) {
        state.nextTrack = (i < state.playlist.length - 1) ? state.playlist[i + 1] : state.playlist[0]
        state.prevTrack = (i > 0) ? state.playlist[i - 1] : state.playlist[state.playlist.length - 1]
        return false
      }
    })
    console.log({prev: state.prevTrack, next: state.nextTrack, playlist: state.playlist})
  },
  setPlaylist (state, playlist) {
    state.playlist = []
    if (!playlist) {
      state.playlist = state.audio.files
    } else {
      state.playlist = playlist
    }
  },
  isPlaying (state) {
    state.isPlaying = true
  },
  notPlaying (state) {
    state.isPlaying = false
  }
}
