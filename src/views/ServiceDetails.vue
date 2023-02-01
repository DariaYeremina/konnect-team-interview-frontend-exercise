<script lang="ts" setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { watch } from 'vue'
import { useServicesStore } from '@/stores/useServicesStore'
import { storeToRefs } from 'pinia'
import ServiceMetricsDetails from '@/components/ServiceVersionsDetails.vue'

const route = useRoute()
const { getServiceDetails, clearServiceDetailsData } = useServicesStore()
const { serviceDetails } = storeToRefs(useServicesStore())

watch(() => route.params.id, (val, oldValue) => {
  if (val && val !== oldValue) {
    getServiceDetails(val as string)
  }
}, {
  immediate: true,
})

onBeforeRouteLeave((to, from, next) => {
  clearServiceDetailsData()
  next()
})
</script>

<template>
  <section class="wrapper">
    <h1 class="heading">
      Versions ({{ serviceDetails?.versions?.length }})
    </h1>
    <div
      class="table"
      role="table"
    >
      <ServiceMetricsDetails
        v-for="(version, i) in serviceDetails?.versions"
        :key="version.id"
        :class="{'row-border': i > 0}"
        :type="serviceDetails?.type"
        :version="version"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 83rem;
  margin: 0 auto;
  @include main-padding;
}
.heading {
  color: $gray-800;
  font-weight: 600;
  line-height: 2.4rem;
  margin-bottom: 3.2rem;
}
.row-border {
  border-top: 1px solid $blueGray-50;
}
</style>
