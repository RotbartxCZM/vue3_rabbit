import httpInstance   from '@/utils/http'

// 获取banner
export function getBannerApi (params = {}) {
    // 默认为1,商品为2,这是在对象解构中设置默认值, 
//如果params中distributionSite为undefined,则使用默认值1,否则distributionSite使用params传递的值
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

// 获取新鲜好物
export function findNewApi () {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotAPI () {
    return  httpInstance({
        url: '/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }