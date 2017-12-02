<template>
    <div class="SideBar">
        <div class="header" v-if="header">{{header}}</div>
        <div class="backBtn">
            <a href="#" @click.prevent="$router.go(-1)">
                <i class="fa fa-arrow-left"></i> Back
            </a>
        </div>
        <div class="Separator"></div>
        <div class="links" v-for="link in links">
            <router-link :to="link.route">{{link.name}}</router-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'SideBar',
    props: ['header', 'links'],
    mounted  () {
      console.log(this.$router)
    }
  }
</script>
<style lang="scss">
</style>
