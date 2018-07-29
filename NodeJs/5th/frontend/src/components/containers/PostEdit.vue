<template>
    <div class="container">
        <br>
        <h1>
            <small>제목</small>
            <input type="text" v-model="title" style="width:100%">
        </h1>
        <div>
            <textarea name="" style="width:100%;" v-model="body" rows="5" ></textarea>
        </div>
        <button class="btn btn-primary" v-on:click="save()">수정완료</button>
    </div>
</template>

<script>
export default {
    name: 'PostEdit',
    data () {
        return {
            id: "",
            title: "",
            body:""
        }
    },
    created() {
        var id = this.$router.history.current.params.id
        this.$set(this, 'id', id)
        this.getPost(id)
    },
    methods : {
        getPost(id){
            this.$http.get('/posts/' + id)
            .then(res =>{
                this.$set(this, 'title', res.data.posts.title)
                this.$set(this, 'body', res.data.posts.body)
            })
        },
        save(){
            var formData = {
                id : this.id,
                title: this.title,
                body: this.body
            }
            console.log(formData);
            this.$http.put('/posts', formData)
            .then((res) => {
               console.log(res)
               if(res.data.status === 201){
                   this.$router.push('/posts')
               }else{
                   alert('다시 시도해주세요.')
                   return
               }
            });
        }
    }
}
</script>
