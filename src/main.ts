import { createApp } from 'vue';
import App from './App.vue';
import Alert from '@/components/Alert.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);

app.component('Alert', Alert);

app.mount('#app');
