<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getBannerData, getUserData } from '@/api/data'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  async mounted() {
    // let result = await getBannerData()

    let result = await getUserData()
    console.log(result)

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
