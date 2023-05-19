<template>
  <div class="slider-content__title text-center">
    <img class="m-auto pb-6" :src="icon" :alt="altIcon"/>
    <h2 class="font-font-eb text-32 leading-36 text-c100 pb-4  ">{{
        title
      }}</h2>
    <p class="w-920 m-auto text-16 leading-18 font-font-r opacity-50 pb-10   ">
      {{
        desc
      }}
    </p>
  </div>

  <swiper
      id="slider"
      class="slider-box"
      :navigation="{
      prevEl: prevButton,
      nextEl: nextButton,
    }"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
  >
    <swiper-slide
        class="slider-content"
        v-for="item in GET_SLIDER_IMAGE"
        :key="item.id"
    >
      <img
          class="m-auto"
          :src="require('/src/assets/image/' + item.img)"
          :alt="item.alt"
      />
    </swiper-slide>
    <div class="slider-btn flex justify-center relative">
      <button
          class="slider-prev cursor-pointer border-none absolute bottom-4 left-28 z-10 "
      >
        <img :src="sliderBtn.prev"/>
      </button>
      <button
          class="slider-next cursor-pointer border-none absolute right-28 z-10 bottom-4 "
      >
        <img :src="sliderBtn.next"/>
      </button>
    </div>
  </swiper>
</template>

<script>
import SliderPrev from "@/assets/image/svg/slider-prev.svg";
import SliderNext from "@/assets/image/svg/slider-next.svg";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import {mapGetters} from "vuex";

export default {
  name: "TheSliderContent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderBtn: {
        prev: SliderPrev,
        next: SliderNext,
      },
    };
  },
  setup() {
    const nextButton = ".slider-next";
    const prevButton = ".slider-prev";

    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      nextButton,
      prevButton,
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
    icon: {
      type: Object,
      required: true,
    },
    altIcon: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["GET_SLIDER_IMAGE"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;


// 768

@media (max-width: 768px) {
  .slider-content {
    &__title {
      width: 740px;
      text-align: center;

      img {
        margin: 0 auto;
      }

      p {
        width: 740px;
      }
    }

    .swiper-slide {
      width: 740px;
    }
  }
}

// 600
@media (max-width: 600px) {
  .slider-content {
    &__title {
      width: 570px;
      text-align: center;

      img {
        margin: 0 auto;
      }

      h2 {
        font-size: 24px;
        line-height: 28px;
      }

      p {
        font-size: 16px;
        line-height: 18px;
        width: 100%;
      }
    }

    .swiper-slide {
      width: 570px;
    }
  }

}

// 480
@media (max-width: 480px) {
  .slider-content {
    &__title {
      width: 450px;
      text-align: center;

      img {
        margin: 0 auto;
      }

      h2 {
        font-size: 24px;
        line-height: 28px;
      }

      p {
        font-size: 16px;
        line-height: 18px;
        width: 100%;
      }
    }

    .swiper-slide {
      width: 280px;
    }
  }

}

// 320
@media (max-width: 320px) {
  .slider-content {
    &__title {
      width: 280px;
      text-align: left;

      img {
        margin-left: 0;
      }

      h2 {
        font-size: 24px;
        line-height: 28px;
      }

      p {
        font-size: 16px;
        line-height: 18px;
        width: 100%;
      }
    }

    .swiper-slide {
      width: 280px;
    }
  }


}
</style>