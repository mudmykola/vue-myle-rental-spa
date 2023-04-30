import {createApp} from 'vue'
import App from './App.vue'
import AOS from 'aos'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'aos/dist/aos.css'
import './styles/app.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(router);
app.use(AOS.init());
app.mount('#app');