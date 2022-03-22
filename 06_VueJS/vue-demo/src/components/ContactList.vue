<template>
    <div class="ContactsList">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>E-Mail</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="contact.id" v-for="contact in contacts">
                <td> {{contact.name}}</td>
                <td> {{contact.phone}}</td>
                <td> {{contact.email}}</td>
                <td> <img alt="delete" 
                        src="@/assets/delete.png" 
                        class="delete"
                        @click="$emit('delete-contact', contact.id)"/></td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>

export default {
    name:'ContactsList',
    props:{
        contacts: Array
    }
}
</script>

<style scoped lang="scss">
.contactList{
    padding: 1rem
}
.delete{
    width:1rem;
    height: auto;
    cursor: pointer;
}
</style>