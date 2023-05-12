<template>
  <div class="bg-c100 text-default">
    <FooterContent class="container-x" :logo="footerLogo" :logoDesc="footerLogoDesc" />
  </div>
</template>

<script>
import FooterLogo from '@/assets/image/logo.svg';
export default {
  name: "TheFooter",
  data() {
    return {
      footerLogo: {
        img: FooterLogo,
        alt: 'footer-logo',
      },

    };
  },
  props: {
    footerLogoDesc: {
      type: String,
      required: true,
      default: 'We think about logistics, so you don’t have to.',
    }
  }
}
</script>

<style lang="scss"></style>