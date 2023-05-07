<template>
    <div class="work-content__text w-450 pt-20 pb-20">
        <div class="work-content__title ">
            <h2 class=" text-40 leading-44 text-c100  font-font-eb   capitalize">{{ title }}</h2>
            <p class=" text-16 leading-18 font-font-r opacity-50 pt-4 pb-10">{{ desc }}</p>
        </div>
        <div class="work-content__tab flex flex-wrap w-450 gap-6">
            <ButtonTab class="  rounded-8 bg-c201" v-for="(city, index) in cities" :key="city.id" :title="city.name"
                :index="index" :class="{ 'button-tab--active': index === activeIndex, 'button-tab': true }"
                @click="handleTabClick(index)" />
        </div>
    </div>
</template>

<script>


export default {
    name: 'WorkContentText',
    data() {
        return {
            activeIndex: 0,
            cities: [
                { id: 1, name: 'New York' },
                { id: 2, name: 'New Jersey' },
                { id: 3, name: 'Georgia' },
                { id: 4, name: 'Florida' },
                { id: 5, name: 'Ohio' }
            ]
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    methods: {
        handleTabClick(index) {
            this.activeIndex = index;
        },
    },
} 
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;

.button-tab {
    @extend %dtrans;

    &--active {
        background-color: var.$c500;
        color: var.$default;
        @extend %htrans;
    }
}
</style>