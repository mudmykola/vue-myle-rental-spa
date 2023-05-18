<template>
  <div class="asked-content pb-20 ">
    <h2 class=" text-40 leading-44 font-font-eb text-center pt-20 pb-14 ">{{ title }}</h2>
    <div class="asked-content__list grid-cols-2 grid gap-3  ">
      <AskedAccordion v-for="(item, index) in GET_ASKED_ACCORDION"
                      :key="index"
                      :item="item"
      />
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'AskedContent',
  props: {
    title: {
      type: String,
      requerid: true,
    }
  },
  computed: {
    ...mapGetters(['GET_ASKED_ACCORDION']),
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
@media (max-width: 480px) {
  .asked-content{
    max-width: 480px;
    h2{
      font-size: 30px;
      line-height: 36px;
    }
    &__list{
      grid-template-columns: repeat(1,1fr);
      max-width: 450px;
    }
  }
}

// 320
@media (max-width: 320px) {
  .asked-content{
    max-width: 320px;
    h2{
      font-size: 30px;
      line-height: 36px;
    }
    &__list{
      grid-template-columns: repeat(1,1fr);
      max-width: 290px;
    }
  }

}
</style>