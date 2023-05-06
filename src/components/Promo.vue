<template>
  <div class=" container-x">
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
</style>