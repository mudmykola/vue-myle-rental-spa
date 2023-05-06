<template>
  <div class=" container-x">
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
</style>