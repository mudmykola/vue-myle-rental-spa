<template>
  <div class="navigation bg-c100 h-16 flex items-center rounded-8">
    <div class="navigation-left__box flex items-center">
      <div class="navigation-logo flex items-center pl-4 pr-4">
        <a :href="logo.logoLink">
          <img :src="logo.img"
               :alt="logo.altLogo">
        </a>
      </div>
      <nav class="navigation-menu">
        <ul class="flex items-center gap-8 pl-8">
          <li v-for="item in links"
              :key="item.id">
            <a class="text-c200 hover:text-default"
               :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="navigation-right__box">

    </div>

  </div>
</template>

<script>
import Logo from '@/assets/image/logo.svg'

export default {
  name: "TheNavigation",
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
}
</style>