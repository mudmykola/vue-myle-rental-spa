<template>
  <div>
    <Header />
    <About />
    <Slider />
    <Services />
    <Features />
    <Promo />
    <Pricing />
    <Work />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Slider from "@/components/Slider.vue";
import Services from "@/components/Services.vue";
import Features from "@/components/Features";
import Promo from "@/components/Promo.vue";
import Pricing from "@/components/Pricing.vue";
import Work from '@/components/Work'

export default {
  name: "TheHome",
  components: {
    Header,
    About,
    Services,
    Features,
    Slider,
    Promo,
    Pricing,
    Work,
  },
};
</script>
