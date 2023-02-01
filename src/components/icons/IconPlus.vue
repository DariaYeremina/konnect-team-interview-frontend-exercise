<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '12',
  height: '12',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 12 12"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      fill="white"
      height="12"
      rx="1"
      width="2.76923"
      x="4.61539"
    />
    <rect
      height="12"
      rx="1"
      width="2.76923"
      transform="rotate(90 12 4.61539)"
      x="12"
      y="4.61539"
      :fill="props.color"
    />
  </svg>
</template>
