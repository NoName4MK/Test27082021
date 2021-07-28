<template>
  <div id="app">
    <CardsView />
	<!-- <MainPageView /> -->
  </div>
</template>

<script>
import CardsView from '@/views/CardsView.vue'
// import MainPageView from '@/views/MainPageView.vue'
import {FETCH_CARDS_ACTION} from "@/constants/vuex/actions-names";


export default {
    name: 'App',
    components: {
		CardsView,
		// MainPageView,
    },
	methods: {    
		async getData() {
			await this.$store.dispatch(FETCH_CARDS_ACTION)
		},
  	},
	async created() {
		await this.getData();
	}

}
</script>

<style>
#app {
	background: #E5E5E5;
}
</style>
