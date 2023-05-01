<template>
  <div class="header" :style="bg">
    <div class="container-x">
      <div class="pt-4">
        <Navigation  />
      </div>
    </div>
  </div>

</template>

<script>
import bgImage from "@/assets/image/bg.png";
import Navigation from "@/components/UI/Navigation.vue";
export default {
  name: "TheHeader",
  components : {
    Navigation,
  },
  computed: {
    bg(){
      return{
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      }
    },
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.header {
  height: 100vh;
  width: 100%;
}
</style>