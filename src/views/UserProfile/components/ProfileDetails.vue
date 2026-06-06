<template>
    <div>
        <h4>{{ user.name }}</h4>
        <p>{{ user.email }}</p>
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