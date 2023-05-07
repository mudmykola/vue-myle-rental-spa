<template>
    <div class="work-content__image relative">
        <img :src="image.img" :alt="image.alt">
        <ul>
            <li v-for="(marker, index) in markers" :key="index"
                :class="'work-content__image--' + marker.city + ' absolute top-' + marker.top + ' right-' + marker.right + ' animate-pulse-' + (index + 5)">
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
                { city: 'newyork', top: '16', right: '16', alt: 'New York' },
                { city: 'newjersey', top: '24', right: '12', alt: 'New Jersey' },
                { city: 'georgia', top: '32', right: '32', alt: 'Georgia' },
                { city: 'florida', top: '56', right: '28', alt: 'Florida' },
                { city: 'ohio', top: '72', right: '20', alt: 'Ohio' },
            ]
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