<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper ref="hSwiper" :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import { getHomeData } from "network/api/home/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeData().then(result => {
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    });
  },
  methods: {
    swiperLoaded() {
	  }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

