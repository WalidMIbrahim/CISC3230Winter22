<template>
    <h1> Our Header {{msg}} {{data}}</h1>
</template>


<script>

export default {
    name: 'AppHeader',
    props: {
        msg: String,
        data: String
    }
}
</script>
