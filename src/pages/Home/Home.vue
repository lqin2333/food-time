<template>
    <div>
        <GeneralHeader class="home-header" title="Home">
            <div class="header--left" slot="left">
                <i class="iconfont iconsearch"></i>
            </div>
            <div class="header--right" slot="right">
                <span>Login / Register</span>
            </div>
        </GeneralHeader>
        <div>Home</div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">1</div>
                <div class="swiper-slide">2</div>
                <div class="swiper-slide">3</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import GeneralHeader from "../../components/Headers/GeneralHeader.vue";
// require styles
import Swiper from "swiper";

export default {
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    },
    components: {
        GeneralHeader
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-header
    .general-header--mid
        width 60%

    .header--left
        width 10%

    .header--right
        width 30%

.swiper
    margin-top 300px

.swiper-container
    height 10rem
</style>
