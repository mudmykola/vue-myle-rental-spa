<template>
  <div id="about" class="bg-default mt-32 mb-32 pt-10 pb-10">
    <div class="container-x">
      <AboutContent :title="aboutTitle" :desc="aboutDesc" />
    </div>
  </div>
</template>

<script>

export default {
  name: "TheAbout",
  props: {
    aboutTitle: {
      type: String,
      required: true,
      default: "About Us",
    },
    aboutDesc: {
      type: String,
      required: true,
      default:
        "Being an industry leader, we have recognized the difficulties encountered by our private use clients nationwide in need of a wheelchair accessible vehicle rental. We set out to provide comfortable, reliable options for you, your family, and your travel needs. We help alleviate those stresses with our wide range of ADA compliant vehicles and unique rental options.",
    },
  },

};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>