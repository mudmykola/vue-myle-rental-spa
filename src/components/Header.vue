<template>
  <div class="header" :style="bg">
    <div class="container-x">
      <div class="pt-4">
        <Navigation />
      </div>
      <div class="header-content">
        <HeaderContent
          :subtitle="headerContentSubTitle"
          :title="headerContentTitle"
          :desc="headerContentDesc"
          :btn="headerContentBtn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/assets/image/bg.png";
import Navigation from "@/components/UI/Navigation.vue";
import HeaderContent from "@/components/UI/HeaderContent.vue";

export default {
  name: "TheHeader",
  components: {
    Navigation,
    HeaderContent,
  },
  props: {
    headerContentSubTitle: {
      type: String,
      required: true,
      default: "Car Rental",
    },
    headerContentTitle: {
      type: String,
      required: true,
      default: "Rent ADA Compliant Wheelchair Accessible Vehicle’s Nationwide",
    },
    headerContentDesc: {
      type: String,
      required: true,
      default:
        "Various ADA compliant wheelchair accessible vehicles available for rent nationwide.",
    },
    headerContentBtn: {
      type: String,
      required: true,
      default: "Inquire Now",
    },
  },
  computed: {
    bg() {
      return {
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.header {
  height: 740px;
  max-height: 100%;
  width: 100%;
}
</style>
