<script setup lang="ts">
defineProps<{
  tabId: string
  activeTab: string | null
}>()
</script>

<template>
  <div v-show="activeTab === tabId" class="tab-panel">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-panel {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>