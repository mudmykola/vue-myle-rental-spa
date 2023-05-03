<template>
<div >
  <a class="  rounded-4 font-font-b text-default pt-3 pb-3 pl-9 pr-9  bg-c900"
     :href="url">{{text
    }}</a>
</div>
</template>
<script>
export default {
  name: "TheLinkButton",
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

</style>