
import { useContentStore } from '@/store/demoStore.js'
const getInitProps = async (to)=>{
    const contentStore = useContentStore()
    await contentStore.getDemoData('异步初始化数据')
   
}
const routes = [
    {
        path: '/',
        redirect: to => {
            // 该函数接收目标路由作为参数
            // 相对位置不以`/`开头
            // 或 { path: 'profile'}
            return '/home'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home/index.vue')
    },
    {
        path: '/demo',
        name: 'Demo',
        beforeEnter:[getInitProps],
        component: () => import('@/pages/Demo/index.vue')
    },
]


export default routes