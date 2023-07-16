// 倒计时函数

import { computed, onUnmounted, ref } from "vue"
import dayjs from "dayjs"
export const useCountDown = () => {
    // 定时器
    let timer = null
    // 响应式数据
    const time = ref(0)
    // 格式化时间
    const formaTime = computed(() => {
        return dayjs.unix(time.value).format('mm分ss秒')
    })  
    // 倒计时函数
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        },1000)
    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formaTime,
        start
    }
}