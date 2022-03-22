<template>
    <div>
        <router-link to="/"> Home </router-link> |
        <router-link to="contacts"> Contacts </router-link> |
        <router-link to="about"> About </router-link> |
        <router-link v-if="!isLoggedIn" to="login"> Login </router-link>
        <a  v-if="isLoggedIn" v-on:click="logout"> Logout </a>
    </div>
</template>

<script>
    import auth from '../js/auth'
    export default{
        name: 'AppNav',
        data() {
            return { isLoggedIn: auth.isLoggedIn()};
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        methods:{
            logout: function(){
                auth.logout( (res) =>{
                    console.log(res)
                });
            }
        }
    }
</script>



