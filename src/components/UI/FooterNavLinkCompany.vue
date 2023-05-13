<template>
<div>
  <ul>
    <li v-for="item in footerNavLinkCpmpany" :key="item.id">
      <a :href="item.url">{{item.name}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "FooterNavLinkCompany",

  data() {
    return {
      footerNavLinkCpmpany: [
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

</style>