<template>
  <div>
    <div class="header-container">
      <div class="header-item-container">
        <span class="fas fa-bars">
        </span>
      </div>
      <div class="header-item-container">
        <span>TodoList</span>
      </div>
      <div class="header-item-container">
        
      </div>
    </div>
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
    height:100%;
    background: #4a88ef;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.header-item-container{
  width: 100%;
  padding: 0px 5px;
}

.header-item-container:nth-child(1){
  color: white;
  cursor: pointer;
}

.header-item-container:nth-child(2){
  text-align: center;
  color:white;
  font-weight:bold;
}
</style>
