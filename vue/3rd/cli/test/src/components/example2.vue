<template>
  <div>
      <button v-on:click="pushData">추가</button>
      <button v-on:click="removeData">제거</button>
      <div v-for="item in lists" :key="item.num">{{item.num}} - {{item.contents}}</div>
  </div>
</template>

<script>
export default {
  name: 'example2',
  data () {
    return {
      lists: [
        {num: 1, contents: '할일1'},
        {num: 2, contents: '할일2'},
        {num: 3, contents: '할일3'},
        {num: 4, contents: '할일4'},
        {num: 5, contents: '할일5'},
        {num: 6, contents: '할일6'},
        {num: 7, contents: '할일7'},
        {num: 8, contents: '할일8'}
      ],
      index: 8
    }
  },
  methods: {
    pushData () {
      this.index = this.index + 1
      this.lists.push({
        num: this.index,
        contents: '할일' + this.index
      })
    },
    removeData () {
      this.index = this.index - 1
      this.lists.pop()
    }
  }
}
</script>
