<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#' + name"></use>
    </svg>
</template>

<script setup lang='ts'>
defineOptions({ name: 'in-icon' });
import '../assets/font/line/iconfont.js'
import '../assets/font/surface/iconfont.js'
const props =defineProps({
    name:{
        type:String,
        defalut:'',
    },
})
</script>

<style scoped lang="less">
@import '../assets/styles/in-index.less';

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    // vertical-align: text-bottom;
}
</style>