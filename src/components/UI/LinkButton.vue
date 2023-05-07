<template>
  <div class="link-btn">
    <a class="  rounded-4 font-font-b text-default hover:bg-default hover:text-c100 pt-3 pb-3 pl-9 pr-9  bg-c900"
      :href="url">{{
        text
      }}</a>
  </div>
</template>
<script>
export default {
  name: "LinkButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.link-btn {
  a {
    @extend %dtrans;

    &:hover {
      @extend %htrans;
    }
  }
}
</style>