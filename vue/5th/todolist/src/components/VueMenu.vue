<template>
    <div class="menu-container">
        <div class="menu-title-container">
            <span>Todo Menu</span>
            <div></div>
        </div>
        <div class="menu-body-container">
            <ul>
                <li>
                    <router-link to="member">
                        - 아이디 등록
                    </router-link>
                </li>
                <li v-on:click='close'>- 메뉴 닫기</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueMenu',
    methods: {
        close () {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.menu-container{
    position:absolute;
    width:80%;
    height:100% !important;
    top:0;
    background: #2e323a;
}

.menu-title-container{
    color:white;
    text-align: center;
    padding:10px;
    cursor:default;
}

.menu-title-container div{
    padding-top:15px;
    border-bottom: 1px solid white;
}

.menu-body-container{
    padding: 10px;
}

.menu-body-container ul{
    padding:0px;
    margin:0px;
}

.menu-body-container ul li{
    list-style: none;
    color:white;
    padding: 5px 0;
    cursor: pointer;
}

.menu-body-container ul li:hover{
    color:crimson;
    background: #245228;
}
</style>
