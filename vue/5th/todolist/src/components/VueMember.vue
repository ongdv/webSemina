<template>
    <div>
        <input v-model='memberName' type="text">
        <button v-on:click='register'>등록</button>
    </div>
</template>

<script>
export default {
    name: 'VueMember',
    data () {
        return{
            memberName: ""
        }
    },
    methods:{
        register () {
            this.$http.post('http://10.1.72.252:3000/member', {id:this.memberName})
            .then((result) => {
                alert(result.data.message)
            })
        },
        close () {
            this.$emit('close')
        }
    },
    created() {
        this.close();
    },
}
</script>

<style scoped>

</style>
