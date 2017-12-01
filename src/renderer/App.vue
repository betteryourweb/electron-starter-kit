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

<style>
  /* CSS */
</style>
