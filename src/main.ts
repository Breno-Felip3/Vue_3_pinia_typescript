import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
import router from './router';
import { can } from './directives';
const app = createApp(App)
    app.use(pinia)
    app.use(router)
    app.directive('can', can)
    .mount('#app')
