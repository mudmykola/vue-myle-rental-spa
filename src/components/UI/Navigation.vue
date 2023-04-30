<template>
  <div class="navigation bg-c100 h-16 flex items-center rounded-8" >
    <ul class="flex items-center pl-4 pr-4 ">
      <li>
        <a :href="logo.logoLink">
          <img :src="logo.img"
               :alt="logo.altLogo">
        </a>
      </li>
    </ul>


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
      }
    }
  },
}
</script>

<style lang="scss">

</style>