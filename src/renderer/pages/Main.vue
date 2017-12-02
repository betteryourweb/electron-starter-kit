<template>
    <div id="Main" class="Main">
        <main-links :links="links"></main-links>
        {{links}}
    </div>
</template>

<script>
  import MainLinks from '@/components/MainLinks'
  export default {
    components: {
      MainLinks
    },
    data () {
      return {
        links: [
          {
            name: 'Music',
            route: {
              name: 'Music'
            }
          },
          {
            name: 'Video',
            route: {
              name: 'Video'
            }
          }
        ]
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
