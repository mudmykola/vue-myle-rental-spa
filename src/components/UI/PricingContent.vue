<template>
  <div>
    <h2 class=" text-center font-font-eb text-40 leading-44 text-c100 pb-10 ">{{ title }}</h2>
  </div>
  <div>
    <PricingContentList />
  </div>
</template>

<script>

import PricingContentList from './PricingContentList.vue';
export default {
  name: 'ThePricingContent',
  components: {
    PricingContentList,
  },
  props: {
    title: {
      type: String,
      requerid: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
</style>