<template>
    <div class="work-content container-x flex justify-between items-center">
        <WorkContentText :title="workTitle" :desc="workDesc" />
        <WorkContentImage :image="workContentImage" :icon="mapMarker" />
    </div>
</template>

<script>
import mapImage from '@/assets/image/maps.webp';
import mapMarkerImage from '@/assets/image/svg/map.svg';
export default {
    name: "WorkContent",
    data() {
        return {
            workContentImage: {
                img: mapImage,
                alt: 'maps-img',
            },
            mapMarker: {
                img: mapMarkerImage,
                altMap: 'map-icon',
            },

        }
    },
    props: {
        workTitle: {
            type: String,
            required: true,
            default: 'where we work?',
        },
        workDesc: {
            type: String,
            required: true,
            default: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
        },
    }

}
</script>

<style lang="scss" scoped></style>