<template>
  <div>
    <Header />
    <About />
    <Services />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
export default {
  name: "TheHome",
  components: {
    Header,
    About,
    Services,
  },
};
</script>
