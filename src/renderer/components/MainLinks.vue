<template>
    <div class="MainLinks">
        <div class="link" v-for="link in links">
            <router-link :to="link.route">{{link.name}}</router-link>
        </div>
    </div>
</template>
<script>
  export default {
    props: ['links'],
    data () {
      return {}
    }
  }
</script>
<style lang="scss">

</style>
