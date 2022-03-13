<template>
  <div>
    <LoginForm />
    
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {LoginForm}
  
  //components: {
  //  LoginForm
  //}
}
</script>