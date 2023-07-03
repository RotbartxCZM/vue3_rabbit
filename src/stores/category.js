import { defineStore } from 'pinia'

// 获取接口函数
import { getCategoryApi } from '@/apis/layout'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航列表数据方法
    const getCategory = async () => {
        const res = await getCategoryApi()
        categoryList.value = res.result
    }

  return { getCategory, categoryList }
})