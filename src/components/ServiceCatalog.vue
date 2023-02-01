<script lang="ts" setup>
import ServiceCard from '@/components/ServiceCard.vue'
import BasePagination from '@/components/BasePagination.vue'
import { useServicesStore } from '@/stores/useServicesStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const { updatePagination } = useServicesStore()
const { displayedServices, page, perPage, totalServicesAmount } = storeToRefs(useServicesStore())
const router = useRouter()

watch(() => page.value, (val, oldValue) => {
  if (val !== oldValue) {
    updatePagination()
  }
})

const navigateToDetails = (id: string): void => {
  router.push({ name: 'service-details', params: { id } })
}
</script>

<template>
  <section class="service-catalog">
    <div class="catalog">
      <ServiceCard
        v-for="service in displayedServices"
        :key="service.id"
        :service="service"
        @click="navigateToDetails"
      />
    </div>

    <BasePagination
      :current-page="page"
      :per-page="perPage"
      :total="totalServicesAmount"
      @update:page="page = $event"
    />
  </section>
</template>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-bottom: 2.4rem;
}

@media screen and (max-width: $screen_md) {
  .catalog {
    display: flex;
    flex-direction: column;
  }
}
</style>
