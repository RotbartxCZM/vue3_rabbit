import httpInstance   from '@/utils/http'

export function getBannerApi () {
    return httpInstance({
        url: '/home/banner'
    })
}