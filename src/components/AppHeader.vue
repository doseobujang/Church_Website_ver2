<template>
    <AppHeader>
        <TopHeader />
        <HeaderNav />
    </AppHeader>
</template>

<script>
    import TopHeader from './TopHeader.vue'
    import HeaderNav from './HeaderNav.vue'

export default {
    name: 'AppHeader', 
    components: {
        TopHeader,
        HeaderNav
    }
}
</script>

<style>

</style>