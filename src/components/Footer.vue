<template>
  <div class="footer bg-c100  text-default">
    <div class=" container-x">
      <FooterContent
          :logo="footerLogo"
          :logoDesc="footerLogoDesc"
          :partner="footerPartner"
          :footerIndustrTitle="footerNavIndustrTitle"
          :footerCompanyTitle="footerNavCompanyTitle"
          :footerCopyTitle="footerCopyTitle"
      />
    </div>
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
      },

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
    footerCopyTitle: {
      type: String,
      required: true,
      default: '© Myle',
    },
  }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
.footer{
  max-width: 320px;
}

}
</style>