<script setup lang="ts">
defineProps<{
  tabs: string[]
  activeTab: string | null
}>()

const emit = defineEmits<{
  'update:activeTab': [tab: string]
}>()

const setActiveTab = (tab: string) => {
  emit('update:activeTab', tab)
}
</script>

<template>
  <div class="tab-list">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="tab-button"
      :class="{ active: activeTab === tab }"
      @click="setActiveTab(tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
.tab-list {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.tab-button:hover {
  color: #3b82f6;
}

.tab-button.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  .tab-list {
    border-bottom-color: #334155;
  }

  .tab-button {
    color: #94a3b8;
  }

  .tab-button:hover {
    color: #60a5fa;
  }

  .tab-button.active {
    color: #60a5fa;
    border-bottom-color: #60a5fa;
  }
}
</style>