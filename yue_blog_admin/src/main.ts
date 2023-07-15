import { createApp } from 'vue';
import './style.css';
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue';
import router  from './router/index.ts';
// import store from './store';

const app = createApp(App).use(router).use(ElementPlus)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
Object.entries(ElementPlusIconsVue).forEach(e=>{
    app.component(e[0],e[1])
})
app.mount('#app');
