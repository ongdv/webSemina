<template>
    
    <div class="container">
        <br>
        <h1>Posts</h1>
        <div v-for="(post, idx) in posts">- {{ post.title }}</div>
    </div>

</template>




<script>
export default {
    name : 'Posts',

    data(){
        return {

            posts:[]

        }
    },

    created(){
        this.test()
    },

    methods: {

        test(){

            this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp=>{
                this.$set(this, 'posts', resp.data)
            })

        }

    }
}
</script>
