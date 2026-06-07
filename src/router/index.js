import { createRouter, createWebHistory } from "vue-router"
import Users from "@/views/Users/Users.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'users',
            component: Users
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: () => import("@/views/UserProfile/UserProfile.vue")
        },
        {
            path: '/create',
            name: 'create',
            component: () => import("@/views/UserCreate/UserCreate.vue")
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import("@/views/UserEdit/UserEdit.vue")
        }
    ]
})

export default router