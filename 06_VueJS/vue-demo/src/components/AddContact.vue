<template>
    <div class="addContact">
    <form @submit="addContact">
    
        <label for="name"> Name: </label>
        <input type="text" v-model="name" name="name" placeholder="Full Name"/>

        <label for="phone"> Phone: </label>
        <input type="text" v-model="phone" name="phone" placeholder="Phone #"/>
        
        <label for="email"> Email: </label>
        <input type="text" v-model="email" name="email" placeholder="Email"/>
        <button class="btn"> Add Contact </button>

    </form>
    </div>
</template>

<script>

export default {
    name:'AddContacts',
    data(){
        return{
            name: '',
            phone: '',
            email: ''
        };
    }, 
    methods:{
        addContact(event){
            // prevent from submiting the page
            event.preventDefault();
            console.log("add contact clicked")
            //collect the data
            const newContact ={
                name: this.name,
                phone: this.phone,
                email: this.email
            };

            this.$emit('add-contact', newContact);
            this.name = '';
            this.phone = '';
            this.email ='';

        }
    }
}
</script>

<style scoped lang="scss">
.addContact {
        padding: 1rem
    }
</style>