<template>
  <div class="index-container">
    <vue-Input/>
  </div>
</template>

<script>
import VueInput from '@/components/VueInput'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Vue.js'
    }
  },
  components: {
    vueInput: VueInput
  }
}
</script>

<style>
.index-container{
  width:100%;
  height:300px;
}
</style>
