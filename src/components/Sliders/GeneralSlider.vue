<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div>
                    <i class="iconfont iconFood-Icons-1"></i>
                    <span>美食</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-2"></i>
                    <span>生鲜</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-3"></i>
                    <span>商超</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-"></i>
                    <span>甜品</span>
                </div>
            </div>
            <div class="swiper-slide">
                <div>
                    <i class="iconfont iconFood-Icons-1"></i>
                    <span>日料</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-2"></i>
                    <span>简餐</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-3"></i>
                    <span>早餐</span>
                </div>
                <div>
                    <i class="iconfont iconFood-Icons-"></i>
                    <span>面食</span>
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
// require styles
import Swiper from "swiper";

export default {
    props:{
        primaryCats: []
    },
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
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper
    margin-top 300px

.swiper-container
    height 5rem
    padding-bottom 1rem

.swiper-slide
    display flex
    justify-content space-between

    div
        padding 1rem
        display flex
        flex-direction column
        align-items center
        justify-content space-around
</style>