<template>
  <div class=" pb-20">
    <h2 class=" text-40 leading-44 font-font-eb text-center pt-20 pb-14 ">{{ title }}</h2>
    <div class="asked-content__list grid-cols-2 grid gap-3  ">
      <AskedAccordion v-for="(item, index) in GET_ASKED_ACCORDION"
                      :key="index"
                      :item="item"/>
     </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'AskedContent',

  props: {
    title: {
      type: String,
      requerid: true,
    }
  },

  computed: {
    ...mapGetters(['GET_ASKED_ACCORDION']),
  }
};
</script>

<style lang="scss" scoped>

</style>