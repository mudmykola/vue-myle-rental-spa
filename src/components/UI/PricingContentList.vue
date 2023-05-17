<template>
    <div class="pricing-box">
        <ul class="pricing-box__list grid grid-cols-3">
            <li class="pricing-box__item relative text-center cursor-pointer  w-350  hover:scale-105" v-for="item in
            GET_PRICING_LIST"
                :key="item.id">
                <img class="m-auto absolute  bottom-32 left-40" :src="require('/src/assets/image/svg/' + item.img)"
                    :alt="item.alt">
                <div class="pricing-box__text bg-default rounded-8 pt-8">
                    <h2 class="text-c900 font-font-eb text-32 leading-36 pb-2 pt-4">{{ item.price }}</h2>
                    <p class=" text-16 leading-18 font-font-eb text-c100 pb-11">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PricingContentList',
    computed: {
        ...mapGetters(['GET_PRICING_LIST']),
    },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.pricing-box {
    ul {
        li {
            @extend %dtrans;

            &:hover {
                @extend %htrans;
                @extend %border-ef;
            }
        }
    }
}

// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
.pricing-box{
  ul{
    grid-template-columns: repeat(1,1fr);
    gap:50px;
    li{
      width: 100%;

    }
  }
  &__item{
    img{
      left: 7rem;
    }
  }
}

}
</style>