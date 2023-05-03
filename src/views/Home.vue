<template>
  <div>
    <Header />
    <About />
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
export default  {
  name: 'TheHome',
  components: {
    Header,
    About,
  },
}
</script>
