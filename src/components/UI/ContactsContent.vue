<template>
    <div class="pb-32">
        <ContactsContentImage :image="contactsImage" :icon="contactsImageMarker" />
    </div>
</template>

<script>

import contactsContentImage from '@/assets/image/contacts-img.webp';
import contactsMarker from '@/assets/image/svg/header-img-map.svg';
export default {
    name: 'ContactsContent',
    data() {
        return {
            contactsImage: {
                img: contactsContentImage,
                altImg: 'contacts-image',
            },
            contactsImageMarker: {
                img: contactsMarker,
                altImg: 'contacts-marker',
            },
        }

    },
}
</script>

<style lang="scss" scoped></style>