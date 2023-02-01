<script lang="ts" setup>
import { Service, ServiceStatus } from '@/entities/services'
import { computed, defineAsyncComponent, ref, shallowRef, watch } from 'vue'
import BaseBadge from '@/components/BaseBadge.vue'

interface IProps {
  service: Service
}

interface IEmit {
  (event: 'click', id: string): void;
}

const props = defineProps<IProps>()

const emit = defineEmits<IEmit>()

const status = computed(() => props.service?.status || ServiceStatus.Pending)

const isConfigured = computed(() => status.value !== ServiceStatus.Pending)

const versionsNumber = computed(() => props.service?.versions?.length || 0)

const statusIcon = shallowRef()
const statusText = ref('')
const statusClass = ref('')
const metricsComponent = shallowRef()

watch(() => status.value, (val, oldValue) => {
  if (val !== oldValue) {
    switch (val) {
      case ServiceStatus.Pending:
        statusText.value = 'In progress'
        statusIcon.value =
          defineAsyncComponent(() => import('@/components/icons/IconSpiner.vue'))
        statusClass.value = 'pending'
        break
      case ServiceStatus.Published:
        statusText.value = 'Published to portal'
        statusIcon.value =
          defineAsyncComponent(() => import('@/components/icons/IconCheck.vue'))
        statusClass.value = 'published'
        break
      case ServiceStatus.Unpublished:
        statusText.value = 'Unpublished'
        statusIcon.value =
          defineAsyncComponent(() => import('@/components/icons/IconClose.vue'))
        statusClass.value = 'unpublished'
        break
    }

    if (isConfigured.value) {
      metricsComponent.value =
        defineAsyncComponent(() => import('@/components/ServiceCardMetrics.vue'))
    } else {
      metricsComponent.value =
        defineAsyncComponent(() => import('@/components/icons/IconDot.vue'))
    }
  }
}, {
  immediate: true,
})

const emitClick = (): void => {
  if (isConfigured.value) {
    emit('click', props.service.id)
  }
}
</script>

<template>
  <div
    class="card"
    :class="{ card_clickable: isConfigured }"
    @click="emitClick"
  >
    <div>
      <div class="status-row">
        <span class="status">
          <component
            :is="statusIcon"
            :class="statusClass"
          />
          {{ statusText }}
        </span>

        <BaseBadge v-if="isConfigured">
          {{ versionsNumber }}
          {{ versionsNumber === 1 ? 'version' : 'versions' }}
        </BaseBadge>
      </div>

      <h3 class="name">
        {{ props.service?.name }}
      </h3>

      <p class="description">
        {{ props.service?.description }}
      </p>
    </div>

    <component
      :is="metricsComponent"
      v-if="isConfigured"
      :developers="props.service?.developers"
      :metrics="props.service?.metrics"
    />
    <p
      v-else
      class="status-text"
    >
      <component
        :is="metricsComponent"
      />
      Not configured with runtime yet
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: .2rem;
  padding: 2.6rem 1.7rem 1.7rem 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &_clickable {
    cursor: pointer;
  }
}
.status {
  font-size: 1.2rem;
  line-height: 1.6rem;
  @include block-vertical-center;
  column-gap: 1.1rem;
}
.pending {
  color: $orange-500;
}
.published {
  color: $green-400;
}
.unpublished {
  color: $blueGray-400;
}
.status-row {
  @include block-vertical-center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.name {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  margin-bottom: 1.1rem;
}
.description {
  font-size: 1.3rem;
  color: $gray-300;
  line-height: 2rem;
  margin-bottom: 1.7rem;
}
.status-text {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  @include block-vertical-center;
  column-gap: .9rem;
  color: $gray-300;
  & svg {
    color: $blueGray-300;
  }
}
</style>
