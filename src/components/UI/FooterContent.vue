<template>
  <div class="footer-box pt-28 flex justify-between ">
    <div class="footer-box__logo">
      <img class="pb-7" :src="logo.img" :alt="logo.alt">
      <p class="font-font-r text-16 leading-18 pb-20 opacity-50 ">{{
          logoDesc
        }}</p>
      <div class="footer-box__logo--parthner">
        <img :src="partner.img" :alt="partner.alt">
      </div>
    </div>
    <div class="footer-box__navigation flex ">
      <div class="footer-box__navigation--indastr pr-36">
        <h2 class="text-16 leading-18 font-font-eb text-default pb-5">{{
            footerIndustrTitle
          }}</h2>
        <FooterNavLinkIndustr/>
      </div>
      <div class="footer-box__navigation--company">
        <h2 class="text-16 leading-18 font-font-eb text-default pb-5">{{
            footerCompanyTitle
          }}</h2>
        <FooterNavLinkCompany/>
      </div>
    </div>
  </div>
  <div class="footer-copy flex items-center justify-between mt-10 pb-20">
    <h2 class="text-16 leading-18 font-font-r opacity-50">{{
        footerCopyTitle
      }}</h2>
    <div class="footer-copy__social flex items-center ">
      <ul class="flex items-center gap-8">
        <li v-for="item in socialIcon" :key="item.id">
          <a :href="item.url">
            <img class="hover:opacity-50" :src="item.img" :alt="item-alt">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import twitter from '@/assets/image/svg/twitter.svg';
import instagram from '@/assets/image/svg/instagram.svg';
import facebook from '@/assets/image/svg/facebook.svg';
import youtube from '@/assets/image/svg/youtube.svg';

export default {
  name: 'FooterContent',
  data() {
    return {
      socialIcon: [
        {
          id: 1,
          type: Object,
          img: twitter,
          alt: 'twitter-icon',
          url: '/',
        },
        {
          id: 2,
          type: Object,
          img: instagram,
          alt: 'instagram-icon',
          url: '/',
        },
        {
          id: 3,
          type: Object,
          img: facebook,
          alt: 'facebook-icon',
          url: '/',
        },
        {
          id: 4,
          type: Object,
          img: youtube,
          alt: 'youtube-icon',
          url: '/',
        },
      ]
    }
  },
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
    footerCopyTitle: {
      type: String,
      required: true,
    },
  }

};
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.footer-copy {
  ul {
    li {
      img {
        @extend %dtrans;

        &:hover {
          @extend %htrans;
        }
      }
    }
  }
}

// 768

@media (max-width: 768px) {
  .footer-box {
    padding-top: 1rem;
    max-width: 740px;
    flex-direction: column;

    &__logo {
      margin-bottom: 20px;
    }

    &__navigation {
      max-width: 768px;
      justify-content: space-between;
    }
  }
  .footer-copy {
    max-width: 740px;
    padding-bottom: 30px;
  }
}

// 600
@media (max-width: 600px) {
  .footer-box {
    padding-top: 1rem;
    max-width: 570px;
    flex-direction: column;

    &__logo {
      margin-bottom: 20px;
    }

    &__navigation {
      max-width: 600px;
      justify-content: space-between;
    }
  }
  .footer-copy {
    max-width: 570px;
    padding-bottom: 30px;
  }
}

// 480
@media (max-width: 480px) {
  .footer-box {
    padding-top: 1rem;
    max-width: 450px;
    flex-direction: column;

    &__logo {
      margin-bottom: 20px;
    }

    &__navigation {
      max-width: 480px;
    }
  }
  .footer-copy {
    max-width: 450px;
    padding-bottom: 30px;
  }
}

// 320
@media (max-width: 320px) {
  .footer-box {
    padding-top: 1rem;
    max-width: 290px;
    flex-direction: column;

    &__logo {
      margin-bottom: 20px;
    }

    &__navigation {
      max-width: 290px;

      &--indastr {
        padding-right: 6rem;
      }
    }
  }
  .footer-copy {
    max-width: 290px;
    padding-bottom: 30px;
  }

}
</style>