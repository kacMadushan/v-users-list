<template>
    <div class="flex flex-col gap-y-4">
        <div class="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 class="text-black font-semibold text-xl">All Users</h2>
            <RouterLink to="/create" class="border border-gray-200 px-3 capitalize py-2 rounded-md font-semibold text-sm text-black">Create New</RouterLink>
        </div>
        <div class="flex items-center gap-x-4">
            <SearchBar v-model:query="searchText"/>
            <ul class="flex items-center gap-x-2">
                <li v-for="item in groupList" :key="item">
                    <button 
                        class="border border-gray-200 text-sm font-medium cursor-pointer rounded-md px-3 py-1.5"
                        @click="handleSelectedGroup(item)"
                    >
                    {{ item }}
                    </button>
                </li>
            </ul>
        </div>
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
        searchText: "",
        selectedGroup: "",
        groupList: ["Office", "Family", "Friend"],
    }),
    computed: {
        ...mapState(useUserStore, ["users", "filteredUsers"]),

        userList() {
            return this.filteredUsers(this.searchText, this.selectedGroup)
        }
    },
    watch: {
        selectedGroup(newValue, oldValue) {
            if(newValue === oldValue) {
                return newValue
            }
        }
    },
    methods: {
        handleSelectedGroup(group) {
            this.selectedGroup = group
            console.log(group)
        }
    }
    
}
</script>