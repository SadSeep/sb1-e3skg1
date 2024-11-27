<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { routes } from '../router/routes'

const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)
const accessToken = ref('')

const navigate = (path: string) => {
  router.push(path)
}

const setAccessToken = () => {
  const token = window.prompt('Please enter your access token:')
  if (token !== null) {
    accessToken.value = token
  }
}
</script>

<template>
  <nav class="navigation">
    <h1 class="nav-title">Dashboard</h1>
    <div class="nav-buttons">
      <button
        v-for="route in routes"
        :key="route.path"
        :class="['nav-button', { active: currentPath === route.path }]"
        @click="navigate(route.path)"
      >
        {{ route.label }}
      </button>
    </div>
    <button class="token-button" @click="setAccessToken">
      Set Access Token
    </button>
  </nav>
</template>

<style scoped>
.navigation {
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.nav-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.nav-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: auto;
}

.nav-button {
  background: transparent;
  border: none;
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-button.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.token-button {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.token-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>