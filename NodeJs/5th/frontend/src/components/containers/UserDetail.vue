<template>
    
    <div class="container">
        <br>
        <h1>
            {{user.name}}
        </h1>
        <div>
            {{user.email}}
            {{user.address}}
        </div>
    </div>

</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
            id: "",
            user:''
        }
    },
    created() {
        var id = this.$router.history.current.params.id;
        console.log(id)
        this.$set(this, 'id', id)
        this.getUsers(id);
    },
    methods: {
        getUsers(id) {
            this.$http.get('/users/' + id)
            .then((result) => {
                console.log(result);
                this.$set(this, 'user', result.data.users)
            });
        }
    }
}
</script>
