<template>
  <button v-on:click='incrementCounter'>{{count}}</button>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incrementCounter () {
      this.counter += 1
      //this.$emit('increment')
    }
  }
}
</script>
