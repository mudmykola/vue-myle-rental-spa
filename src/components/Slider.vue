<template>
  <div class="container-x ">
    <SliderContent
      :title="sliderTitle"
      :desc="sliderDesc"
      :icon="sliderIcon"
      :altIcon="sliderIconAlt"
    />
  </div>
</template>

<script>
import SliderContent from "@/components/UI/SliderContent";
import SliderIconTitle from "@/assets/image/svg/slider-icon-1.svg";

export default {
  name: "TheSlider",
  components: {
    SliderContent,
  },

  props: {
    sliderTitle: {
      type: String,
      required: true,
      default: "Fleet Inventory ",

      altIon: "slider-icon-1",
    },
    sliderDesc: {
      type: String,
      required: true,
      default:
        "We offer ADA compliant wheelchair accessible vehicles with different builds to accommodate groups of various sizes. Our fleet includes the Chrysler Pacifica and Toyota SiennaTravel with ease and comfort!",
    },
    sliderIcon: {
      type: Object,
      required: true,
      default: SliderIconTitle,
    },
    sliderIconAlt: {
      type: String,
      required: true,
      default: "slider-icon-1",
    },
  },
};
</script>

<style lang="scss"></style>