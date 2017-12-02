<template>
    <div class="Music page">
        <side-bar :header="sidebar.header"
            :links="sidebar.links"
        ></side-bar>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        sidebar: {
          header: 'Music',
          links: [
            {
              name: 'Library',
              route: {name: 'MusicLibrary'}
            }
          ]
        }
      }
    }
  }
</script>
<style lang="scss">
</style>
