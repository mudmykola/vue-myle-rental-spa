<template>
  <div class="bg-c100 pt-11 pb-11 mt-32">
    <FeaturesContent :title="featuresTitle" :desc="featuresDesc" />
  </div>
</template>

<script>
import FeaturesContent from "./UI/FeaturesContent.vue";
export default {
  name: "TheFeatures",
  components: {
    FeaturesContent,
  },
  props: {
    featuresTitle: {
      type: String,
      required: true,
      default: "Wheelchair Vans in Our Fleet",
    },
    featuresDesc: {
      type: String,
      required: true,
      default:
        "ADA compliant wheelchair accessible vehicles of different builds accommodating various group sizes (Chrysler Pacifica, Toyota SIenna or similar)",
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>
