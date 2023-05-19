<template>
  <div>
    <h2 class="about-content__title text-center text-40 leading-44 font-font-eb pb-6">{{
        title
      }}</h2>
    <p class="about-content__desc text-center opacity-50 text-14 leading-18 ">{{
        desc
      }}</p>
  </div>

</template>

<script>
export default {
  name: "AboutContent",
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