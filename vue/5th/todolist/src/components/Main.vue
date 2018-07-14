<template>
  <div>
    <span class="alert" ref='alert'></span>
    <div class="input-group mb-3">
      <input v-model='newTodo' v-on:keypress='addTodoEnter' type="text" class="form-control" placeholder="할일 입력" aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
        <button v-on:click='addTodo' class="btn btn-outline-secondary" type="button" id="button-addon2">추가</button>
      </div>
    </div>
    <div>
      
      <div class="todo-item-container" v-for='todo in todoLists' :key='todo.num'>
        <div>
          <span class="fas fa-check" v-bind:class='[todo.complete]' v-on:click='completeTodo(todo)'></span>
        </div>
        <div>
          {{todo.item}}
        </div>
        <div>
          <span class="fas fa-trash-alt" v-on:click='deleteTodo(todo)'></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      newTodo: '',
      todoLists: []
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo === '') {
          alert('요소없음')
          return;
      }
      let value = {
        complete: '',
        item: this.newTodo
      }
      this.todoLists.push(value)
      this.setTodos(value.item)
      console.log(value)
      this.newTodo = ""
      this.$toast(this.$refs.alert, 'Success!', 'success')
    },
    addTodoEnter () {
      if (window.event.keyCode === 13) {
        this.addTodo()
      }
    },
    completeTodo (i) {
      if (i.complete === 'complete') {
        i.complete = ''
      }else{
        i.complete='complete'
      }
    },
    deleteTodo (i) {
      for(let j = 0; j <= this.todoLists.length; j++){
        if (this.todoLists[j].item === i.item) {
          this.$http.post("http://192.168.64.184:4444/todo", {item:this.todolists[j].num})
          .then((result) => {
            this.todoLists.splice(j, 1)
          })
          break
        }
      }
    },
    getTodos () {
      this.$http.get("http://192.168.64.184:4444/list")
      .then((result) => {
        console.log(result);
        if (result['success'] === 0) {
          alert(result['err']);
          return;
        }
        this.todoLists = result['data']['data'];
      })
    },
    setTodos (todo) {
      console.log(todo)
      this.$http.post("http://192.168.64.184:4444/todo", {item:todo})
      .then((result) => {
        console.log(result)
      })
    }
  },
  created() {
    this.getTodos();
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
