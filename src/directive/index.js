// 图片懒加载的vue use
import { useIntersectionObserver } from '@vueuse/core'
// 定义插件
export const imgLazyPlugin = {
    install (app) {
        // 懒加载执行逻辑
        // 图片懒加载指令
        app.directive('img-lazy', {
            // 触发指令的钩子
            mounted(el, binding) {
                // el --指令绑定的元素
                // binding.value -- 等于绑定表达式的值 -- 图片url

                // useIntersectionObserver中有stop方法,通过解构赋值可以得到此方法
                const { stop } = useIntersectionObserver(
                    // 监听的参数
                    el,
                    // 进入视口区域,触发此处理函数
                    ([{ isIntersecting }]) => {
                        if(isIntersecting) {
                            el.src = binding.value
                            // 触发后将停止监听
                            stop()
                        }
                    },
                )
            }
        })
    }
}