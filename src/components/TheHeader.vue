<script lang="ts" setup>
import kongLogo from '@/assets/img/Logo.svg'
import IconedLink from '@/components/IconedLink.vue'
import IconOrganization from '@/components/icons/IconOrganization.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import AccountMenu from '@/components/AccountMenu.vue'
import { shallowRef } from 'vue'
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
</script>

<template>
  <header class="header">
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
        :title="link.title"
      >
        <component :is="link.icon" />
      </IconedLink>

      <AccountMenu />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
    background: linear-gradient(180deg, #09224F 0%, #073382 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation {
  display: flex;
  align-items: center;
}
</style>
