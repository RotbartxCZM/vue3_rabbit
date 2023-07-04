<script setup>
import { getBannerApi } from '@/apis/home'
import { onMounted,ref } from 'vue';

const bannerList = ref([])

onMounted(async () => {
    const res = await getBannerApi()
    bannerList.value = res.result
    console.log(bannerList.value);
})

</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>