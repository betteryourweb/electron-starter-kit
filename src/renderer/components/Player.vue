<template>
    <div class="Player">
        <audio ref="audio" :src="`file://${audio.src}`" v-if="isAudio"></audio>
        <!--<video ref="video" :src="audio.src" v-if="isVideo"></video>-->
        <div class="controls">
            <a href="#" @click.prevent="back">
                <i class="fa fa-backward"></i>
            </a>
            <a href="#" @click.prevent="play">
                <i class="fa fa-play"></i>
            </a>
            <a href="#" @click.prevent="pause">
                <i class="fa fa-pause"></i>
            </a>
            <a href="#" @click.prevent="stop">
                <i class="fa fa-stop"></i>
            </a>
            <a href="#" @click.prevent="forward">
                <i class="fa fa-forward"></i>
            </a>
        </div>
        <!--<div v-if="!isAudio && !isVideo">{{this.player.error}}</div>-->
    </div>
</template>
<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
      name: 'Player',
      data () {
        return {
          isVideo: false,
          isAudio: true
        }
      },
      props: [
        'file'
      ],
      methods: {
        ...mapActions('Player', [
          'load',
          'play',
          'stop',
          'back',
          'forward',
          'pause'
        ]),
        ...mapMutations({
          setPlayers: 'Player/setPlayers',
          setPlayer: 'Player/setPlayer'
        }),
        init () {
          this.setPlayer('audio')
          const players = {
            audio: this.$refs.audio
            // video: this.$refs.video
          }
          this.setPlayers(players)
          console.log({AUDIO: this.$refs.audio})
          this.$refs.audio.onended = () => {
            this.load(this.nextTrack).then(() => {
              setTimeout(() => this.play(), 10)
            })
          }
          console.log({players}, this.$meth, {player: this.player})
        }
      },
      computed: {
        ...mapGetters({
          getMusic: 'Player/getMusic',
          audio: 'Player/getAudio',
          player: 'Player/getPlayer',
          nextTrack: 'Player/nextTrack',
          prevTrack: 'Player/prevTrack'
        })
      },
      mounted () {
        this.init()
      }
    }
</script>
<style lang="scss">
 </style>
