<template>
  <div class="header" :style="bg">
    <div class="container-x header-container">
      <div class="pt-4 header-box ">
        <Navigation class="navigation"/>
        <BurgerMenu class="navigation-burger__menu" :logo="burgerLogo"/>
      </div>
      <div class="header-content">
        <HeaderContent :subtitle="headerContentSubTitle" :title="headerContentTitle" :desc="headerContentDesc"
                       :btn="headerContentBtn"/>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "@/assets/image/bg.png";
import Navigation from "@/components/UI/Navigation.vue";
import HeaderContent from "@/components/UI/HeaderContent.vue";
import Logo from '@/assets/image/logo.svg';

export default {
  name: "TheHeader",
  components: {
    Navigation,
    HeaderContent,
  },
  data() {
    return {
      burgerLogo: {
        logoImg: Logo,
        logoAlt: 'logo-burger',

      },

    }
  },
  props: {
    headerContentSubTitle: {
      type: String,
      required: true,
      default: "Car Rental",
    },
    headerContentTitle: {
      type: String,
      required: true,
      default: "Rent ADA Compliant Wheelchair Accessible Vehicle’s Nationwide",
    },
    headerContentDesc: {
      type: String,
      required: true,
      default:
          "Various ADA compliant wheelchair accessible vehicles available for rent nationwide.",
    },
    headerContentBtn: {
      type: String,
      required: true,
      default: "Inquire Now",
    },
    fontSize: {
      type: String,
      default: '14px',
    }
  },
  computed: {
    bg() {
      return {
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.header {
  height: 740px;
  max-height: 100%;
  width: 100%;
}

.navigation {
  &-burger__menu {
    display: none;
  }
}


// 768

@media (max-width: 768px) {
  .navigation {
    display: none;
  }
  .header {
    height: 700px;

    &-container {
      width: 768px;

    }

    &-box {
      width: 100%;
      margin: 0 auto;
    }

    &-content {
      &__box {
        margin-top: 32px;
        flex-direction: column;
      }

      &__text {
        width: 100%;
      }

      &__img {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: center;

        &--map {
          top: -23%;
          img {
            width: 70%;
            margin: 0 auto;
          }
        }

      }

      &__link {
        width: 100%;

        margin-top: 24px;

        a {

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

// 600
@media (max-width: 600px) {
  .navigation {
    display: none;
  }
  .header {
    height: 700px;

    &-container {
      width: 600px;

    }

    &-box {
      width: 100%;
      margin: 0 auto;
    }

    &-content {
      &__box {
        margin-top: 32px;
        flex-direction: column;
      }

      &__text {
        width: 100%;

        h3 {
          font-size: 12px;
          line-height: 16px;
        }

        h1 {
          font-size: 24px;
          line-height: 28px;
        }

        p {
          font-size: 14px;
          line-height: 18px;
        }
      }

      &__img {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: center;

        &--map {
          top: -23%;

          img {
            width: 70%;
            margin: 0 auto;
          }
        }

        //display: none;
      }

      &__link {
        width: 100%;

        margin-top: 24px;

        a {

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

// 480
@media (max-width: 480px) {
  .navigation {
    display: none;
  }
  .header {
    height: 415px;

    &-container {
      width: 480px;
    }

    &-box {
      width: 100%;
      margin: 0 auto;
    }

    &-content {
      &__box {
        margin-top: 32px;
        flex-direction: column;
      }

      &__text {
        width: 100%;

        h3 {
          font-size: 12px;
          line-height: 16px;
        }

        h1 {
          font-size: 24px;
          line-height: 28px;
        }

        p {
          font-size: 14px;
          line-height: 18px;
        }
      }

      &__img {
        display: none;
      }

      &__link {
        width: 100%;

        margin-top: 24px;

        a {

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

// 320
@media (max-width: 320px) {
  .navigation {
    display: none;
  }
  .header {
    height: 500px;

    &-container {
      width: 320px;
    }

    &-box {
      width: 100%;
      margin: 0 auto;
    }

    &-content {
      &__box {
        margin-top: 32px;
        flex-direction: column;
      }

      &__text {
        width: 100%;

        h3 {
          font-size: 12px;
          line-height: 16px;
        }

        h1 {
          font-size: 24px;
          line-height: 28px;
        }

        p {
          font-size: 14px;
          line-height: 18px;
        }
      }

      &__img {
        display: none;
      }

      &__link {
        width: 100%;

        margin-top: 24px;

        a {

          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>