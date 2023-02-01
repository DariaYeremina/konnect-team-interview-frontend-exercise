<script lang="ts" setup>
interface IProps {
  url: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  url: '',
  width: '3.6',
  height: '3.6',
})
</script>

<template>
  <img
    alt="avatar"
    class="avatar"
    :src="props.url"
    :style="{ width: `${props.width}rem`, height: `${props.height}rem` }"
  >
</template>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
  display: inline-block;
}
</style>
