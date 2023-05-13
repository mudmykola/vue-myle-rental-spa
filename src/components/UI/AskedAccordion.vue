<template>
  <div >
    <ul >
      <li :class="{ active: isOpen }" class="asked-content__item  m-auto  ">
        <div
            class="asked-content__accordion   cursor-pointer text-16 leading-18 font-font-b bg-c102 w-445 rounded-8 pt-4 pb-4 pl-4 pr-4 flex items-center justify-between"
            @click="toggle">
          {{ item.title }}
          <svg-icon :class="{ 'is-rotated': isOpen }" type="mdi" :path="path"></svg-icon>
        </div>
        <div
            ref="desc"
            class="asked-content__desc w-445 bg-c102 mt-4 pt-4 pb-4 pr-4 pl-4 rounded-8 text-14 leading-18 font-font-m"
            v-show="isOpen">
          {{ item.desc }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {mdiChevronDown} from '@mdi/js';

export default {
  name: 'AskedAccordion',
  components: {
    SvgIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      path: mdiChevronDown,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      if(this.isOpen){
        this.$nextTick (() =>{
          this.$refs.desc.classList.add('open');
        });
      }else {
        this.$refs.desc.classList.remove('open');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.asked-content__accordion--desc{
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-out;
  &.open{
    height: auto;
  }
}
svg-icon {
  transition: transform 0.5s ease-in-out;
}

.is-rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
</style>