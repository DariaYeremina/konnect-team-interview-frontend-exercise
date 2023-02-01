<script lang="ts" setup>
interface IProps {
  id: string;
  name?: string;
  placeholder?: string;
  modelValue: string;
}

interface IEmit {
  (event: 'update:model-value', val: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  id: '',
  name: '',
  placeholder: '',
  modelValue: '',
})

const emit = defineEmits<IEmit>()

const emitType = ($event: any): void => {
  emit('update:model-value', $event?.target?.value)
}
</script>

<template>
  <div class="input__outer">
    <slot
      v-if="$slots['prepend-icon']"
      name="prepend-icon"
    />
    <input
      :id="props.id"
      class="input"
      :name="props.name"
      :placeholder="props.placeholder"
      type="text"
      :value="props.modelValue"
      @input="emitType"
    >
  </div>
</template>

<style lang="scss" scoped>
.input {
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: $gray-500;
  font-family: $font-family;
  line-height: 2.2rem;
  padding: 0;
  &::placeholder {
    font-size: 1.4rem;
  }
  &__outer {
    font-size: 1.4rem;
    color: $gray-500;
    background-color: #fff;
    border: 1px solid $gray-200;
    padding: 1rem 1.6rem 1rem 1rem;
    @include inline-vertical-center;
    border-radius: .4rem;
    column-gap: 1rem;
  }
}
</style>
