<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getBannerData } from '@/api/data'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  async mouted() {
    let result = await getBannerData()
  }
}
</script>
