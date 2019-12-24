<template>
    <div class="general-header">
        <slot name="left"></slot>
        <div class="general-header--mid">{{ title }}</div>
        <slot class="general-header--right" name="right"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.general-header
    display flex;
    justify-content space-between;
    padding 1rem;
    text-align center;

.general-header--mid
    width 100%;
</style>
