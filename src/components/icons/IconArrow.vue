<script lang="ts" setup>
import { withDefaults } from 'vue'
interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: '15',
  height: '9',
  color: 'currentColor',
})
</script>

<template>
  <svg
    fill="none"
    :height="props.height"
    viewBox="0 0 15 9"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.845703 4.49609L4.64258 0.699219V3.8457H14.9434V5.14648H4.64258V8.29297L0.845703 4.49609Z"
      :fill="props.color"
      fill-opacity="1"
    />
  </svg>
</template>

<style scoped>

</style>
