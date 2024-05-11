
<template>
    <h1>这是Home页面</h1>
    <button @click="setCounter">点击次数{{ count }}</button>
    <RouterLink :to="{ name: 'Demo' }">
        <button>跳转Demo页面</button>
    </RouterLink>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default  /*#__PURE__*/  defineComponent({
    setup() {
        const count = ref(0)
        const setCounter = () => count.value++
        return {
            count,
            setCounter
        }
    }
})
</script>