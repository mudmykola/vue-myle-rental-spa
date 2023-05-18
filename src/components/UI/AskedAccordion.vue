<template>
  <div class="asked-accordion m-auto">
    <ul>
      <li :class="{ active: isOpen }" class="asked-content__item  ">
        <div
            class="asked-content__accordion hover:shadow-border-ef-2 hover:transition duration-700 ease-in-out   cursor-pointer text-16 leading-18 font-font-b bg-c102 w-445 rounded-8 pt-4 pb-4 pl-4 pr-4 flex items-center justify-between"
            @click="toggle">
          {{
            item.title
          }}
          <svg-icon :class="{ 'is-rotated': isOpen }" type="mdi" :path="path"></svg-icon>
        </div>
        <div
            ref="desc"
            class="asked-content__desc w-445 bg-c102 mt-4 pt-4 pb-4 pr-4 pl-4 rounded-8 text-14 leading-18 font-font-m"
            v-show="isOpen"
            @click.stop="toggleDesc"
        >
          {{
            item.desc
          }}
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
      if (this.isOpen) {
        this.$nextTick(() => {
          this.$refs.desc.classList.add('open');
        });
      } else {
        this.$refs.desc.classList.remove('open');
      }
    },
    toggleDesc() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.asked-content {
  &__item {
    position: relative;
  }

  &__desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-out;

    &.open {
      height: 100px;
      transition: height 0.5s ease-out;
    }
  }
}

svg-icon {
  transition: transform 0.5s ease-in-out;
}

.is-rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}

// 768

@media (max-width: 768px) {
}

// 600
@media (max-width: 600px) {
}

// 480
@media (max-width: 480px) {
  .asked-accordion {
    max-width: 480px;
  }
  .asked-content {
    &__accordion {
      max-width: 450px;
    }

    &__desc {
      max-width: 450px;
    }
  }
}

// 320
@media (max-width: 320px) {
  .asked-accordion {
    max-width: 290px;
  }
  .asked-content {
    &__accordion {
      max-width: 290px;
    }

    &__desc {
      max-width: 290px;
    }
  }
}
</style>