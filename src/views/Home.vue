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
    <!-- 轮播图 -->
    <swipe
      class="my-swipe"
      :loop="false"
      :autoplay="3000"
      indicator-color="grey"
      :show-indicators="true"
    >
      <Swipe-item>
        <Grid>
          <Grid-item v-for="(item,index) in swiperList1" :key="index">
            <van-image
              width="0.84rem"
              height="0.84rem"
              class="gridIcon"
              fit="cover"
              :src="'https://fuss10.elemecdn.com'+item.image_url"
            />
            <span>{{item.title}}</span>
          </Grid-item>
        </Grid>
      </Swipe-item>
      <Swipe-item>
        <Grid>
          <Grid-item v-for="(item,index) in swiperList2" :key="index">
            <van-image
              width="0.84rem"
              height="0.84rem"
              class="gridIcon"
              fit="cover"
              :src="'https://fuss10.elemecdn.com'+item.image_url"
            />
            <span>{{item.title}}</span>
          </Grid-item>
        </Grid>
      </Swipe-item>
    </swipe>

    <ShopList :shopListArr="shopListArr"></ShopList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getBannerData, getUserData, getPosiData, getIndexEntryData, getRestaurantsData }
  from '@/api/data';
import { NavBar, Icon, Swipe, SwipeItem, Grid, GridItem, Image } from 'vant';
import ShopList from '@/components/ShowList.vue'
// import Button from 'vant/lib/button';


export default {
  name: 'Home',
  components: {
    NavBar,
    Icon,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    vanImage: Image,
    ShopList
  },
  data() {
    return {
      titlePosition: "",
      swiperList1: [],
      swiperList2: [],
      shopListArr: []

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
      this.titlePosition = res.name;
    });

    ((async () => {
      let res2 = await getIndexEntryData()
      // console.log(res2)
      this.swiperList1 = res2.slice(0, 8);
      this.swiperList2 = res2.slice(8, 16);
    })());

    getRestaurantsData().then((res) => {
      this.shopListArr = res
      // console.log(res)
    })

  }

}

</script>

<style lang="less">
html {
  height: 100vh;
  width: 100vw;
}
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

  .van-swipe-item {
    height: 7.5rem;
  }
}

h1 {
  width: 3.75rem;
  height: 1rem;
  background: skyblue;
  font-size: 0.5rem;
  line-height: 1rem;
}

.my-swipe {
  height: 3.6rem;
}
</style>
