<template>
    <div>
        <RouterLink to="/">Back</RouterLink>
        <h1>User edit</h1>
        <UserForm :user="user" @edit-user="editUserItem"/>
    </div>
</template>

<script lang="js">
import { mapState, mapActions } from "pinia"
import { useUserStore } from "@/store/userStore"
import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        UserForm
    },
    computed: {
        ...mapState(useUserStore, ['getUserById']),

        editUserId() {
            return this.$route.params.id
        },

        user() {
            return this.getUserById(this.editUserId)
        }
    },
    methods: {
        ...mapActions(useUserStore, ['editUserItem'])
    }
}

</script>

