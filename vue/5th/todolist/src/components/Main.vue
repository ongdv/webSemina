<template>
  <div>
    <span class="alert" ref='alert'></span>
    <vue-input @addTodo="addInputData"/>
    <vue-lists v-for="(todo, index) in todoLists"
               v-bind:key="index"
               v-bind:index="index"
               v-bind:title="todo.todo"
               v-bind:complete="todo.complete"
               @remove="remove"
               @complete="complete"
    />
  </div>
</template>

<script>
import VueLists from '@/components/VueLists'
import VueInput from '@/components/VueInput'
export default {
  name: 'Main',
  components: {
    vueLists: VueLists,
    vueInput: VueInput
  },
  data () {
    return {
      newTodo: '',
      todoLists: []
    }
  },
  methods: {
    addInputData (data) {
      this.todoLists.push(data)
      this.$toast(this.$refs.alert, 'success!', 'success')
    },
    remove (index) {
      this.todoLists.splice(index, 1)
    },
    complete (index) {
      this.todoLists[index].complete = "complete"
    },
    getTodoLists () {
      let id = "ong"
      this.$http.get(`http://10.1.72.252:3000/todo/${id}`)
      .then((result) => {
        console.log(result);
      })
    }
  },
  created () {
    this.getTodoLists();
  },
  updated() {
    this.getTodoLists();
  },
}
</script>

<style>
.todo-item-container{
  width:100%;
  height:50px;
  padding:0 10px;
  display:flex;
  align-items: center;
  margin-bottom: 5px;
}

.todo-item-container div {
  padding:0px 5px;
}

.todo-item-container div:nth-child(1){
  color: gray;
}

.todo-item-container div:nth-child(2){
  flex: auto;
}

.todo-item-container div:nth-child(3){
  text-align: end;
  color: coral;
}
.complete{
  color:dodgerblue;
}
.alert{
  right:5%;
  position: absolute;
}
@media screen and (max-width: 800px){
  .alert{
    right:30%;
  }
}
</style>
