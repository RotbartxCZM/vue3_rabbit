<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 获取导航列表action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
        categoryStore.getCategory()
})

</script>
<template>
        <!-- 导航吸附 -->
        <LayoutFixed />
        <!-- 导航区域 -->
        <LayoutNav />

        <LayoutHeader />

        <!-- 二级路由出口 -->
        <!-- 添加key 破坏复用机制 强制销毁重建 -->
        <RouterView />

        <LayoutFooter />
</template>@/stores/categoryStore@/stores/categoryStore