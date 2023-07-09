// 组合式函数复用
// 封装分类数据
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { getCategoryAPI } from '@/apis/Category'
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory () {
    const categoryData = ref({})
    const route = useRoute()
    // 默认获取当前路由下的id
    const getCategoryList = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategoryList()
    })

    // 路由参数变化时分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategoryList(to.params.id)
    })

    return {
        categoryData
    }
}