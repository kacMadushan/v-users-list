<template>
    <div>
        <input type="text" placeholder="Search..." @input="handleSearchInput">
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