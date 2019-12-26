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
        <GeneralSlider/>
        <StoreList/>
    </div>
</template>

<script>
import GeneralHeader from "../../components/Headers/GeneralHeader.vue";
import GeneralSlider from "../../components/Sliders/GeneralSlider.vue";
import StoreList from "../../components/StoreList/StoreList.vue";

export default {
    components: {
        GeneralHeader,
        GeneralSlider,
        StoreList
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
</style>
