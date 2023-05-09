<template>
    <div class="contacts-content__text">
        <h2>{{ title }}</h2>
        <div class="contacts-content__text--mail">
            <p>{{ subMail }}</p>
            <a :href="mailToUrl">{{ link }}</a>
        </div>
        <div class="contacts-content__text--phone">
            <p>{{ phoneSub }}</p>
            <a :href="numToUrl">{{ phoneNum }}</a>
        </div>
        <span>{{ desc }}</span>

    </div>
</template>

<script>
export default {
    name: 'ContactsContentText',
    props: {
        title: {
            type: String,
            required: true,
        },
        subMail: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        contactsMailUrl: {
            type: String,
            required: true,
            default: 'rentyourcar@gmail.com',
        },
        phoneSub: {
            type: String,
            required: true,
        },
        phoneNum: {
            type: String,
            required: true,
        },
        phoneNumLink: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        }
    },
    computed: {
        mailToUrl() {
            return `mailto:${this.contactsMailUrl}`;
        },
        numToUrl() {
            return `tel:${this.phoneNumLink}`;
        }
    },
};
</script>

<style lang="scss" scoped></style>