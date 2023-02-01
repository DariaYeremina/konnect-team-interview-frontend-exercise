<script lang="ts" setup>
import { computed } from 'vue'

interface IProps {
  url: string;
  blank?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  url: '',
  blank: false,
})

const target = computed(() => props.blank ? '_blank' : '_self')
</script>

<template>
  <a
    class="link"
    :href="props.url"
    :target="target"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
  .link {
    color: $blue-500;
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-decoration: none;
  }
</style>
