<template>
  <div id="app">
    <vue-header
      @open='open'
    />
    <router-view
      @close='close'
    />
    <vue-footer/>
    <vue-menu
     @close='close'
     v-if='display'
    />
  </div>
</template>

<script>
import VueHeader from '@/components/VueHeader'
import VueFooter from '@/components/VueFooter'
import VueMenu from '@/components/VueMenu'
export default {
  name: 'App',
  components: {
    vueHeader: VueHeader,
    vueFooter: VueFooter,
    vueMenu: VueMenu
  },
  data () {
    return {
      display: false
    }
  }
  ,
  methods: {
    open () {
      this.display = true;
    },

    close () {
      this.display = false;
    },

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
