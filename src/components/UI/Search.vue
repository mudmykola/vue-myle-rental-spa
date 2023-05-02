<template>
  <div class="search-wrapper relative">
    <div class="search-icon cursor-pointer"
         @click="toggleSearch">
      <img :src="icon.img"
           :alt="icon.alt">
    </div>
    <div
        class="search-container absolute  top-0 right-0 hidden border-none z-50"
        v-show="showSearch">
      <input class="text-default outline-c400 "
             type="text"
             v-model="searchQuery"
             @input="search"
             ref="searchInput">
    </div>
  </div>
</template>

<script>
import SearchIcon from "/src/assets/image/svg/search.svg"


export default {
  name: "TheSearch",
  components: {},
  data() {
    return {
      icon: {
        img: SearchIcon,
        alt: 'search',
      },
      showSearch: false,
      searchQuery: '',
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
          document.addEventListener('click', this.closeSearch);
        });
      } else {
        document.removeEventListener('click', this.closeSearch);
      }
    },
    search() {
      console.log('Search query:', this.searchQuery);
    },
    closeSearch(event) {
      if (!this.$el.contains(event.target)) {
        this.showSearch = false;
        document.removeEventListener('click', this.closeSearch);
      }
    }
  }

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

</style>