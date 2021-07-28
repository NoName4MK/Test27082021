<template>
  <div id="app">
    <CardsView />
	<!-- <MainPageView /> -->
  </div>
</template>

<script>
import CardsView from '@/views/CardsView.vue'
// import MainPageView from '@/views/MainPageView.vue'


export default {
    name: 'App',
    components: {
		CardsView,
		// MainPageView,
    },
}
</script>

<style>
#app {
	background: #E5E5E5;
}
</style>
