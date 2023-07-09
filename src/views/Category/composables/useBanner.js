// 组合式函数复用
// banner实现
import { ref,onMounted } from 'vue'
import { getBannerApi } from '@/apis/home'
export function useBanner () {
    const bannerList = ref([])
    // 获取banner 
    const getBanner = async () => {
        const res = await getBannerApi({
        distributionSite: '2'
        })
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })

    return {
        bannerList
    }
}
