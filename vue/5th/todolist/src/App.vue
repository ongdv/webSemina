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
  },
  methods: {
    success () {
      this.$toast(this.$refs.success, 'Wonderful!', 'success')
    },

    warning () {
      this.$toast(this.$refs.warning, 'Attention!', 'warning', 3000)
    },

    info () {
      this.$toast(this.$refs.info, 'Information!', 'info', 1000, 100)
    },

    error () {
      this.$toast(this.$refs.error, 'Oops!', 'error', 2000, 500, 600)
    }
  }
}
</script>

<style>

</style>
