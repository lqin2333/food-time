<template>
    <div>
        <router-view/>
        <FooterMenu v-show="$route.meta.showInFooter"/>
    </div>


</template>

<script>
import FooterMenu from "./components/FooterMenu/FooterMenu.vue";
export default {
    components: {
        FooterMenu
    }
};
</script>

<style></style>
