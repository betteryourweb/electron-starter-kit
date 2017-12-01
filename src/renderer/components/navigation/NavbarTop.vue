<template>
  <div class="NavbarTop">
    <div class="brand"></div>
    <div class="menuItems">
      <a href="#" class="windowControl" @click.prevent="miniize">
        <i class="fa fa-window-minimize"></i>
      </a>
      <a href="#" class="windowControl" @click.prevent="maximize">
        <i class="fa fa-window-maximize"></i>
      </a>
      <a href="#" class="windowControl" @click.prevent="restore">
        <i class="fa fa-window-restore"></i>
      </a>
      <a href="#" class="windowControl" @click.prevent="close">
        <i class="fa fa-times"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    data () {
      return {
      }
    },
    created () {
    },
    conputed: {
      ...mapGetters({
        isMaximized: 'Navigation/isMaximized'
      })
    },
    methods: {
      ...mapMutations([
        'Navigation/minimize',
        'Navigation/maximize',
        'Navigation/restore',
        'Navigation/close'
      ])
    }
  }
</script>

<style lang="scss">
  .NavbarTop {
    position: absolute;
    width: 100vw;
    height: $navbarTop-height;
    background: $navbarTop-bg-color;
    top: 0;
    margin: 0;
    padding: 0;
    left: 0;
    color:$navbarTop-font-color;
    a {
      color: $navbarTop-icon-color;
    }
  }
</style>
