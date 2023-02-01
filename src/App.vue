<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue'
import { computed, ref } from 'vue'

const headerRef = ref<Record<string, any>>({})

const headerHeight = computed(() => headerRef.value?.headerHeight)
</script>

<template>
  <TheHeader ref="headerRef" />
  <main
    :style="{ '--header-height': `${headerHeight}px` }"
  >
    <router-view />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

body {
  font-family: $font-family;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0 auto;
  color: $gray-600;
}
</style>
