<template>
    <li class="flex items-center justify-between border border-gray-200 rounded-md p-3">
        <div>
            <h5 class="font-semibold text-sm">{{ user.name }}</h5>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
        </div>
        <RouterLink class="border border-gray-200 text-xs font-medium cursor-pointer rounded-md px-2 py-1" :to="{name: 'profile', params: {id: user.id}}">View</RouterLink>
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