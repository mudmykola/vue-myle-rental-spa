<template>
  <div class="slider container-x ">
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

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {
}

// 600
@media (max-width: 600px) {
  .slider{
    width: 600px;
    &-prev{
      left: 10px;
    }
    &-next{
      right: 10px;
    }
  }
}

// 480
@media (max-width: 480px) {
  .slider{
    width: 480px;
    &-prev{
      left: 10px;
    }
    &-next{
      right: 10px;
    }
  }
}

// 320
@media (max-width: 320px) {
.slider{
  width: 320px;
  &-prev{
    left: 10px;
  }
  &-next{
    right: 10px;
  }
}

}
</style>