<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '6',
  height: '6',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 6 6"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="3"
      cy="3"
      :fill="props.color"
      r="3"
    />
  </svg>
</template>
