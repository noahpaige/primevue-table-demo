<template>
  <div class="landing-page">
    <h1>Welcome to Our Application</h1>
    <p>This is a simple landing page built with PrimeVue.</p>
    <Button
      label="Get Started"
      class="p-button-lg"
      @click="navigateToOpconView"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigateToOpconView = () => {
      router.push({ name: "opcon" });
    };

    return { navigateToOpconView };
  },
};
</script>

<style scoped></style>
