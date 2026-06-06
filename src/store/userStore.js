import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [
            {
                id: "1",
                name: "Emily Johnson",
                email: "emily.johnson@x.dummyjson.com",
                mobile: "+81 965-431-3024",
                country: "United States",
                group: "Office"
            },
            {
                id: "2",
                name: "Michael Williams",
                email: "michael.williams@x.dummyjson.com",
                mobile: "+49 258-627-6644",
                country: "United States",
                group: "Friend"
            },
            {
                id: "3",
                name: "Sophia Brown",
                email: "sophia.brown@x.dummyjson.com",
                mobile: "+81 210-652-2785",
                country: "United States",
                group: "Family"
            },
            {
                id: "4",
                name: "James Davis",
                email: "james.davis@x.dummyjson.com",
                mobile: "+49 614-958-9364",
                country: "United States",
                group: "Family"
            }
        ]
    }),
    getters: {
        getUserById: (state) => {
            return (profileId) => state.users.find((user) => user.id === profileId)
        }
    },
    actions: {
        addNewUser(user) {
            this.users.push(user)
        }
    }
})