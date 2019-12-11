<template>
    <div id="app">
        <router-view name="TopHeader"></router-view>
        <!-- why no training-->
        <router-view name="Training"></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'App'
})
</script>