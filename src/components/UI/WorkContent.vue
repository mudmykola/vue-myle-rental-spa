<template>
    <div class="work-content container-x">
        <WorkContentText :title="workTitle" :desc="workDesc" />
    </div>
</template>

<script>


export default {
    name: "WorkContent",
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