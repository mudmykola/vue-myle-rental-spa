import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import AOS from 'aos'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'aos/dist/aos.css'
import './styles/app.scss'
import './assets/css/tailwind.css'


const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component)
})

app.use(store);
app.use(router);

app.use(AOS.init());
app.mount('#app');