<template>
  <div>
    <Header />
    <About />
    <Services />
    <Features />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Features from "@/components/Features";
export default {
  name: "TheHome",
  components: {
    Header,
    About,
    Services,
    Features,
  },
};
</script>
