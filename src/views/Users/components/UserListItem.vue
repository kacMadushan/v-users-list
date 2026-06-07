<template>
    <li class="flex items-center justify-between border-b border-gray-200 p-3">
        <div>
            <h5 class="font-semibold">{{ user.name }}</h5>
            <p class="text-sm text-gray-600 font-medium">{{ user.email }}</p>
        </div>
        <RouterLink class="border border-gray-200 text-sm font-medium cursor-pointer rounded-md px-3 py-1.5" :to="{name: 'profile', params: {id: user.id}}">View</RouterLink>
    </li>
</template>

<script lang="js">
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>