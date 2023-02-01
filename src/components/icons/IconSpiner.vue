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
    <path
      d="M1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1"
      :stroke="props.color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>
