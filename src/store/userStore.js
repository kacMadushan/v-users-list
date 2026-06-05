import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [
            {
                id: "1",
                name: "",
                email: "",
                mobile: "",
                group: ""
            },
            {
                id: "2",
                name: "",
                email: "",
                mobile: "",
                group: ""
            },
            {
                id: "3",
                name: "",
                email: "",
                mobile: "",
                group: ""
            }
        ]
    }),
    getters: {},
    actions: {}
})