<script setup>
import TopNav from '../components/home/TopNav.vue'
import SwipeTop from '../components/home/SwipeTop.vue';
import IconList from '../components/home/IconList.vue';
import SwipeSmall from '../components/home/SwipeSmall.vue';
import LiveList from '../components/home/LiveList.vue'
import LikeList from '../components/home/LikeList.vue';
import BottomNav from '../components/home/BottomNav.vue';
</script>

<template>
  <div class="home">
    <TopNav />
    <SwipeTop />
    <IconList />
    <SwipeSmall />
    <LiveList />
    <LikeList />
    <BottomNav />
  </div>
</template>

<style>
 .home{
  padding-bottom: 1.4rem;
 }
</style>
