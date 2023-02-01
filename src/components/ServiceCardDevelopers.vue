<script lang="ts" setup>
import BaseAvatar from '@/components/BaseAvatar.vue'
import { IServiceDeveloper } from '@/entities/services'
import { computed, defineAsyncComponent, shallowRef, watch } from 'vue'

interface IProps {
  developers: (IServiceDeveloper | undefined)[] | null
}

const props = defineProps<IProps>()

const avatars = computed(() => (props.developers && props.developers?.length <= 2)
  ? props.developers
  : props.developers?.slice(0, 2))

const reversedAvatars = computed(() => avatars.value
  ? [...avatars.value].reverse()
  : [])

const names = computed(() => (props.developers && props.developers?.length > 2)
  ? props.developers?.map(el => el?.name)
  : null)

const tooltipComponent = shallowRef()

watch(() => names.value, (val, oldValue) => {
  if (val && val !== oldValue) {
    tooltipComponent.value =
      defineAsyncComponent(() => import('@/components/BaseTooltip.vue'))
  }
}, { immediate: true })
</script>

<template>
  <div class="avatars-row">
    <component
      :is="tooltipComponent"
      v-if="names"
    >
      <template #activator>
        <span
          class="number"
        >+ {{ names?.length }}</span>
      </template>
      <template #hint>
        <ul>
          <li
            v-for="name in names"
            :key="name"
          >
            {{ name }}
          </li>
        </ul>
      </template>
    </component>

    <BaseAvatar
      v-for="(item, i) in reversedAvatars"
      :key="item?.id"
      :class="{ transitioned: i === 0 && reversedAvatars.length > 1 }"
      :url="item?.avatar"
    />
  </div>
</template>

<style lang="scss" scoped>
.avatars-row {
  @include block-vertical-center;
  position: relative;
}
.number {
  width: 3.6rem;
  height: 3.6rem;
  @include inline-vertical-center;
  justify-content: center;
  border-radius: 100%;
  background-color: $blueGray-100;
  box-shadow:0 0 0 2px #fff inset;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: $blueGray-500;
  transform: translateX(2.4rem);
  position: relative;
  z-index: 2;
}
.transitioned {
  transform: translateX(1.2rem);
}
</style>
