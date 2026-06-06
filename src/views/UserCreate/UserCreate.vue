<template>
    <div>
        <h1>User create</h1>
        <UserForm @add-new-user="addNewUser"/>
    </div>
</template>

<script lang="js">
import { mapActions } from "pinia"
import { useUserStore } from "@/store/userStore";

import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        UserForm
    },
    methods: {
        ...mapActions(useUserStore, ['addNewUser'])
    }
}
</script>