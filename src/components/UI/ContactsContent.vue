<template>
    <div class="contacts-content pb-32 flex justify-between">
        <ContactsContentImage :image="contactsImage" :icon="contactsImageMarker" />
        <ContactsContentText :title="contentsTitle" :subMail="contactsMailSub" :link="contactsMail"
            :phoneSub="contactsPhoneSub" :phoneNum="contactsPhoneNum" :phoneNumLink="contactsPhoneNumLink"
            :desc="contactsDesc" />
    </div>
</template>

<script>

import contactsContentImage from '@/assets/image/contacts-img.webp';
import contactsMarker from '@/assets/image/svg/header-img-map.svg';

export default {
    name: "ContactsContent",
    data() {
        return {
            contactsImage: {
                img: contactsContentImage,
                altImg: "contacts-image",
            },
            contactsImageMarker: {
                img: contactsMarker,
                altImg: "contacts-marker",
            },
        };
    },
    props: {
        contentsTitle: {
            type: String,
            required: true,
            default: 'Our Contacts',
        },
        contactsMailSub: {
            type: String,
            required: true,
            default: 'E-Mail Address',
        },
        contactsMail: {
            type: String,
            required: true,
            default: 'rentyourcar@gmail.com',

        },
        contactsPhoneSub: {
            type: String,
            required: true,
            default: 'Phone Number',
        },
        contactsPhoneNum: {
            type: String,
            required: true,
            default: '(888) 253-2552',
        },
        contactsPhoneNumLink: {
            type: String,
            required: true,
            default: '(888) 253-2552',
        },
        contactsDesc: {
            type: String,
            required: true,
            default: 'You can also contact us directly using the button below.',
        }

    },

}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {}

// 600
@media (max-width: 600px) {
  .contacts-content{
    flex-direction: column;

  }
}

// 480
@media (max-width: 480px) {
  .contacts-content{
    flex-direction: column;

  }
}

// 320
@media (max-width: 320px) {
  .contacts-content{
    flex-direction: column;

  }

}
</style>