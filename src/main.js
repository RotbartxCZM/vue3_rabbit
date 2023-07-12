// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入并注册懒加载指令插件
import { imgLazyPlugin } from '@/directive/index'
import { componentPlugin } from '@/components/index'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(router)

// 注册懒加载指令插件
app.use(imgLazyPlugin)
app.use(componentPlugin)

app.mount('#app')
