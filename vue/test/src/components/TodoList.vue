<template>
    <div>
        TodoList
        <button v-on:click='pageBack'>이전 페이지</button>
    </div>

</template>

<script>
export default {
    name: 'TodoList',
    methods: {
        pageBack () {
            history.back();
        }
    }
}
</script>

<style scoped>

</style>
