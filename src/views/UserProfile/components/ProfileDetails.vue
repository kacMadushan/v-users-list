<template>
    <div>
        <h4>{{ user.name }}</h4>
        <p>{{ user.email }}</p>
    </div>
    <div>
        <RouterLink :to="{name: 'edit', params: {id: user.id}}">Edit</RouterLink>
    </div>
</template>

<script lang="js">
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>