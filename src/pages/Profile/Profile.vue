<template>
    <div>
        <GeneralHeader title="Profile"></GeneralHeader>
        <router-link to="/login">Login / Register</router-link>
    </div>
</template>

<script>
import GeneralHeader from "../../components/Headers/GeneralHeader.vue";
export default {
    components: {
        GeneralHeader
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
