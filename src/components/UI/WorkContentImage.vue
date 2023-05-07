<template>
    <div class="work-content__image relative">
        <img :src="image.img" :alt="image.alt">
        <ul>
            <li v-for="(marker, index) in markers" :key="index"
                :class="'work-content__image--' + marker.city + ' absolute animate-pulse-5'"
                :style="{ top: marker.top + '%', right: marker.right + '%' }">
                <img :src="icon.img" :alt="marker.alt">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'WorkContentImage',
    data() {
        return {
            markers: [
                { city: 'newyork', top: '15', right: '10', alt: 'New York' },
                { city: 'newjersey', top: '28', right: '10', alt: 'New Jersey' },
                { city: 'georgia', top: '35', right: '22', alt: 'Georgia' },
                { city: 'florida', top: '60', right: '20', alt: 'Florida' },
                { city: 'ohio', top: '80', right: '14', alt: 'Ohio' },
            ],

        }
    },
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
    },

}
</script>

<style lang="scss" scoped></style>