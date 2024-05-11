<template>
    <h1>这个demo页面</h1>
    <RouterLink :to="{ name: 'Home' }">
        <button>跳转Home页面</button>
    </RouterLink>
    <!-- {{ state?.content }} -->
    <h1>页面数据{{ state?.content }}</h1>
    <button @click="onRequest">刷新页面数据</button>
</template>

<script>
import { defineComponent } from 'vue'
import { useContentStore } from '@/store/demoStore.js'
export default defineComponent({
    setup(props) {
        const contentStore = useContentStore()
        const onRequest = () => {
            contentStore.getDemoData('刷新数据')
        }
        return {
            state: contentStore,
            onRequest
        }
    }
})

</script>