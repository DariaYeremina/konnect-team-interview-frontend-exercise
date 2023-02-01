<script lang="ts" setup>
import { ref } from 'vue'

const hintVisibility = ref(false)

const toggleHint = (v: boolean): void => {
  hintVisibility.value = v
}
</script>

<template>
  <div class="tooltip">
    <div
      v-if="hintVisibility"
      class="tooltip__hint"
    >
      <slot name="hint" />
    </div>
    <span
      class="tooltip__activator"
      @mouseleave="toggleHint(false)"
      @mouseover="toggleHint(true)"
    >
      <slot name="activator" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  &__activator {
    cursor: pointer;
  }
  &__hint {
    position: absolute;
    padding: 1.6rem;
    background-color: $gray-900;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.4rem;
    bottom: calc(100% + .6rem);
    width: max-content;
    line-height: 2rem;
    transition: .4s all ease;
  }
}
</style>
