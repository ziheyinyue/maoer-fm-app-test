import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Icon} from 'vant'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';


const app = createApp(App)

app.use(router)
app.use(Icon)
app.use(Swipe);
app.use(SwipeItem);

app.mount('#app')
