<template>
    <div id="footer-menu">
        <ul>
            <li>
                <router-link to="/home">Home</router-link>
            </li>
            <li>
                <router-link to="/search">Search</router-link>
            </li>
            <li>
                <router-link to="/order">Order</router-link>
            </li>
            <li>
                <router-link to="/profile">Profile</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#footer-menu
    position fixed
    display flex
    bottom 0
    width 100%
    ul
        display flex
        width 100%
        justify-content space-around
        padding 1rem
        li
            a
                text-decoration none
    .router-link-active
        color red
</style>
