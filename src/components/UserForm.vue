<template>
    <form @submit.prevent="handleFormSubmit">
        <div>
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="formData.name"/>
        </div>
        <div>
            <label for="email">Email Address</label>
            <input type="text" id="email" v-model="formData.email"/>
        </div>
        <div>
            <label for="mobile">Mobile Number</label>
            <input type="text" id="mobile" v-model="formData.mobile"/>
        </div>
        <div>
            <label for="country">Country</label>
            <input type="text" id="country" v-model="formData.country"/>
        </div>
        <div>
            <label for="group">Group</label>
            <input type="text" id="group" v-model="formData.group"/>
        </div>
        <button type="submit">Save User</button>
    </form>
</template>

<script lang="js">
export default {
    data: () => ({
        formData: {
            id: "5",
            name: "",
            email: "",
            mobile: "",
            country: "",
            group: ""
        }
    }),
    emits: ['add-new-user'],
    methods: {
        handleFormSubmit() {
            this.$emit('add-new-user', this.formData)
            this.$router.push("/")
        }
    }
}
</script>