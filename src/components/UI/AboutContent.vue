<template>
  <h2 class="text-center text-40 leading-44 font-font-eb pb-6">{{title}}</h2>
  <p class="text-center opacity-50 text-14 leading-18 ">{{desc}}</p>
</template>

<script>
export default {
  name: "TheAboutContent",
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>