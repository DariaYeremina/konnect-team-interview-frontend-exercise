<script lang="ts" setup>
import { IServiceVersion, ServiceType } from '@/entities/services'
import BaseAvatar from '@/components/BaseAvatar.vue'
import { useDateFormatting } from '@/composables/useDateFormatting'

const { getTimeDifference } = useDateFormatting()

interface IProps {
  version: IServiceVersion;
  type: ServiceType | undefined;
}

const props = defineProps<IProps>()
</script>

<template>
  <div
    class="table-row"
    role="row"
  >
    <div
      class="heading heading_dark"
      role="cell"
    >
      {{ props.version.name }}
    </div>
    <div
      class="text"
      role="cell"
    >
      {{ props.version.description }}
    </div>
    <div role="cell">
      <div class="badges-row">
        <span class="badge badge_light">{{ props.type }}</span>
        <span class="badge">REST</span>
      </div>
    </div>
    <div
      role="cell"
    >
      <div class="developer-details">
        <BaseAvatar
          v-if="props.version.developer"
          height="2"
          :url="props.version.developer?.avatar"
          width="2"
        />
        <div>
          <p
            v-if="props.version.developer"
            class="heading"
          >
            {{ props.version.developer?.name }}
          </p>
          <p class="text">
            {{ getTimeDifference(props.version.updated_at) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table{
  &-row {
    display: grid;
    column-gap: .8rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 3.9fr) minmax(0, 4.9fr) minmax(0, 2.7fr);
    padding: .8rem 0;
  }
}
.heading {
  font-size: 1.3rem;
  line-height: 2.4rem;
  font-weight: 600;
  &_dark {
    color: $gray-900;
  }
}
.text {
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: $gray-400;
}
.developer-details {
  display: flex;
  column-gap: .6rem;
}
.badge {
  @include inline-vertical-center;
  padding: .2rem .6rem .3rem;
  border-radius: .4rem;
  background-color: $blue-200;
  color: $blue-600;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  &_light {
    background-color: $gray-50;
  }
}
.badges-row {
  @include block-vertical-center;
  column-gap: .4rem;
}

@media screen and (max-width: $screen_sm) {
  .badges-row {
    flex-direction: column;
  }
  .table-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 3.9fr) minmax(0, 2.5fr) minmax(0, 3.2fr);
  }
}
</style>
