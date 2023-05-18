<template>
  <div class="contacts-content__text">
    <h2 class="text-40 leading-44 font-font-eb pb-10">{{ title }}</h2>
    <div class="contacts-content__text--mail">
      <p class="text-c900 text-14 leading-18 font-font-m pb-1">{{ subMail }}</p>
      <a class="font-font-b text-16 leading-18 hover:opacity-30" :href="mailToUrl">{{ link }}</a>
    </div>
    <div class="contacts-content__text--phone pt-8 mb-4">
      <p class="text-c900 text-14 leading-18 font-font-m pb-1">{{ phoneSub }}</p>
      <a class="font-font-b text-16 leading-18 hover:opacity-30" :href="numToUrl">{{ phoneNum }}</a>
    </div>
    <span class=" text-14 leading-18 text-c100 opacity-30">{{ desc }}</span>
    <LinkButton class=" mt-6 flex items-center w-350" :url="linkUrl" :text="linkText">
      <template #icon>
        <svg-icon class="pr-2" type="mdi" :path="path"></svg-icon>
      </template>
    </LinkButton>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiPhone} from '@mdi/js';

export default {
  name: 'ContactsContentText',
  data() {
    return {
      path: mdiPhone,
    };
  },
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subMail: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    contactsMailUrl: {
      type: String,
      required: true,
      default: 'rentyourcar@gmail.com',
    },
    phoneSub: {
      type: String,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    phoneNumLink: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    linkText: {
      default: 'Inquire Now',
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
      default: 'http://google.com',
    },

  },
  computed: {
    mailToUrl() {
      return `mailto:${this.contactsMailUrl}`;
    },
    numToUrl() {
      return `tel:${this.phoneNumLink}`;
    }
  },
};
</script>
<style lang="scss" scoped>
@use "src/styles/variables" as var;
.contacts-content__text {
  a {
    @extend %dtrans;
    &:hover {
      @extend %htrans;
    }
  }
}

// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
  .contacts-content{
    &__text{
      margin-top: 30px;
    }
  }

}
</style>