<template>
  <div class="navigation bg-c100 h-64 flex items-center justify-between rounded-8">
    <div class="navigation-left__box flex items-center">
      <div class="navigation-logo flex items-center pl-4 pr-4">
        <a :href="logo.logoLink">
          <img :src="logo.img" :alt="logo.altLogo">
        </a>
      </div>
      <nav class="navigation-menu">
        <ul class="flex items-center gap-8 pl-8">
          <li v-for="item in links" :key="item.id">
            <a class="text-c200 hover:text-default" :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="navigation-right__box flex items-center h-8 relative pr-4">
      <Search />
      <Button class="pl-6" :text="btnText" :url="btnUrl" />
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/image/logo.svg'
import Search from "@/components/UI/Search.vue";
import Button from "@/components/UI/Button.vue";

export default {
  name: "TheNavigation",
  components: {
    Search,
    Button,
  },
  data() {
    return {
      logo: {
        img: Logo,
        altLogo: 'logo-img',
        logoLink: '/',
        required: true,
      },
      links: [
        {
          id: 1,
          name: 'Industries',
          url: '/',
        },
        {
          id: 2,
          name: 'Technology',
          url: '/',
        },
        {
          id: 3,
          name: 'Driver weith Myle',
          url: '/',
        },
        {
          id: 4,
          name: 'Blog',
          url: '/',
        },
        {
          id: 5,
          name: 'Contact',
          url: '/',
        },
      ],
    }
  },
  props: {
    btnText: {
      type: String,
      required: true,
      default: 'Contact Sales',
    },
    btnUrl: {
      type: String,
      required: true,
      default: 'https://google.com',
    },

  },

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.navigation {
  position: relative;

  &-logo {
    &:before {
      position: absolute;
      content: '';
      border: 1px solid var.$c700;
      height: 70%;
      left: 8%;
    }
  }

  &-menu {
    a {
      position: relative;

      &:after {
        position: absolute;
        content: '';
        width: 0%;
        border-bottom: 1px solid var.$default;
        left: 0;
        bottom: -3px;
        @extend %dtrans;
      }

      @extend %dtrans;

      &:hover {
        @extend %htrans;

        &:after {
          width: 100%;
        }

        @extend %htrans;
      }
    }
  }

  &-right__box {
    &:after {
      position: absolute;
      content: '';
      border: 1px solid var.$c700;
      height: 100%;
      left: -25px;
    }
  }
}</style>