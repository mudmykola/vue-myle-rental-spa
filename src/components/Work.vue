<template>
    <div id="work" class="work bg-default mt-32 mb-32">
        <WorkContent />

    </div>
</template>

<script>
export default {
    name: 'TheWork',

}
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
  .work{

  }

}

</style>