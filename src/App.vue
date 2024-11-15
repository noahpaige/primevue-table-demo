<template>
  <TopNav class="mb-4" />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
</script>
