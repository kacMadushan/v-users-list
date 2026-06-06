<template>
    <div>
        <h1>User edit</h1>
        <UserForm :user="user"/>
    </div>
</template>

<script lang="js">
import { mapState } from "pinia"
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
    }
}

</script>

