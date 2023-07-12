// 全局注册插件
import XtxSku from '@/components/XtxSku/index.vue'

import ImgView from '@/components/ImgView/index.vue'

export const componentPlugin = {
    install (app) {
        app.component('XtxSku',XtxSku)
        app.component('XtxImgView',ImgView)
    }
}