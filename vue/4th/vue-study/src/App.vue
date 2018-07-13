<template>
  <div id="app">
    <vue-header/>
    <router-view/>
    <vue-footer/>
  </div>
</template>

<script>
import VueHeader from '@/components/VueHeader'
import VueFooter from '@/components/VueFooter'
export default {
  name: 'App',
  components: {
    vueHeader: VueHeader,
    vueFooter: VueFooter
  }
}
</script>

<style>
div{
    font-size:30px;
    background: #000;
    color:aqua;
}
</style>
