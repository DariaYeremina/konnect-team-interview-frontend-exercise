<script lang="ts" setup>
import { IServiceDeveloper, IServiceMetric } from '@/entities/services'
import IconDot from '@/components/icons/IconDot.vue'
import { defineAsyncComponent, shallowRef, watch } from 'vue'

interface IProps {
  metrics: IServiceMetric
  developers: (IServiceDeveloper | undefined)[] | null
}

const props = defineProps<IProps>()

const developersAvatars = shallowRef()

watch(() => props.developers, (val) => {
  if (val) {
    developersAvatars.value =
      defineAsyncComponent(() => import('@/components/ServiceCardDevelopers.vue'))
  }
}, {
  immediate: true,
})
</script>

<template>
  <div class="wrapper">
    <ul class="metrics">
      <li class="metrics__item">
        <IconDot class="metrics__symbol" />
        <span class="metrics__number">{{ props.metrics.latency }}ms </span> latency
      </li>
      <li class="metrics__item">
        <IconDot class="metrics__symbol" />
        <span class="metrics__number">{{ props.metrics.uptime }}% </span> uptime
      </li>
      <li class="metrics__item">
        <IconDot class="metrics__symbol" />
        <span class="metrics__number">{{ props.metrics.requests }}k </span>
        requests  <IconDot
          height="2"
          width="2"
        />  <span class="metrics__number">{{ props.metrics.errors }}% </span>
        errors
      </li>
    </ul>

    <div class="avatars-wrapper">
      <component
        :is="developersAvatars"
        v-if="props.developers"
        :developers="props.developers"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.metrics {
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: $gray-300;
  &__item {
    @include block-vertical-center;
    column-gap: 0.4rem;
  }
  &__symbol {
    display: inline-block;
    margin-right: 0.9rem;
    color: $green-300;
  }
  &__number {
    color: $gray-600;
  }
}

@media screen and (max-width: $screen_sm) {
  .wrapper {
    display: block;
  }
.avatars-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
}
</style>
