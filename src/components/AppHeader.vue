<template>
    <div class="app-header">
        <TopHeader />
        <HeaderNav />
        <SideBar />
    </div>
</template>

<script>
    import TopHeader from './TopHeader.vue'
    import HeaderNav from './HeaderNav.vue'
    import SideBar from './SideBar.vue'

export default {
    name: 'AppHeader', 
    components: {
        TopHeader,
        HeaderNav,
        SideBar
    }
}
</script>

<style>

</style>