import httpInstance   from '@/utils/http'

// 获取banner
export function getBannerApi () {
    return httpInstance({
        url: '/home/banner'
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