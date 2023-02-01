<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import { computed, ref, watch } from 'vue'

interface IProps {
  currentPage?: number;
  perPage?: number;
  total: number;
  title?: string;
}

interface IEmit {
  (event: 'update:page', val: number): void;
}

const props = withDefaults(defineProps<IProps>(), {
  currentPage: 1,
  perPage: 9,
  total: 0,
  title: 'services',
})

const emit = defineEmits<IEmit>()

const page = ref(1)

watch(() => props.currentPage, (val, oldValue) => {
  if (val !== oldValue && val !== page.value) {
    page.value = val
  }
}, {
  immediate: true,
})

const totalPagesNumber = computed(() =>
  Math.ceil(props.total / props.perPage),
)

const currentRange = computed(() => ({
  start: page.value === 1 ? 1 : props.perPage * (page.value - 1) + 1,
  end: page.value === totalPagesNumber.value
    ? props.total
    : page.value * props.perPage,
}))

const prevPage = (): void => {
  if (page.value > 1) {
    page.value = page.value - 1
    emit('update:page', page.value)
  }
}

const nextPage = (): void => {
  if (page.value < totalPagesNumber.value) {
    page.value = page.value + 1
    emit('update:page', page.value)
  }
}
</script>

<template>
  <div class="pagination">
    <BaseButton
      :disabled="page === 1"
      variant="icon"
      @click="prevPage"
    >
      <IconArrow />
    </BaseButton>
    <span>{{ currentRange.start }} to {{ currentRange.end }}
      <span class="range-title">of
        {{ props.total }} {{ props.title }}</span>
    </span>
    <BaseButton
      :disabled="page === totalPagesNumber"
      variant="icon"
      @click="nextPage"
    >
      <IconArrow class="rotate" />
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.rotate {
  transform: rotate(180deg);
}
.pagination {
  @include block-vertical-center;
  width: 100%;
  justify-content: center;
  column-gap: 2.4rem;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2rem;
}
.range-title {
  color: $blueGray-200;
}
</style>
