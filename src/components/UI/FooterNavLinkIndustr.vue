<template>
<div>
  <ul>
    <li v-for="item in footerNavLinkIndustr" :key="item.id">
      <a :href="item.url">{{item.name}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "FooterNavLinkIndustr",
  data() {
    return {
      footerNavLinkIndustr: [
        {
          id: 1,
          name: 'Transit',
          url: '/',
        },
        {
          id: 2,
          name: 'NEMT',
          url: '/',
        },
        {
          id: 3,
          name: 'Elite',
          url: '/',
        },
        {
          id: 4,
          name: 'Delivery',
          url: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss">

</style>