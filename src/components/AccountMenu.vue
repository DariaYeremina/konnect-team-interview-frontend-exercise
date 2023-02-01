<script lang="ts" setup>
import IconAvatar from '@/components/icons/IconAvatar.vue'
import { useScreenSize } from '@/composables/useScreenSize'

const { smAndSmaller } = useScreenSize()

interface IEmit {
  (event: 'click'): void;
}

const emit = defineEmits<IEmit>()

const emitClick = (): void => {
  emit('click')
}
</script>

<template>
  <span class="account-menu">
    <a
      class="account-menu__link"
      @click="emitClick"
    >
      <span class="account-menu__avatar">
        <IconAvatar />
      </span>

      <span v-if="!smAndSmaller">Katherine Ellis</span>
    </a>
  </span>
</template>

<style scoped lang="scss">
.account-menu {
  background-color: $blue-900;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  padding: 2rem;
  &__link {
    @include inline-vertical-center;
    column-gap: 1.6rem;
    cursor: pointer;
  }
  &__avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: $teal-400;
    @include inline-vertical-center;
    justify-content: center;
    flex-shrink: 0;
  }
}
</style>
