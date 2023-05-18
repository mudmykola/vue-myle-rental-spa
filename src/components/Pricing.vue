<template>
  <div class="pricing container-x">
    <PricingContent :title="pricingTitle" />
  </div>
</template>

<script>
import PricingContent from './UI/PricingContent.vue';
export default {
  name: "ThePricing",
  components: {
    PricingContent,
  },
  props: {
    pricingTitle: {
      type: String,
      requerid: true,
      default: 'Pricing',
    }
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {
  .pricing{
    width: 480px;
  }
}

// 320
@media (max-width: 320px) {
  .pricing{
    width: 290px;
  }

}
</style>