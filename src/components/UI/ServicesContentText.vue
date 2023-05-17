<template>
  <div class="services-content__box flex items-center justify-between pt-20" v-for="item in GET_SERVICES_TITLE"
    :key="item.id">
    <div class="services-content__text w-444">
      <div class="services-content__title flex items-center justify-between pb-5">
        <h2 class="text-32 leading-36 text-c100 font-font-eb">
          {{ item.title }}
        </h2>
        <img :src="require('/src/assets/image/' + item.icon)" :alt="item.altIcon" />
      </div>
      <p class="text-16 leading-18 font-font-r opacity-50">
        {{ item.text1 }}
      </p>
      <p class="text-16 leading-18 font-font-r opacity-50">
        {{ item.text2 }}
      </p>
      <p class="text-16 leading-18 font-font-r opacity-50">
        {{ item.text3 }}
      </p>
      <p class="text-16 leading-18 font-font-r opacity-50">
        {{ item.text4 }}
      </p>
    </div>
    <div class="services-content__image">
      <img class="hover:skew-y-3" :src="require('/src/assets/image/' + item.img)" :alt="item.altImg" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheServicesContentText",
  computed: {
    ...mapGetters(["GET_SERVICES_TITLE"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.services-content {
  &__box {
    p+p {
      margin-top: 10px;
    }
  }

  &__image {
    img {
      @extend %htrans;

      &:hover {
        @extend %htrans;
      }
    }
  }
}

// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
  .services-content {

    &__box {
      width: 290px;
      flex-direction: column;
      margin: 0 auto;
    }

    &__text {
      max-width: 290px;
      text-align: left;

      p {
        font-size: 16px;
        line-height: 18px;
      }

    }

    &__title {
      display: flex;
      justify-content: space-between;
    }

    &__image {
      margin-top: 50px;
    }

  }
}
</style>