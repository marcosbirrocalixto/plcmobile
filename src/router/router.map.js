import Home from '@/pages/Home'
import Plans from '@/pages/Plans'
import Projects from '@/pages/Projects'
import Auth from '@/pages/auth/Auth'

const routes = [
    {
        path: '/planos',
        component: Plans,
        name: 'plans'
    },

    {
        path: '/projetos',
        component: Projects,
        name: 'projects'
    }, 

    {
        path: '/',
        component: Home,
        name: 'home'
    },

    {
        path: '/login',
        component: Auth,
        name: 'auth'
    }
]

export default routes