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
    name:'AddContacts'
}
</script>

<style scoped lang="scss">
.addContact {
        padding: 1rem
    }
</style>