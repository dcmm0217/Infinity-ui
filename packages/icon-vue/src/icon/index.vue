<template>
  <!-- 展示外部图标 -->
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className"></div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true"><use :xlink:href="iconName" /></svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'in-icon' });
interface props {
  icon: String;
  className?: String;
}
const iconProps = defineProps<props>();
/**
 * 判断当前图标是否为外部图标
 */
function external(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
const isExternal = computed(() => external(iconProps.icon));
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${iconProps.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${iconProps.icon}) no-repeat 50% 50%`
}));

/**
 * 内部图标
 */

const iconName = computed(() => `#icon-${iconProps.icon}`)
</script>

<style scoped lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
