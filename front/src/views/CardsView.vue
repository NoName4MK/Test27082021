<template>
   <div class="card_block">
        <card 
               v-for="card in cardList"
               :card="card"
               :key="card.id"
            />
   </div>
</template>

<script>

import Card from "@/components/info_cards/Card.vue" ;
import {GET_CARDS} from "@/constants/vuex/getters-names";


export default {
    name: "CardsView",
        components: {Card},
        data() {
            return {
                page: 1,
                screenHeight: 0,
                screenWidth:0,
            }
        },
        computed: {
            cardList() {
                return this.$store.getters[GET_CARDS]
            },
        }
    
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
