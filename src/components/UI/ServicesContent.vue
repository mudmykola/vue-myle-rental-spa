<template>
  <div class="service-content__boxing ">
    <ServicesContentText/>
  </div>
</template>

<script>
import ServicesContentText from "./ServicesContentText.vue";

export default {
  name: "TheServicesContent",
  components: {
    ServicesContentText,
  },
};
</script>

<style lang="scss">
// 768

@media (max-width: 768px) {
  .service-content {
    &__boxing {
      width: 740px;
    }
  }
}

// 600
@media (max-width: 600px) {
  .service-content {
    &__boxing {
      width: 570px;
    }
  }
}

// 480
@media (max-width: 480px) {
  .service-content {
    &__boxing {
      width: 450px;
    }
  }
}

// 320
@media (max-width: 320px) {
  .service-content {
    &__boxing {
      width: 290px;
    }
  }
}
</style>