<template>
    <li>
        <div>
            <h5>{{ user.name }}</h5>
            <p>{{ user.email }}</p>
        </div>
        <RouterLink :to="{name: 'profile', params: {id: user.id}}">View</RouterLink>
    </li>
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