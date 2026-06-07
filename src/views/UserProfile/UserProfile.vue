<template>
    <div>
        <RouterLink to="/">Back</RouterLink>
        <h1>User Profile</h1>
        {{ profileId }}
        <div v-if="user">
            <ProfileDetails :user="user" />
        </div>
    </div>
</template>

<script lang="js">
import { mapState } from "pinia";
import { useUserStore } from "@/store/userStore";

import ProfileDetails from "./components/ProfileDetails.vue";
export default {
    components: {
        ProfileDetails
    },
    computed: {
        ...mapState(useUserStore, ['getUserById']),

        profileId() {
            return this.$route.params.id
        },
        user() {
            return this.getUserById(this.profileId)
        }
    }
}
</script>