<template>
    <form @submit.prevent="login">
        <label for="username"> Username: </label>
        <input type="text" v-model="username" name="username" placeholder="Username"/>

        <label for="password"> Password: </label>
        <input type="password" v-model="password" name="password" placeholder="Password"/>
        <div v-if="errorMessage"> {{errorMessage}} </div>
        <button class="btn"> Login </button>

    </form>
</template>


<script>

    import auth from '../js/auth';
    export default {
        name: "LoginForm",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Call login()');
                auth.login(this.username, this.password, (res) => {
                    if (res.auth){
                        //Login succesful, go to home page.
                        console.log('Loggin success');
                        this.$router.replace('/');
                    } else{
                        //Login failed.
                        console.log('Loggin failed');
                        this.errorMessage = "Loggin failed";
                    }
                })
            }
        }
    }
</script>
