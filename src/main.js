import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '@/components/app/App.vue';
import "./index.css";
import router from './router/index';
import { createPinia } from 'pinia';
import './assets/main.css';
import 'tailwindcss/tailwind.css'


const app = createApp(App);

app.use(createPinia()); // Pinia'dan foydalanish
app.use(router); // Routerni o'rnatish
app.mount('#app');
