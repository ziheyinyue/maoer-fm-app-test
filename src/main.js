import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import getVant from './plugins';
import { Image as VanImage } from 'vant';

const app = createApp(App)

app.use(router)
app.use(VanImage);
getVant(app)

app.mount('#app')
