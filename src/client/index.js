import { createApp } from '../app.js';
import routes from '../routers/index.js';
import { createRouter,createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})
const pinia = createPinia()
const app = createApp()
.use(router)
.use(pinia)
// 服务端渲染初始值复制到客户端初始值
router.isReady().then(() => {
    if (window.__pinia) {
      pinia.state.value = window.__pinia;
    }
    app.mount('#app');
});