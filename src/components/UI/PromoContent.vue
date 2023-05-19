<template>
  <div class="promo-content mt-32 mb-32">
    <h2 class=" text-center font-font-eb text-40 leading-44 text-c100 pb-9">{{
        title
      }}</h2>
    <img class=" hover:skew-y-3" :src="image.img" :alt="image.alt"/>
  </div>
</template>

<script>
export default {
  name: "ThePromoContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true
    },
    alt: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.promo-content {
  img {
    @extend %dtrans;

    &:hover {
      @extend %htrans;
      @extend %border-ef;
    }
  }
}

// 768

@media (max-width: 768px) {
}

// 600
@media (max-width: 600px) {
  .promo-content {
    max-width: 600px;

    h2 {
      font-size: 30px;
      line-height: 36px;
    }

    img {
      height: 100%;
      margin: 0 auto;
    }
  }

}

// 480
@media (max-width: 480px) {
  .promo-content {
    max-width: 480px;

    h2 {
      font-size: 30px;
      line-height: 36px;
    }

    img {
      height: 150px;
      margin: 0 auto;
    }
  }
}

// 320
@media (max-width: 320px) {
  .promo-content {
    max-width: 290px;

    h2 {
      font-size: 30px;
      line-height: 36px;
    }

    img {
      height: 150px;
    }
  }

}
</style>