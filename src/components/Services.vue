<template>
  <div id="services" class="services container-x">
    <ServicesContent/>
  </div>
</template>

<script>
import ServicesContent from "./UI/ServicesContent.vue";

export default {
  name: "TheServices",
  components: {
    ServicesContent,
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
  .container-x{
    width: 600px;
  }
}

// 480
@media (max-width: 480px) {
  .container-x{
    width: 480px;
  }
}

// 320
@media (max-width: 320px) {
  .container-x{
    width: 320px;
  }
  .services {

    &-content {

      &__title {
        flex-direction: column;
      }
    }
  }

}
</style>