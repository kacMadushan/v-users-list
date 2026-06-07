<template>
    <div>
        <input class="bg-gray-100 font-medium px-3 py-2.5 w-full rounded-md text-sm outline-0" type="text" placeholder="Search..." @input="handleSearchInput">
    </div>
</template>

<script lang="js">
export default {
    props: {
        query: {
            type: String,
            required: true
        }
    },
    emits: ['update:query'],
    methods: {
        handleSearchInput(e) {
            this.$emit('update:query', e.target.value)
        }
    }
}
</script>