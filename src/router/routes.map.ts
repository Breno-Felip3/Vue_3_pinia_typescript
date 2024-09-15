import AuthTemplate from "../layout/AuthTemplate.vue";
import LoginPage from "../layout/Auth/LoginPage.vue";
import ForgotPassword from "../layout/Auth/ForgotPassword.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";

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
                component: HomePage,
                name: 'admin.home'
            },
            {
                path: 'contato',
                component: ContactPage,
                name: 'admin.contact'
            }
        ]
    },
]