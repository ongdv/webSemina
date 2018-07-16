<template>
    <div class="input-group mb-3">
      <input v-on:keypress='addInputEnter' v-model="newTodo" type="text" class="form-control" placeholder="할일 입력" aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
        <button v-on:click="addInputData" class="btn btn-outline-secondary" type="button" id="button-addon2">할일</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'VueInput',
  data () {
    return {
      newTodo: ""
    }
  },
  methods: {
    addInputData () {
      let value = {
        id: "ong",
        todo: this.newTodo,
        complete: false
      }
      this.$emit('addTodo', value)
      this.newTodo = ""
    },
    addInputEnter () {
      if(window.event.keyCode === 13){
        if(this.newTodo !== ""){
          this.addInputData();
          return;
        }
        alert('요소없음')
      }
    }
  }
}
</script>

<style>

</style>
