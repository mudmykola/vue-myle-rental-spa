<template>
  <div class="header-content__box flex items-start justify-between mt-48 ">
    <div class="header-content__text text-default w-513" data-aos="fade-right" data-aos-easing="linear"
      data-aos-duration="1500">
      <h3 class=" text-c800 font-font-eb pb-3">{{ subtitle }}</h3>
      <h1 class="pb-4 text-32 leading-36 font-font-eb">{{ title }}</h1>
      <p class="opacity-50 font-font-r text-14 leading-18">{{ desc }}</p>
    </div>
    <div class="header-content__img relative " data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
      <div class="header-content__img--map absolute  animate-bounce ">
        <img :src="headerImageMap.img" :alt="headerImageMap.alt">
      </div>
      <img :src="headerImg.img" :alt="headerImg.alt" />
    </div>
  </div>
  <LinkButton class="w-155 text-center" :url="linkUrl" :text="linkText" />
</template>

<script>
import HeaderImg from '@/assets/image/header-img.webp';
import HeaderImgMap from '@/assets/image/svg/header-img-map.svg';
export default {
  name: "TheHeaderContent",

  data() {
    return {
      headerImg: {
        img: HeaderImg,
        alt: 'header-img',
        type: Object,
        required: true,
      },
      headerImageMap: {
        img: HeaderImgMap,
        alt: 'header-img-map',
        type: Object,
        required: true,
      },
    }
  },
  props: {
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    btn: {
      type: String,
      required: true,
    },
    linkText: {
      default: 'Inquire Now',
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
      default: 'http://google.com',
    },
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.header-content__img {
  &--map {
    top: -50%;
    left: 25%;
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

}
</style>