<template>
    <div class="card_block" v-if="status">
            <card 
               v-for="card in cardList"
               :card="card"
               :key="card.id"
            />
   </div>
</template>

<script>

import Card from "@/components/info_cards/Card.vue" ;
import {GET_CARDS,GET_CARDS_LENGHT} from "@/constants/vuex/getters-names";
import {FETCH_CARDS_ACTION} from "@/constants/vuex/actions-names";


export default {
    name: "CardsView",
    components: {Card},
    data() {
        return {
            page: 1,
            screenHeight: 0,
            screenWidth: 0,
        }
    },
    async created() {
        await this.getData();
    },
    computed: {
        status(){
            return GET_CARDS_LENGHT == 0 ? false : true;
        },
        cardList() {
            return this.$store.getters[GET_CARDS]
        },
    },
    methods: {    
        async getData() {
            await this.$store.dispatch(FETCH_CARDS_ACTION)
        },
  	},
    
}
</script>
<style lang="scss">
    .card_block{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin: 20px;
        
        @media screen and (max-width: 972px) {
            margin: 0px;
        }
        
    }
 </style>
