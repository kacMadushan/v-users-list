<template>
    <ul>
        <UserListItem v-for="user in users" :key="user.id" :user="user"/>
    </ul>
</template>

<script lang="js">
import UserListItem from "./UserListItem.vue";

export default {
    components: {
        UserListItem
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>