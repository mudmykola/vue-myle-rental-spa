<template>
    <div class="button-tab">
        <button
            class=" border-none hover:shadow-border-ef hover:transition duration-700 ease-in-out  text-18 leading-22 font-font-eb rounded-8 pt-4 pb-4  pl-6 pr-6">{{
            title
        }}</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonTab',

    props: {
        title: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        activeIndex: {
            type: Number,
            required: true,
        },

    },
    computed: {
        isActive() {
            return this.activeIndex === this.index;
        }
    },
    methods: {
        handleClick() {
            this.$emit('update:active-index', this.index);
        }
    }

}
</script>

<style lang="scss" scoped></style>