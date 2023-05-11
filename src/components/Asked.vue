<template>
    <div class="bg-c100 text-default">
        <AskedContent class=" container-x" :title="askedTitle" />
    </div>
</template>

<script>


export default {
    name: "TheAsked",
    props: {
        askedTitle: {
            type: String,
            requerid: true,
            default: 'Frequently asked questions',
        }
    }

};
</script>

<style lang="scss" scoped></style>