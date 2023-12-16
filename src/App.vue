<script setup>
// NAIVE UI
import { NConfigProvider, darkTheme, lightTheme, frFR } from 'naive-ui'

// COMPONENTS
import MainLayout from '@/components/Layout/MainLayout.vue'
import MainNav from '@/components/Layout/MainNav.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="frFR">
    <main-layout>
      <template #header>
        <main-nav />
      </template>
      <template #content>
          <router-view/>
      </template>

      <template #footer>
        
      </template>
    </main-layout>
  </n-config-provider>
</template>

<style scoped>

</style>
