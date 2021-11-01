import { createApp } from 'vue';
import App from './App';
import BaseButton from './components/UI/BaseButton';
import BaseCard from './components/UI/BaseCard';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

app.mount('#app');
