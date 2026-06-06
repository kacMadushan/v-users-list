<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <div>
                    <h5>{{ user.name }}</h5>
                    <p>{{ user.email }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="js">
import { mapState } from "pinia"
import { useUserStore} from "@/store/userStore"

export default {
    computed: {
        ...mapState(useUserStore, ["users"]),
        
    }
    
}
</script>