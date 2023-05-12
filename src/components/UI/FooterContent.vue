<template>
    <div class="footer-box">
        <div class="footer-box__logo">
            <img :src="logo.img" :alt="logo.alt">
            <p>{{ logoDesc }}</p>
            <div class="footer-box__logo--parthner">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterContent',
    props: {
        logo: {
            type: Object,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        logoDesc: {
            type: String,
            required: true,
        },
    }

};
</script>

<style lang="scss" scoped></style>