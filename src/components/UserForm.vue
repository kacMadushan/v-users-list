<template>
    <form class="flex flex-col gap-y-2.5" @submit.prevent="handleFormSubmit">
        <div class="flex flex-col gap-y-1">
            <label class="text-sm font-medium" for="name">Full Name</label>
            <input 
                class="border border-gray-300 rounded-md px-3 py-2.5 outline-0 text-sm font-medium" 
                type="text" 
                id="name" 
                v-model="formData.name" 
            />
        </div>
        <div class="flex flex-col gap-y-1">
            <label class="text-sm font-medium" for="email">Email Address</label>
            <input class="border border-gray-300 rounded-md px-3 py-2.5 outline-0 text-sm font-medium"  type="text" id="email" v-model="formData.email"/>
        </div>
        <div class="flex flex-col gap-y-1">
            <label class="text-sm font-medium" for="mobile">Mobile Number</label>
            <input class="border border-gray-300 rounded-md px-3 py-2.5 outline-0 text-sm font-medium"  type="text" id="mobile" v-model="formData.mobile"/>
        </div>
        <div class="flex flex-col gap-y-1">
            <label class="text-sm font-medium" for="country">Country</label>
            <input class="border border-gray-300 rounded-md px-3 py-2.5 outline-0 text-sm font-medium"  type="text" id="country" v-model="formData.country"/>
        </div>
        <div class="flex flex-col gap-y-1">
            <label class="text-sm font-medium" for="group">Group</label>
            <input class="border border-gray-300 rounded-md px-3 py-2.5 outline-0 text-sm font-medium"  type="text" id="group" v-model="formData.group"/>
        </div>
        <button type="submit">Save User</button>
    </form>
</template>

<script lang="js">
export default {
    props: {
        user: {
            type: Object
        }
    },
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
    emits: ['add-new-user', 'edit-user'],
    methods: {
        handleFormSubmit() {
            if(this.user) {
                this.$emit('edit-user', this.user.id, this.formData)
            } else {
                this.$emit('add-new-user', this.formData)
            }
            this.$router.push("/")
        }
    },
    created() {
        if(this.user) {
            this.formData.id = this.user.id
            this.formData.name = this.user.name
            this.formData.email = this.user.email
            this.formData.mobile = this.user.mobile
            this.formData.country = this.user.country
            this.formData.group = this.user.group
        }
    }
}
</script>