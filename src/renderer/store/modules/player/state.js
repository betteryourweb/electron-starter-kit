const state = {
  audio: {
    src: '',
    extensions: [
      '.mp3',
      '.m4a',
      '.ogg',
      '.oga',
      '.wav'
    ],
    files: []
  },
  videos: {
    src: '',
    extensions: [
      '.mp4',
      '.m4v',
      '.ogv',
      '.avi',
      '.mkv'
    ],
    files: []
  },
  player: '',
  playerType: '',
  playing: '',
  nextTrack: '',
  prevTrack: '',
  playlist: [],
  players: {
    audio: '',
    video: ''
  }
}
export default state
