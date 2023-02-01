<script lang="ts" setup>
type BadgeVariant = 'blue'

interface IProps {
  variant?: BadgeVariant
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'blue',
})
</script>

<template>
  <span
    class="badge"
    :class="{ [`badge_${props.variant}`]: true }"
  > <slot /> </span>
</template>

<style lang="scss" scoped>
.badge {
  padding: 0.9rem 1.6rem 0.8rem;
  border-radius: 10rem;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.6rem;
  &_blue {
    color: $blue-400;
    background-color: $blue-50;
  }
}
</style>
