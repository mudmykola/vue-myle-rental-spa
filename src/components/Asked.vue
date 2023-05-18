<template>
    <div class="asked bg-c100 text-default">
        <AskedContent class=" container-x" :title="askedTitle" />
    </div>
</template>
<script>
export default {
    name: "TheAsked",
    props: {
        askedTitle: {
            type: String,
            requerid: true,
            default: 'Frequently asked questions',
        }
    }
};
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {}

// 480
@media (max-width: 480px) {}

// 320
@media (max-width: 320px) {
  .asked{
    max-width: 320px;
  }

}
</style>