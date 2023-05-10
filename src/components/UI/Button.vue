<template>
  <div class="btn">
    <a class="leading-22 font-font-b text-default bg-gradient-to-r from-g100 to-g200 hover:from-g200 hover:to-g100  h-44 rounded-4 pt-3 pb-3 pl-4 pr-4"
      :style="{ 'font-size': fontSize, 'width': btnWidth }" :href="url" target="_blank">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      default: '20px',
    },
    btnWidth: {
      type: String,
      default: '128px',
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.btn {
  a {
    @extend %dtrans;

    &:hover {
      @extend %htrans;
      background: var.$default;
      color: var.$c100;
    }
  }
}
</style>
