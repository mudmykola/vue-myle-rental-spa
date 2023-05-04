<template>
  <div class="service-content__box">
    <ServicesContentText />
    <ServicesContentImage />
  </div>
</template>

<script>
import ServicesContentImage from "./ServicesContentImage.vue";
import ServicesContentText from "./ServicesContentText.vue";

export default {
  name: "TheSrtvicesContent",
  components: {
    ServicesContentText,
    ServicesContentImage,
  },
};
</script>

<style lang="scss"></style>
