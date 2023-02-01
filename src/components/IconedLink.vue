<script lang="ts" setup>
import { computed, withDefaults } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'

const { smAndSmaller } = useScreenSize()

interface IProps {
  title: string;
  hideOnSmallScreen?: boolean;
}

interface IEmit {
  (event: 'click'): void;
}
const props = withDefaults(defineProps<IProps>(), {
  title: '',
  hideOnSmallScreen: false,
})

const emit = defineEmits<IEmit>()

const emitClick = (): void => {
  emit('click')
}

const hideText = computed(() => props.hideOnSmallScreen && smAndSmaller.value)
</script>

<template>
  <a
    class="link"
    @click="emitClick"
  >
    <slot />
    <span v-if="!hideText">{{ props.title }}</span>
  </a>
</template>

<style scoped lang="scss">
.link {
  @include inline-vertical-center;
  column-gap: 1.2rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
</style>
