<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '14',
  height: '16',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 14 16"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.61343 8L0.5 11.1152V16H13.5V11.1152L9.64851 8H4.61343Z"
      :fill="props.color"
    />
    <path
      d="M7 6C8.65685 6 10 4.65685 10 3C10 1.34315 8.65685 0 7 0C5.34315 0 4 1.34315 4 3C4 4.65685 5.34315 6 7 6Z"
      :fill="props.color"
    />
  </svg>
</template>
