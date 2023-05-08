<template>
    <div class="contacts-content__image relative ">
        <div class="contacts-content__marker     ">
            <img class=" w-74 h-109 absolute left-32 -top-1/4 animate-bounce " :src="icon.img" :alt="icon.alt">
        </div>
        <img :src="image.img" :alt="image.alt">
    </div>
</template>

<script>
export default {
    name: 'ContactsContentImage',

    props: {
        image: {
            type: Object,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        icon: {
            type: Object,
            required: true
        },
        altMap: {
            type: String,
            required: true
        },
    }
};
</script>

<style lang="scss" scoped></style>