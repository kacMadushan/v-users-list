<template>
    <div>
        <RouterLink to="/create">Create New</RouterLink>
        <h1>Users</h1>
        <SearchBar v-model:query="searchText"/>
        <UserList :users="userList"/>
    </div>
</template>

<script lang="js">
import { mapState } from "pinia"
import { useUserStore} from "@/store/userStore"

import SearchBar from "@/components/SearchBar.vue";
import UserList from "./components/UserList.vue";

export default {
    components: {
        SearchBar,
        UserList
    },
    data: () => ({
        searchText: ""
    }),
    computed: {
        ...mapState(useUserStore, ["users", "filteredUsers"]),

        userList() {
            return this.filteredUsers(this.searchText)
        }
    }
    
}
</script>