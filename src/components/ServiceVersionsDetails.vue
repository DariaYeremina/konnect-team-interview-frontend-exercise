<script lang="ts" setup>
import { IServiceMetric } from '@/entities/services'

interface IProps {
  metric: IServiceMetric;
}

const props = defineProps<IProps>()
</script>

<template>
  <div
    class="table-row"
    role="row"
  >
    <div role="cell" />
    <div role="cell" />
    <div role="cell" />
    <div role="cell" />
  </div>
</template>

<style lang="scss" scoped>
.table{
  &-row {
    display: grid;
    column-gap: .8rem;
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
