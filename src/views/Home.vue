<template>
  <div class="home">
    <h1>
      <span class="iconfont icon-gerenzhongxin"></span>
      home
    </h1>
    <Button>这是按钮</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getBannerData, getUserData, getPosiData, getIndexEntryData, getRestaurantsData }
  from '@/api/data';
import { Button } from 'vant';
// import Button from 'vant/lib/button';


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button
  },
  async mounted() {
    // let result = await getBannerData()

    // let result = await getUserData()
    let res1 = await getPosiData()
    console.log(res1)
    let res2 = await getIndexEntryData()
    console.log(res2)
    let res3 = await getRestaurantsData()
    console.log(res3)

  }
}
</script>

<style  scoped>
h1 {
  width: 3.75rem;
  height: 1rem;
  background: skyblue;
  font-size: 0.5rem;
  line-height: 1rem;
}
</style>
