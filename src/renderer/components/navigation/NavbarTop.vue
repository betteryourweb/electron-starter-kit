<template>
  <div class="NavbarTop">
    <div class="Top">
      <div class="title">{{windowTitle}}</div>
      <div class="menuItems">
        <a href="#" class="windowControl" @click.prevent="fullscreen" v-if="!isFullscreen">
          <i class="fa fa-expand"></i>
        </a>
        <a href="#" class="windowControl" @click.prevent="restoreFullscreen" v-if="isFullscreen">
          <i class="fa fa-compress"></i>
        </a>
        <a href="#" class="windowControl" @click.prevent="minimize">
          <i class="fa fa-window-minimize"></i>
        </a>
        <a href="#" class="windowControl" @click.prevent="maximize" v-if="!isMaximized && !isFullscreen">
          <i class="fa fa-window-maximize"></i>
        </a>
        <a href="#" class="windowControl" @click.prevent="restore" v-if="isMaximized && !isFullscreen">
          <i class="fa fa-window-restore"></i>
        </a>
        <a href="#" class="windowControl" @click.prevent="close">
          <i class="fa fa-times"></i>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters, mapState} from 'vuex'
  // import Player from '@/components/Player'

  export default {
    computed: {
      ...mapState({
        windowTitle: state => state.App.title

      }),
      ...mapGetters({
        isMaximized: 'Navigation/isMaximized',
        isFullscreen: 'Navigation/isFullscreen'
      })
    },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      ...mapMutations({
        restoreFullscreen: 'Navigation/restoreFullscreen',
        fullscreen: 'Navigation/fullscreen',
        minimize: 'Navigation/minimize',
        maximize: 'Navigation/maximize',
        restore: 'Navigation/restore',
        close: 'Navigation/close'
      })
    },
    mounted () {
      console.log({self: this})
    }
  }
</script>

<style lang="scss">
</style>
