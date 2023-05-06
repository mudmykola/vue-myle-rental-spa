<template>
  <div class="slider-content__title text-center">
    <img class="m-auto pb-6" :src="icon" :alt="altIcon" />
    <h2 class="font-font-eb text-32 leading-36 text-c100 pb-4">{{ title }}</h2>
    <p class="w-920 m-auto text-16 leading-18 font-font-r opacity-50 pb-10">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TheSliderContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
    altIcon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>
