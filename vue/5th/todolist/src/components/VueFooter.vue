<template>
    <div class="footer-container">
        {{msg}}
    </div>
</template>

<script>
export default {
  name: 'VueFooter',
  data () {
    return {
      msg: 'Footer'
    }
  }
}
</script>

<style scoped>
.footer-container{
    width:100%;
    height:300px;
    background: plum;
}
</style>
