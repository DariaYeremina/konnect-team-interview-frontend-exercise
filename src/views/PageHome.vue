<script lang="ts" setup>
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import BaseButton from '@/components/BaseButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import BaseTextField from '@/components/BaseTextField.vue'
import IconMagnify from '@/components/icons/IconMagnify.vue'
import BaseLink from '@/components/BaseLink.vue'
import { defineAsyncComponent, onBeforeMount, ref, shallowRef, watch } from 'vue'
import { useServicesStore } from '@/stores/useServicesStore'
import { watchDebounced } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { RequestStatus } from '@/composables/composable.types'
import { useScreenSize } from '@/composables/useScreenSize'

const BaseLoader = defineAsyncComponent(() => import('@/components/BaseLoader.vue'))
const BaseError = defineAsyncComponent(() => import('@/components/BaseError.vue'))
const EmptyState = defineAsyncComponent(() => import('@/components/EmptyState.vue'))

const { fetchServices } = useServicesStore()
const { fetchServicesStatus } = storeToRefs(useServicesStore())
const { mdAndSmaller } = useScreenSize()

onBeforeMount(() => {
  fetchServices()
})

const content = shallowRef()

watch(() => fetchServicesStatus.value, (val, oldValue) => {
  if (val !== oldValue) {
    switch (val) {
      case RequestStatus.Pending:
        content.value = BaseLoader
        break
      case RequestStatus.Success:
        content.value = ServiceCatalog
        break
      case RequestStatus.EmptyResponse:
        content.value = EmptyState
        break
      case RequestStatus.Error:
        content.value = BaseError
        break
    }
  }
}, {
  immediate: true,
})

const handleClick = (): void => {
  window.alert('Add Service Package button was clicked')
}

const query = ref('')

watchDebounced(() => query.value, (val, oldValue) => {
  if (val !== oldValue) {
    fetchServices(val.toLowerCase())
  }
}, {
  debounce: 500,
})
</script>

<template>
  <div class="content-wrapper">
    <section class="heading-section">
      <div>
        <h1 class="page-title">
          Service Hub
        </h1>
        <p class="page-description">
          Organize services, manage and track versioning and API service documentation. <BaseLink
            blank
            url="https://www.google.com/"
          >
            Learn more
          </BaseLink>
        </p>
      </div>

      <div class="functional-row">
        <BaseTextField
          id="search"
          v-model="query"
          class="search-field"
          name="search"
          placeholder="Search"
        >
          <template #prepend-icon>
            <IconMagnify
              class="search-icon"
              height="16"
              width="16"
            />
          </template>
        </BaseTextField>

        <BaseButton @click="handleClick">
          <IconPlus class="button-icon" />
          <span v-if="!mdAndSmaller">Service Package</span>
        </BaseButton>
      </div>
    </section>

    <component :is="content" />
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  background-color: $gray-50;
  min-height: calc(100vh - var(--header-height));
  @include main-padding;
}
.heading-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.4rem;
}
.page-title {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
}
.page-description {
  font-size: 1.6rem;
}
.button-icon {
  display: inline-block;
  margin-right: 1.2rem;
}
.functional-row {
  @include block-vertical-center;
  column-gap: 2.4rem;
  flex-shrink: 0;
}
.search-icon {
  color: $gray-100;
}

@media screen and (max-width: $screen_md) {
  .heading-section {
    flex-direction: column;
  }
  .functional-row {
    margin-top: 1.6rem;
  }
  .button-icon {
    margin-right: 0;
  }
  .functional-row {
    width: 100%;
    justify-content: space-between;
  }
  .search-field {
    min-width: 50%;
  }
}
</style>
