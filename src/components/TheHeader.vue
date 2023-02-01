<script lang="ts" setup>
import kongLogo from '@/assets/img/Logo.svg'
import IconedLink from '@/components/IconedLink.vue'
import IconOrganization from '@/components/icons/IconOrganization.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import AccountMenu from '@/components/AccountMenu.vue'
import { onMounted, ref, shallowRef, defineExpose } from 'vue'

interface INavLink {
  title: string;
  icon: any;
}

const navLinks = shallowRef<INavLink[]>([
  {
    icon: IconOrganization,
    title: 'Organization',
  },
  {
    icon: IconSettings,
    title: 'Settings',
  },
])

const header = ref<Record<string, any>>({})
const headerHeight = ref('')

onMounted(() => {
  headerHeight.value = header.value?.clientHeight
})

const handleClick = (val: string): void => {
  console.log(val)
}

defineExpose({ headerHeight })
</script>

<template>
  <header
    ref="header"
    class="header"
  >
    <router-link to="/">
      <img
        alt="logo"
        :src="kongLogo"
      >
    </router-link>

    <nav class="navigation">
      <IconedLink
        v-for="(link, i) in navLinks"
        :key="i"
        hide-on-small-screen
        :title="link.title"
        @click="handleClick(link.title)"
      >
        <component :is="link.icon" />
      </IconedLink>

      <AccountMenu @click="handleClick('account menu')" />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
    background: linear-gradient(180deg, $blue-800 0%, $blue-700 100%);
    @include block-vertical-center;
    justify-content: space-between;
}

.navigation {
  @include block-vertical-center;
  &:deep(.account-menu) {
    margin-left: 3.2rem;
  }
  &:deep(.link) {
    margin-left: 2.6rem;
  }
}
</style>
