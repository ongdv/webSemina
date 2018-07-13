<template>
  <div class="wrapper">
    <div class='header'>
      <h1>TodoList</h1>
      <input type="text" id='todo' placeholder="할일 입력" value='' v-on:keypress='addEnterKeyDown'>
      <span><button class='add' v-on:click='addTodo'>추가</button></span>
    </div>
    <div class='todoList'>
      <div class="todoListContents" v-for='item in lists' :key='item.num' v-on:click='completeTodo(item.num)'>
          <p class='printContents' v-on:click='modify(item.num)'>{{item.contents}}</p>
          <p class='modifyWrap'><input type="text" class='modifyContents' value='' v-on:blur='modifyStop(item.num)' v-on:keypress='modifyEnterKeyDown(item.num)'></p>
          <p class='delWrap'><button class='delBtn' v-on:click='deleteTodo(item.num)'>삭제</button></p>
          <p class='printDate'>{{item.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      counter: 1,
      lists: [
        {num: 0, contents: 'Vue.js 공부하기', date: '2018-07-06', complete: 0}
      ]
    }
  },
  methods: {
    addTodo () {
      this.counter++
      var todo = document.getElementById('todo')
      if (todo.value.length === 0) {
        alert('요소 없음')
        return
      }
      let dd = new Date()
      let y = dd.getFullYear()
      let m = dd.getMonth() + 1
      let d = dd.getDate()
      let ddd = y + '-0' + m + '-' + d
      this.lists.push({
        num: this.counter - 1,
        contents: todo.value,
        date: ddd
      })
      todo.value = ''
    },
    deleteTodo (i) {
      this.counter--
      if (this.counter === 0) {
        this.lists.pop()
        return
      }
      for (let j = 0; j <= this.lists.length; j++) {
        if (this.lists[j].num === i) {
          this.lists.splice(j, 1)
          return
        }
      }
    },
    addEnterKeyDown () {
      if (window.event.keyCode === 13) {
        this.addTodo()
      }
    },
    modify (i) {
      event.stopPropagation()
      let j
      for (j = 0; j <= this.lists.length; j++) {
        if (this.lists[j].num === i) {
          break
        }
      }
      let obj = document.getElementsByClassName('printContents')[j]
      let modifyWrap = document.getElementsByClassName('modifyWrap')[j]
      let inputObj = document.getElementsByClassName('modifyContents')[j]
      obj.style.display = 'none'
      obj.style.position = 'absolute'
      modifyWrap.style.display = 'block'
      modifyWrap.style.position = 'relative'
      inputObj.style.display = 'block'
      inputObj.value = obj.innerHTML
      inputObj.focus()
    },
    modifyEnterKeyDown (i) {
      let j
      for (j = 0; j <= this.lists.length; j++) {
        if (this.lists[j].num === i) {
          break
        }
      }
      let obj = document.getElementsByClassName('printContents')[j]
      let modifyWrap = document.getElementsByClassName('modifyWrap')[j]
      let inputObj = document.getElementsByClassName('modifyContents')[j]
      if (window.event.keyCode === 13) {
        this.lists[j].contents = inputObj.value
        obj.innerHTML = inputObj.value
        obj.style.display = 'block'
        obj.style.position = 'relative'
        modifyWrap.style.display = 'none'
        modifyWrap.style.position = 'absolute'
        inputObj.style.display = 'none'
        inputObj.blur()
      }
    },
    modifyStop (i) {
      let j
      for (j = 0; j <= this.lists.length; j++) {
        if (this.lists[j].num === i) {
          break
        }
      }
      let obj = document.getElementsByClassName('printContents')[j]
      let modifyWrap = document.getElementsByClassName('modifyWrap')[j]
      let inputObj = document.getElementsByClassName('modifyContents')[j]
      this.lists[j].contents = inputObj.value
      obj.innerHTML = inputObj.value
      obj.style.display = 'block'
      obj.style.position = 'relative'
      modifyWrap.style.display = 'none'
      modifyWrap.style.position = 'absolute'
      inputObj.style.display = 'none'
    },
    completeTodo (i) {
      let j
      for (j = 0; j <= this.lists.length; j++) {
        if (this.lists[j].num === i) {
          break
        }
      }
      let obj = document.getElementsByClassName('todoListContents')[j]
      if (this.lists[j].complete === 0) {
        this.lists[j].complete = 1
        obj.style.opacity = '0.4'
        return
      }
      obj.style.opacity = '1'
      this.lists[j].complete = 0
    }
  }
}
</script>

<style scoped>
.wrapper{
    width:40%;
    height:700px;
    margin:0 auto;
    border:1px solid lightgray;
    border-radius: 10px 10px 10px 10px;
    margin-top:100px;
    overflow:hidden;
}
.header{
    width:100%;
    height:100px;
    margin: 0 auto;
    margin-top:30px;
    text-align: center;
}
#todo{
    width:75%;
    height:50px
}
.add{
    width:10%;
    height:55px;
}
.todoList{
  width: 100%;
  height: 580px;
  margin:0 auto;
  text-align: center;
  overflow:auto;
}
.todoListContents{
  width:90%;
  height:60px;
  font-size: 16px;
  border:1px solid lightslategray;
  border-radius: 5px 5px 5px 5px;
  display:inline-block;
}
.todoListContents > p{
  display:inline-block;
}
.printContents{
  width:55%;
  height: 60px;
  line-height: 60px;
  float: left;
  padding:0 10px;
}
.modifyWrap{
  width:55%;
  height:60px;
  line-height:60px;
  float: left;
  padding:0 10px;
  position:absolute;
  display:none;
}
.modifyContents{
  width:100%;
  height: 45px;
  padding: 5px 0;
  font-size:16px;
  text-align: center;
  display:none;
}
.delWrap{
  width:10%;
  height:60px;
  line-height: 60px;
  float:right;
  padding:0 10px;
  position:relative;
}
.printDate{
  width: 25%;
  height:60px;
  line-height: 60px;
  float: right;;
}
.delBtn{
  width:100%;
  height:30px;
  border-radius: 10px 10px 10px 10px;
}
</style>
