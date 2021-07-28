<template>
    <div class="card-section">
        <div class="card-section__image" :style="{'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.5)), url(' + require(`@/assets/${card.image}`) + ')'}">
            <div class="tag">
                <p class=" tag__text">{{card.tag}}</p>
            </div>

        </div>
        <div class="card-section__title">
            <h5>{{card.name}}</h5>
        </div>
        <div class="card-section__description">
            {{card.description}}
        </div>
        <div class="card-section__footer">
            <div class="date">{{card.date}}</div>
            <div class="like">
                <div class="like__image" v-on:click="increment(card)" :style="{'background-image': 'url(' + require(`@/assets/like.png`) + ')'}"> </div>
                <div>{{card.like}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {CARDS_INCREMENT_LIKE_ACTION} from "@/constants/vuex/actions-names";

    export default {
        name: "SectionCard",
        props: {
            card: {
                type: Object,
                default: () => {
                }
            }
        },
        methods: {
            async increment(element){                
                await this.$store.dispatch(CARDS_INCREMENT_LIKE_ACTION,element)
            },
        }
    }
</script>

 <style lang="scss">
    .card-section {
        width: 450px;
        height: 450px;
        margin: 10px;
        background: #FFFFFF;
        border-radius: 4px;

        .card-section__image {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 60%;
            background-size: cover;
            margin: 10px;

            .tag {
                width: 102px;
                height: 33px;
                margin: 10px 8px;
                border-radius: 4px;
                background: rgba(141, 190, 80, 0.5);
                backdrop-filter: blur(10px);                
                color: #FFFFFF;
                text-align: center;
                font-family: Ubuntu;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 22px;

                .tag__text{
                    margin-top: 6px;

                    &::before {
                        content: "#";
                    }
                }
            }  
        }

        .card-section__title{
            text-align: justify;
            margin: 10px;
        }

        .card-section__description{
                margin: 20px 10px 20px 10px;
                text-align: justify;
                font-family: Ubuntu;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 22px;
                color: #666565;
        }

        .card-section__footer{
            display: flex;
            justify-content: space-between;
            margin: 10px;

            .date{
                font-family: Ubuntu;
                font-style: italic;
                font-weight: normal;
                font-size: 13px;
                line-height: 22px;
                color: #909599;
            }
            .like{
                display: flex;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 22px;
                color: #909599;

                .like__image{
                    margin-top: 5px;
                    margin-right: 10px;
                    height: 13px;
                    width: 15px;
                    background-size: cover;
                }
            }
        }
   }

   h5{
        margin: 20px 0px 10px 0px;

        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #000000;

   }

   .card-section {
        @media screen and (max-width: 972px) {
            width: 100%;
        }
   }

   
 </style>
