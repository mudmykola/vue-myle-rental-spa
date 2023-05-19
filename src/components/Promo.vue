<template>
  <div class="promo container-x">
    <PromoContent :title="promoTitle"
                  :image="promoImage"/>
  </div>
</template>

<script>
import PromoContent from "@/components/UI/PromoContent.vue";
import PromoImg from '@/assets/image/promo-img.webp';

export default {
  name: "ThePromo",
  components: {
    PromoContent,
  },
  data() {
    return {
      promoImage: {
        img: PromoImg,
        alt: 'promo-img',
      }
    }
  },
  props: {
    promoTitle: {
      type: String,
      required: true,
      default: 'See inside a 2023 Chrysler Pacifica - Wheelchair Accessible & ADA Compliant'
    },

  }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {
  .promo {
    width: 740px;
  }
}

// 600
@media (max-width: 600px) {
  .promo {
    width: 570px;
  }
}

// 480
@media (max-width: 480px) {
  .promo {
    width: 450px;
  }
}

// 320
@media (max-width: 320px) {
  .promo {
    width: 290px;
  }

}
</style>