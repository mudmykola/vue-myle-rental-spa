<template>
<div>
  <ul class="footer-list">
    <li  v-for="item in footerNavLinkCompany" :key="item.id">
      <a class="text-16 leading-18 opacity-50 hover:opacity-80 font-font-r" :href="item.url">{{item.name}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "FooterNavLinkCompany",

  data() {
    return {
      footerNavLinkCompany: [
        {
          id: 1,
          name: 'Ride with Myle',
          url: '/',
        },
        {
          id: 2,
          name: 'Drive With  Myle',
          url: '/',
        },
        {
          id: 3,
          name: 'Contact',
          url: '/',
        },
        {
          id: 4,
          name: 'Sales',
          url: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.footer-list{
  a{
    @extend %dtrans;
    &:hover{
      @extend %htrans;
    }
  }
  li+li{
    margin-top: 16px;
  }
}
</style>