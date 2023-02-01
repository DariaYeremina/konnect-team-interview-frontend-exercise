<script lang="ts" setup>
interface IProps {
  title: string;
}

interface IEmit {
  (event: 'click'): void;
}
const props = defineProps<IProps>()

const emit = defineEmits<IEmit>()

const emitClick = (): void => {
  emit('click')
}
</script>

<template>
  <a
    class="link"
    @click="emitClick"
  >
    <slot />
    <span>{{ props.title }}</span>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: inline-flex;
  align-items: center;
  column-gap: 12px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
</style>
