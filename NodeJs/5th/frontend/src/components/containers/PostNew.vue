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
        <button class="btn btn-primary" v-on:click="save()">작성완료</button>
    </div>
</template>

<script>
export default {
    name: 'PostNew',
    data () {
        return {
            title: "",
            body: ""
        }
    },
    methods: {
        save(){
            var formData = {
                title: this.title,
                body: this.body
            }
            //console.log(formData);
            this.$http.post('/posts', formData)
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
    },
    created() {
        
    },
}
</script>
