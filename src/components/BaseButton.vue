<script lang="ts" setup>
type ButtonVariant = 'primary' | 'icon';

interface IProps {
  variant?: ButtonVariant;
  disabled?: boolean;
}

interface IEmit {
  (event: 'click'): void;
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'primary',
  disabled: false,
})

const emit = defineEmits<IEmit>()

const emitClick = (): void => {
  emit('click')
}
</script>

<template>
  <button
    class="button"
    :class="{ [`button_${props.variant}`]: true, 'button_disabled': props.disabled }"
    @click="emitClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 1.2rem 2.4rem 1.2rem 2rem;
  border-radius: 10rem;
  @include inline-vertical-center;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s all ease;
  &_primary {
    color: #fff;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    background-color: $green-500;
    &:hover {
      opacity: 0.8;
    }
  }
  &_icon {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    @include inline-vertical-center;
    justify-content: center;
    background: transparent;
    border: 1px solid $blue-300;
    color: $blue-500;
    &:hover {
      background-color: $blue-50;
    }
    &.button_disabled{
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
