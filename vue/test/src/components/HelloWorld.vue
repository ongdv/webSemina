<template>
  <div>
    <div>Main</div>
    <div>
      <router-link to='register'>회원가입</router-link>
      <router-link to='todoList'>게시판</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    move () {
      
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
