// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
// 引入并注册懒加载指令插件
import { imgLazyPlugin } from '@/directive/index'
import { componentPlugin } from '@/components/index'
import App from './App.vue'
import router from './router'
// pinia插件
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建实例
const app = createApp(App)
const pinia = createPinia()

// 注册持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

// 注册懒加载指令插件
app.use(imgLazyPlugin)
app.use(componentPlugin)


app.mount('#app')
