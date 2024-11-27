<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-container">
    <Navigation class="nav-sidebar" />
    <main class="main-content">
      <Header />
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.nav-sidebar {
  width: 250px;
  background-color: #2c3e50;
  padding: 1rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
}
</style>