<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
        <header-component></header-component>

        <section>
            <router-view></router-view>
        </section>

        <footer-component></footer-component>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './_partials/header'
import FooterComponent from './_partials/footer'


export default {
    name: 'DafaultTemplate',
    components: {
        HeaderComponent,
        FooterComponent 
    }   
}
</script>

<style scoped>
@import url('../assets/css/plcmobile.css');
@import url('../assets/css/reset.css');

</style>