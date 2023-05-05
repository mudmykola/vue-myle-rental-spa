<template>
  <div class="container-x">
    <div class="features-content__box text-default w-w-470">
      <div class="features-content__text">
        <h2 class="text-32 leading-36 font-font-eb pb-4">{{ title }}</h2>
        <p class="text-16 leading-18 font-font-r opacity-50 pb-6">{{ desc }}</p>
        <ul>
          <li
            class="text-16 leading-18 font-font-r opacity-50"
            v-for="item in GET_FEATURES_LIST"
            :key="item.id"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <Button class="mt-10" :text="btnText" :url="btnUrl" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "./Button.vue";
export default {
  name: "TheFeaturesContent",
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      requered: true,
    },
    desc: {
      type: String,
      requered: true,
    },
    btnText: {
      type: String,
      required: true,
      default: "Call For Rent",
    },
    btnUrl: {
      type: String,
      required: true,
      default: "https://google.com",
    },
  },
  computed: {
    ...mapGetters(["GET_FEATURES_LIST"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>
