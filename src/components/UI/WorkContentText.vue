<template>
    <div class="work-content__text">
        <div class="work-content__title">
            <h2>{{ title }}</h2>
            <p>{{ desc }}</p>
        </div>
        <div class="work-content__tab">

        </div>
    </div>
</template>

<script>


export default {
    name: 'WorkContentText',
    props: {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    }
} 
</script>

<style lang="scss" scoped></style>