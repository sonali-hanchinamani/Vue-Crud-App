import { createRouter, createWebHistory } from 'vue-router'
import ContactManager from "../views/ContactManager"
import AddContact from "../views/AddContact"
import ViewContact from "../views/ViewContact"
import PageNotFound from "../views/PageNotFound"

const routes = [
    {
        path: '/',
        name: 'ContactManager',
        component: ContactManager
    },
    {
        path: '/add',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/view/:userId',
        name: 'ViewContact',
        component: ViewContact
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
