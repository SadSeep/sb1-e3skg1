<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '../router/routes'

const route = useRoute()

const currentRouteLabel = computed(() => {
  const currentRoute = routes.find(r => r.path === route.path)
  return currentRoute?.label || ''
})
</script>

<template>
  <header class="header">
    <h2>{{ currentRouteLabel }}</h2>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.875rem;
  font-weight: 600;
  color: #1a202c;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #e2e8f0;
  }
  
  .header {
    border-bottom-color: #4a5568;
  }
}
</style>