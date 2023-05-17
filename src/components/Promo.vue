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

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
.promo{
  width: 290px;
}

}
</style>