<template>
  <div class="container-x">
    <div class="features-content__box text-default flex items-center justify-between">
      <div class="features-content__text w-w-470">
        <h2 class="text-32 leading-36 font-font-eb pb-4">{{ title }}</h2>
        <p class="text-16 leading-18 font-font-r opacity-50 pb-6">{{ desc }}</p>
        <ul>
          <li class="text-16 leading-18 font-font-r opacity-50" v-for="item in GET_FEATURES_LIST" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
        <Button class="mt-10" :text="btnText" :url="btnUrl" />
      </div>

      <div class="features-content__image" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="150"
        data-aos-once="false" data-aos-mirror="true" data-aos-duration="1500" data-aos-anchor="services">
        <img :src="featuresImg.img" :alt="featuresImg.alt" />
      </div>
    </div>


  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Button from "./Button.vue";
import FeaturesImage from "@/assets/image/features-img-car.webp";

export default {
  name: "TheFeaturesContent",
  components: {
    Button,
  },
  data() {
    return {
      featuresImg: {
        img: FeaturesImage,
        alt: "features-img",
        type: Object,
        required: true,
      },
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
      default: "Call For Rent",
    },
    btnUrl: {
      type: String,
      required: true,
      default: "https://google.com",
    },
  },
  computed: {
    ...mapGetters(["GET_FEATURES_LIST"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {
  .features {
    &-content {
      &__box {
        width: 450px;
        flex-direction: column;
      }
      &__text{
        max-width: 450px;
      }
      &__image{
        margin-top: 50px;
      }
    }
  }
}

// 320
@media (max-width: 320px) {
  .features {
    &-content {
      &__box {
        width: 290px;
        flex-direction: column;
      }
      &__text{
        max-width: 290px;
      }
      &__image{
        margin-top: 50px;
      }
    }
  }

}
</style>