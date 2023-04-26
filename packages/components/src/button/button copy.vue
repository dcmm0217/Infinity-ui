<template>
  <button class="in-button" :disabled="disabled" :class="buttonStyle" @click="handleClick"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'in-button' });
interface Props {
  type?: 'primary' | 'danger' | 'default' | 'success';
  plain?: Boolean;
  round?: Boolean;
  circle?: Boolean;
  disabled?: Boolean;
}
const buttonProps = defineProps<Props>();

const buttonStyle = computed(() => {
  return {
    [`in-button--${buttonProps.type}`]: buttonProps.type,
    'is-plain': buttonProps.plain,
    'is-round': buttonProps.round,
    'is-circle': buttonProps.circle,
    'is-disabled': buttonProps.disabled
  };
});

const handleClick = () => {
  console.log('测试测试');
};

</script>
