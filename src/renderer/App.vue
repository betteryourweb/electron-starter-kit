<template>
  <div id="app">
    <navbar-top></navbar-top>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavbarTop from '@/components/navigation/NavbarTop'
  export default {
    components: {
      NavbarTop
    },
    name: 'betteryourweb-electron-starter'
  }
</script>

<style lang="scss">
  /* CSS */
  body {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100vw;
    height: 100vh;
    background: $app-bg;
  }

</style>
