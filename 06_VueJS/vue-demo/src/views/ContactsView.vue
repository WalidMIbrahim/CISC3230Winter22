<template>
  <div  class="contacts">
    <div v-if="!isLoggedIn" >
        <H1> Login to access this page. </H1>
    </div>
    <div v-if="isLoggedIn">
      <ContactList :contacts="contactsList" v-on:delete-contact="deleteContact"/>
      <AddContact v-on:add-contact="insertContact"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddContact from '../components/AddContact.vue'
import ContactList from '../components/ContactList.vue'
import axios   from 'axios'
import auth from "../js/auth"

export default {
  name: 'ContactsView',
  components: {
    AddContact, ContactList
  },
  data(){
      return{
          contactsList:[],
          isLoggedIn: auth.isLoggedIn()
      };
  },
  created:function(){
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.contactsList = response.data)
        .catch(error=> console.log(error))
        
  },
  methods: {
      deleteContact(id){
          axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then( () => this.contactsList =
            this.contactsList.filter(contact => contact.id !==id))
           .catch(error=> console.log(error))
      },
      insertContact(newContact){
          console.log("insert function called");
          axios.post('https://jsonplaceholder.typicode.com/users', newContact)
          .then(response => this.contactsList = [response.data] )
          .catch(error=> console.log(error))
      }
  }
}
</script>

<style scoped lang="scss">
.contacts{
    margin: 1rem;
}

</style>