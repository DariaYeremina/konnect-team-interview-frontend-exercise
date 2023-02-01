<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '10',
  height: '10',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 10 10"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.16666 1.5L1.16666 8.5"
      :stroke="props.color"
      stroke-linecap="round"
      stroke-width="2"
    />
    <path
      d="M8.16666 8.5L1.16666 1.5"
      :stroke="props.color"
      stroke-linecap="round"
      stroke-width="2"
    />
  </svg>
</template>
