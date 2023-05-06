<template>
<div class="mt-32 mb-32">
  <h2 class=" text-center font-font-eb text-40 leading-44 text-c100 pb-9">{{title
    }}</h2>
  <img  :src="image.img" :alt="image.alt" />
</div>
</template>

<script>
export default {
  name: "ThePromoContent",
  props: {
    title:{
      type:String,
      required: true,
    },
    image: {
      type: Object,
      required: true
    },
    alt:{
      type: Object,
      required: true
    },
  },
}
</script>

<style  lang="scss">
@use "src/styles/variables" as var;
</style>