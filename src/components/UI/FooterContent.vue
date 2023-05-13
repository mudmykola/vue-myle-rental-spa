<template>
  <div class="footer-box pt-28">
    <div class="footer-box__logo">
      <img class="pb-7" :src="logo.img" :alt="logo.alt">
      <p class="font-font-r text-16 leading-18 pb-20">{{ logoDesc }}</p>
      <div class="footer-box__logo--parthner">
        <img :src="partner.img" :alt="partner.alt">
      </div>
    </div>
    <div class="footer-box__navigation">
      <div class="footer-box__navigation--indastr">
        <h2>{{ footerIndustrTitle }}</h2>
        <FooterNavLinkIndustr/>

      </div>
      <div class="footer-box__navigation--company">
        <h2>{{ footerCompanyTitle }}</h2>
        <FooterNavLinkCompany />
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'FooterContent',
  props: {
    logo: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    logoDesc: {
      type: String,
      required: true,
    },
    partner: {
      type: Object,
      required: true,
    },
    footerIndustrTitle: {
      type: String,
      required: true,
    },
    footerCompanyTitle: {
      type: String,
      required: true,
    },
  }

};
</script>

<style lang="scss" scoped></style>