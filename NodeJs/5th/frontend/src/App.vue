<template>
  <div id="app" style="height:100%;">

    <!-- ===== Nav bar ===== -->
    <nav-bar/>
    
    <!-- ===== Contents ===== -->
    <router-view></router-view>

  </div>
</template>

<script>
import { NavBar } from './components/commons'

import { NBar } from './components/UIComponents'
export default {
  name: 'App',
  components :{
    NavBar,
    NBar
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
