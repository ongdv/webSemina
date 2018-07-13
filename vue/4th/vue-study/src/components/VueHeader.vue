<template>
    <div class="header-container">
        {{msg}}
    </div>
</template>

<script>
export default {
  name: 'VueHeader',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<style scoped>
.header-container{
    width:100%;
    height:300px;
    background:aqua;
}
</style>
