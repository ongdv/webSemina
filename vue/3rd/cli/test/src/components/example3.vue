<template>
  <div>{{total}}</div>
</template>

<script>
import count from './count.vue';

export default {
  name: 'example3',
  components: {
    count: count
  },
  data () {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal () {
      this.total += 1
    },
    decrementTotal () {
      this.total -= 1
    }
  }
}
</script>
