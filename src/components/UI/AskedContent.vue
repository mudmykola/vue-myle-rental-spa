<template>
    <div class=" pb-20">
        <h2 class=" text-40 leading-44 font-font-eb text-center pt-20 pb-14 ">{{ title }}</h2>
        <div class="asked-content__list">
            <ul class=" grid-cols-2 grid gap-3 ">
                <li v-for="(item, index) in GET_ASKED_ACCORDION" :key="index" :class="{ active: activeIndex === index }"
                    class="asked-content__item  m-auto">
                    <div class="asked-content__accordion cursor-pointer  text-16 leading-18 font-font-b bg-c102 w-445 rounded-8 pt-4 pb-4 pl-4 pr-4 flex items-center justify-between"
                        @click="toggle(index)">
                        {{ item.title }}
                        <svg-icon :class="{ 'is-rotated': activeIndex === index }" type="mdi" :path="path"></svg-icon>
                    </div>
                    <div class="asked-content__accordion--desc w-445 bg-c102 mt-4 pt-4 pb-4 pr-4 pl-4 rounded-8 text-14 leading-18 font-font-m"
                        v-show="activeIndex === index">
                        {{ item.desc }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronDown } from '@mdi/js';
export default {
    name: 'AskedContent',
    components: {
        SvgIcon,
    },
    data() {
        return {
            isActive: false,
            activeIndex: null,
            path: mdiChevronDown,
        }
    },
    props: {
        title: {
            type: String,
            requerid: true,
        }
    },
    methods: {
        toggle(index) {
            if (this.activeIndex === index) {
                this.activeIndex = null
            } else {
                this.activeIndex = index
            }
        },
    },
    computed: {
        ...mapGetters(['GET_ASKED_ACCORDION']),
    }
};
</script>

<style lang="scss" scoped>
.asked-content__item {
    height: 60px;
    overflow-y: auto;

}

svg-icon {
    transition: transform 0.5s ease-in-out;
}

.is-rotated {
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
}
</style>