<template>
  <div class="in-button" :class="[type, size, btStatus(status), { disabled: disabled },{loading:loading}]"
    :style="{ width: long ? '100%' : 'auto' }">
    <div class="in-button-bg" :style="{ borderRadius: inShape[0] }"></div>
    <p class="in-buton-name" :style="{ padding: inShape[1] }"><slot></slot></p>
 </div>
</template>

<script setup lang='ts'>
defineOptions({ name: 'in-button' });
import { ref } from 'vue';
  const props = defineProps({
    type: {
    type: String,
    default: 'primary'
  },
  shape: {//按钮形状round/圆角、circle/圆、square/正方形
    type: String,
    default: '',
  },
  status: {//按钮状态normal/success/warning/danger/primary
    type: String,
    default: 'normal'
  },
  size: {//ss/s/m/l
    type: String,
    default: 'm'
  },
  long: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean
  },
  })
  // 获取元素高度
  const inShape = ref(['',''])
  //按钮形状shape设置round/圆角、circle/圆、square/正方
const btShape = (shape:string):[string,string]=>{
  switch (shape) {
    case "round":
      return ['200px', 'auto'];
    case "circle":
      return ['200px', '0'];
    case "square":
      return ['auto', '0'];
    default:
      return ['auto', 'auto'];
  }
}
//按钮状态normal/success/warning/danger
const btStatus = (status: string): string => {
  switch (status) {
    case "primary":
      return "pcolor";
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "danger":
      return "danger";
    default:
      if (props.type == "primary") {
        return 'pcolor';
      } else {
        return 'fcolor';
      }
  }
}

inShape.value = btShape(props.shape)
</script>

<style scoped lang="less">
@import '../assets/styles/in-index.less';
.in-button {
  position: relative;
  display: inline-block;
  vertical-align:top;
  align-items: center;
  cursor: pointer;
  text-align: center;

  .in-buton-name {
    width: auto;
    transition: color @animatf;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }

  .in-button-bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    box-sizing: border-box;
    transition: all @animatf;

  }

}

//size
.s {
  .in-button-bg {
    border-radius: @radius-s;
  }

  height: 28px;

  .in-buton-name {
    padding: 0 8px;
    min-width: 28px;
  }
}

.m {
  .in-button-bg {
    border-radius: @radius-s;
  }

  .in-buton-name {
    padding: 0 16px;
    min-width: 32px;
  }

  height: 32px;
}

.l {
  height: 36px;

  .in-buton-name {
    min-width: 36px;
    padding: 0 16px;
  }

  .in-button-bg {
    border-radius: @radius-m;
  }
}

.xl {
  height: 48px;

  .in-buton-name {
    font-size: @size-l;
    padding: 0 24px;
    min-width: 48px;
  }

  .in-button-bg {
    border-radius: @radius-m;
  }
}

//按钮状态color
.pcolor {
  .in-button-bg {
    background-color: @pcolor;
    border-color: @pcolor;
  }

  .in-buton-name {
    color: @pcolor;
    circle{
      stroke: @pcolor;
    }
  }
}

.fcolor {
  .in-button-bg {
    background-color: @font-color-l;
    border-color: @font-color-l;
  }

  .in-buton-name {
    color: @font-color-l;
    circle{
      stroke: @font-color-l;
    }
  }
}

.success {
  .in-button-bg {
    background-color: @scolor;
    border-color: @scolor;
  }

  .in-buton-name {
    color: @scolor;
    circle{
      stroke: @scolor;
    }
  }
}

.warning {
  .in-button-bg {
    background-color: @wcolor;
    border-color: @wcolor;
  }

  .in-buton-name {
    color: @wcolor;
    circle{
      stroke: @wcolor;
    }
  }
}

.danger {
  .in-button-bg {
    background-color: @ecolor;
    border-color: @ecolor;
  }

  .in-buton-name {
    color: @ecolor;
    circle{
      stroke: @ecolor;
    }
  }
}

//type基本样式
.primary {

  .in-buton-name {
    color: #fff;
    circle{
      stroke: #fff;
    }
  }

  &:hover {
    .in-button-bg {
      opacity: 0.85;
    }
  }

  &:active {
    .in-button-bg {
      opacity: 1;
    }
  }
}

.sceondary {
  .in-button-bg {
    opacity: 0.08;
  }

  &:hover {
    .in-button-bg {
      opacity: 0.12;
    }
  }

  &:active {
    .in-button-bg {
      opacity: 0.08;
    }
  }
}

.outline {
  .in-button-bg {
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    opacity: 0.16;
  }

  &:hover {
    .in-button-bg {
      opacity: 0.24;
    }
  }

  &:active {
    .in-button-bg {
      background-color: transparent;
      opacity: 0.16;
    }

  }
}

.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.loading{
  opacity: 0.7;
  pointer-events: none;
}

//loading动画
svg {
 width: 16px;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
 margin-right:4px;
}

circle {
 fill: none;
//  stroke: hsl(214, 97%, 59%);
 stroke-width: 3;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}
</style>