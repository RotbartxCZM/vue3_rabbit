// 购物车封装
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, getNewCartListAPI, delCartAPI } from '@/apis/cart'
export const useCarteStore = defineStore('carte', () => {
    // 实例化pinia
    const userStore = useUserStore()
    // 获取登录状态
    const isLogin = computed(() => 
        userStore.userInfo.token
    )
    // 购物车列表
    const cartList = ref([])
    
    // 获取最新购物车列表,并覆盖
    const updateNewList = async () => {
        const res = await getNewCartListAPI()
        cartList.value = res.result
    }

    // 添加购物车方法
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            // 登录之后加入购物车逻辑(加入至数据库,非cartList本地)
            await insertCartAPI({ skuId, count })
            // 获取最新的购物车列表(数据库)覆盖本地列表
            updateNewList()
        } else {
            // 找是否存在这个商品
            const item = cartList.value.find((value) => goods.skuId === value.skuId)
            if (item) {
                // 已添加count + 1
                item.count++
            } else {
                // 没添加过,push()
                cartList.value.push(goods)
            }
        }
    }
    // 删除购物车方法
    const delCart = async (skuId) => {
        if (isLogin.value) {
            // 数据库删除购物车商品
            await delCartAPI([skuId])
             // 获取最新的购物车列表(数据库)覆盖本地列表
             updateNewList()
        } else {
            const index = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(index,1)
        }
    }
    // 清除购物车
    const clearCart = () => {
        cartList.value = []
    }
    // 单选功能
    const singleCheck = (skuId,selected) => {
        const item = cartList.value.find((item) => skuId === item.skuId)
        item.selected = selected
    }   
    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }
    // 计算属性,计算所以购物车中的总价和总数
    const allCount = computed(() => 
        cartList.value.reduce((a,c) =>  a + c.count, 0)
    )
    const allPrice = computed(() => 
        cartList.value.reduce((a,c) => a + c.count*c.price, 0)
    )
    // 购物车选中的,总价和总数
    const selectedCount = computed(() => 
        cartList.value.filter((item) => item.selected).reduce((a,c) =>  a + c.count, 0)
    )
    const selectedPrice = computed(() => {
        const item = cartList.value.filter((item) =>  item.selected )
        return item.reduce((a,c) => a + c.count*c.price, 0)
    })
    // 计算属性绑定全选功能
    const isAll = computed(() => 
        cartList.value.every((item) => item.selected)
    )
    return {
        cartList,
        addCart,
        delCart,
        allPrice,
        allCount,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList
    }
},{
    persist: true,
})