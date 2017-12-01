<template>
  <div class="NavbarTop">
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
      <a href="#" class="windowControl" @click.prevent="maximize" v-if="!isMaximized">
        <i class="fa fa-window-maximize"></i>
      </a>
      <a href="#" class="windowControl" @click.prevent="restore" v-if="isMaximized">
        <i class="fa fa-window-restore"></i>
      </a>
      <a href="#" class="windowControl" @click.prevent="close">
        <i class="fa fa-times"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters, mapState} from 'vuex'

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
  .NavbarTop {
    -webkit-user-select: none;
    -ms-overflow-style: scrollbar;
    -webkit-app-region:drag;
    position: absolute;
    width: 100vw;
    height: $navbarTop-height;
    background: $navbarTop-bg-color;
    top: 0;
    margin: 0;
    padding: 0;
    left: 0;
    color:$navbarTop-font-color;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    display: flex;
    .title {
      color: $navbarTop-font-color;
      padding-left: 10px;
    }
    .menuItems {
      a {
        -webkit-app-region: no-drag;
        color: $navbarTop-icon-color;
        width: $navbarTop-height;
        height: $navbarTop-height;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &:hover {
          color: darken($navbarTop-icon-color, 20%);
          background-color: lighten($navbarTop-bg-color, 25%);
        }
      }
    }

  }
</style>
