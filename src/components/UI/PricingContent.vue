<template>
  <div>
    <h2 class="pricing-content text-center font-font-eb text-40 leading-44 text-c100 pb-10 ">{{ title }}</h2>
  </div>
  <div class="pricing-content__list">
    <PricingContentList />
  </div>
</template>

<script>


export default {
  name: 'ThePricingContent',

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
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
.pricing-content{
  max-width: 290px;

}

}
</style>