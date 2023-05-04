<template>
  <div class="service-content__text">
    <div
      class="services-content__title font-font-eb text-c100 text-32 leading-36 pb-6 flex justify-between items-center w-444"
      v-for="item in GET_SERVICES_TITLE"
      :key="item.id"
    >
      <h2>{{ item.title }}</h2>
      <img :src="require('/src/assets/image/' + item.icon)" :alt="item.alt" />
    </div>
    <div class="services-content__list">
      <ul>
        <li v-for="list in GET_CONVENIENCE_LIST" :key="list.id">
          <p class="text-16 leading-18 text-c100 opacity-50">
            {{ list.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheServicesContentText",
  computed: {
    ...mapGetters(["GET_SERVICES_TITLE"]),
    ...mapGetters(["GET_CONVENIENCE_LIST"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.services-content__list {
  ul {
    li + li {
      padding-top: 15px;
    }
  }
}
</style>
