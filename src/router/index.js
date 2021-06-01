import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/Tasks'
import newJob from '../views/New'

const routes = [
    {
        path : '/',
        name : 'home',
        component : home
    },
    {
        path : '/create',
        name : 'create',
        component : newJob

    },
    {
        path : '/task/:id',
        name : 'task',
        component : () => import('../views/Task')
    }
];

const router = createRouter({
   history :  createWebHistory(process.env.BASE_URl),
   routes,
   linkExactActiveClass : 'active',
   linkActiveClass : 'active'

})

export default router