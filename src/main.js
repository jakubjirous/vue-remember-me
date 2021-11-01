import { createApp } from 'vue';
import App from './App';
import BaseButton from './components/UI/BaseButton';
import BaseCard from './components/UI/BaseCard';
import BaseDialog from './components/UI/BaseDialog';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
