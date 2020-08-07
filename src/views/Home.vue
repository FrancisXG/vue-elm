<template>
  <div class="home" id="home">
    <nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <Icon name="search" size="18" />
      </template>
      <template #right>
        <span class="iconfont icon-gerenzhongxin"></span>
      </template>
      <template #title>
        <span>{{titlePosition}}</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getBannerData, getUserData, getPosiData, getIndexEntryData, getRestaurantsData }
  from '@/api/data';
import { NavBar, Icon } from 'vant';
// import Button from 'vant/lib/button';


export default {
  name: 'Home',
  components: {
    NavBar,
    Icon
  },
  data() {
    return {
      titlePosition: ""
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
  async mounted() {
    // let result = await getBannerData()

    // let result = await getUserData()
    getPosiData().then((res) => {
      this.titlePosition = res.name
    });
    ((async () => {
      let res2 = await getIndexEntryData()
      console.log(res2)
    })());
    ((async () => {
      let res = await getRestaurantsData()
      console.log(res)
    }))



  }
}
</script>

<style lang="less">
#home {
  .van-nav-bar {
    background: skyblue;
  }

  .van-nav-bar,
  .van-nav-bar__title,
  .van-nav-bar__right,
  .van-nav-bar__left,
  .van-nav-bar .van-icon {
    color: white;
    font-size: 0.3rem;
  }
}

h1 {
  width: 3.75rem;
  height: 1rem;
  background: skyblue;
  font-size: 0.5rem;
  line-height: 1rem;
}
</style>
