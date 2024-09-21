import AuthTemplate from "../layout/AuthTemplate.vue";
import LoginPage from "../pages/auth/LoginPage.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import HomeAdmin from "../pages/admin/home/HomeAdmin.vue";
import ListUsers from "../pages/admin/home/users/ListUsers.vue";

export const routes = [
    {
        path: '/',
        component: AuthTemplate,
        children:[
            {
                path: '',
                component: LoginPage,
                name: 'auth.login'
            },
            {
                path: '/esqueci-a-senha',
                component: ForgotPassword,
                name: 'forgot.password'
            }
        ]
    },
    {
        path: '/admin',
        component: DefaultLayout,
        children:[
            {
                path: '',
                component: HomeAdmin,
                name: 'admin.home'
            },
            {
                path: 'users',
                component: ListUsers,
                name: 'users.index'
            },
        ]
    },
]