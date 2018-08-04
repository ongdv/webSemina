<template>
    <div class="container">
        <br>
        <h1>
            {{post.title}}
            <router-link :to="{path: '/edit/' + id}">
                <button class="btn btn-primary">수정</button>
            </router-link>
            <button class="btn btn-primary" v-on:click="deletePost()">삭제</button>
        </h1>
        <hr>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
export default {
    name : 'PostDetail',
    data(){
        return {
            id: '',
            post: ''

        }
    },
    created(){
        var id = this.$router.history.current.params.id;
        this.$set(this, 'id', id)
        this.getPost(id);
    },
    methods: {
        getPost(id){
            this.$http.get('/posts/' + id)
            .then(res =>{
                this.$set(this, 'post', res.data.posts)
            })

        },
        deletePost(id){
            this.$http.delete('/posts/' + this.id)
            .then((res) => {
                if(res.data.status === 201){
                    this.$router.push('/posts')
                }else{
                    alert('다시 시도해주세요');
                }
            });
        }
    }
}
</script>
