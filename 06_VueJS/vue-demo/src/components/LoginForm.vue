<template>
    <form @submit.prevent="login">
        <label for="username"> Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        
        <button class="btn"> Login </button>

    </form>
</template>


<script>


    export default {
        name: "LoginForm",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org"
            }
        }
    }
</script>
