<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '13',
  height: '10',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 13 10"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2L5 8L2 5.00013"
      :stroke="props.color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.25"
    />
  </svg>
</template>
