<template>
    <div>
        <RouterLink to="/create">Create New</RouterLink>
        <h1>Users</h1>
        <UserList :users="users"/>
    </div>
</template>

<script lang="js">
import { mapState } from "pinia"
import { useUserStore} from "@/store/userStore"

import UserList from "./components/UserList.vue";

export default {
    components: {
        UserList
    },
    computed: {
        ...mapState(useUserStore, ["users"]),
    }
    
}
</script>