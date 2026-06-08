<template>
    <div class="flex flex-col gap-y-4">
        <div class="flex items-center gap-x-2 border-b border-gray-200 pb-4">
            <div class="size-12 bg-gray-100 rounded-full flex items-center justify-center">
                <UserPlusIcon class="size-6"/>
            </div>
            <h1 class="text-black font-medium text-xl">Create New</h1>
        </div>
        <UserForm @add-new-user="addNewUser"/>
    </div>
</template>

<script lang="js">
import { mapActions } from "pinia"
import { useUserStore } from "@/store/userStore";

import { UserPlusIcon } from "@heroicons/vue/24/outline"
import UserForm from "@/components/UserForm.vue";

export default {
    components: {
        UserPlusIcon,
        UserForm
    },
    methods: {
        ...mapActions(useUserStore, ['addNewUser'])
    }
}
</script>