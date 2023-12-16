<script setup>
  import { NLayoutSider, NLayoutContent, NLayout } from 'naive-ui'
  
  </script>

<template>
  <main>
    <n-layout has-sider>
      <n-layout-sider 
        content-style="padding: 24px;" 
        bordered
        collapse-mode="transform"
        :collapsed-width="20"
        :width="240"
        show-trigger="arrow-circle"
      >
        Handian Bridge
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        Yo
      </n-layout-content>
    </n-layout>
  </main>
</template>

<style scoped>
</style>