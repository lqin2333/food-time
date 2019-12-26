<template>
    <div>
        <span @click="$router.back()">
            <i class="iconfont iconleftarrow back-icon"></i>
        </span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.back-icon
    font-size 1.5rem
</style>