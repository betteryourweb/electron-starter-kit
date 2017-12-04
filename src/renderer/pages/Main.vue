<template>
    <div id="Main" class="Main">
        <!-- <main-links :links="links"></main-links> -->
        <div class="title">
          <h1>
            BetterYourWeb Electron Starter Kit
          </h1>
          <div class="links">
            <div class="link">
              <a href="https://github.com/betteryourweb/electron-starter-kit"
                @click.prevent="open('https://github.com/betteryourweb/electron-starter-kit')">
                <i class="fa fa-gihub"></i> Github
              </a>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
  // import MainLinks from '@/components/MainLinks'
  export default {
    // components: {
    //   MainLinks
    // },
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
</style>
