<template>
  <div class="bg-c100 text-default">
    <FooterContent class="container-x"
                   :logo="footerLogo"
                   :logoDesc="footerLogoDesc"
                   :partner="footerPartner"
                   :footerIndustrTitle="footerNavIndustrTitle"
                   :footerCompanyTitle="footerNavCompanyTitle"
    />
  </div>
</template>

<script>
import FooterLogo from '@/assets/image/logo.svg';
import FooterPartner from '@/assets/image/parthner-img.webp';

export default {
  name: "TheFooter",
  data() {
    return {
      footerLogo: {
        img: FooterLogo,
        alt: 'footer-logo',
      },
      footerPartner: {
        img: FooterPartner,
        alt: 'footer-partner',
      }
    };
  },
  props: {
    footerLogoDesc: {
      type: String,
      required: true,
      default: 'We think about logistics, so you don’t have to.',
    },
    footerNavIndustrTitle: {
      type: String,
      required: true,
      default: 'Industries Served',
    },
    footerNavCompanyTitle: {
      type: String,
      required: true,
      default: 'Company',
    },
  }
}
</script>

<style lang="scss"></style>