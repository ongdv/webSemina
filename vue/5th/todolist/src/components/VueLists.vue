<template>
    <div>
      <div class="todo-item-container">
        <div>
          <span class="fas fa-check" v-on:click='completeTodo(index)' v-bind:class = '[complete]'></span>
        </div>
        <div>
          {{title}} - {{index}} - {{complete}}
        </div>
        <div>
          <span class="fas fa-trash-alt" v-on:click='remove(index)'></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'VueLists',
    props: ["title", "index", "complete"],
    methods: {
        remove (index) {
            this.$emit("remove", index)
        },
        completeTodo (index) {
            this.$emit("complete", index)
        }
    }
}
</script>

<style>

</style>
