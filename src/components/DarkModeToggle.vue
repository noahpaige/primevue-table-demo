<template>
  <button
    type="button"
    class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
    @click="onThemeToggler"
  >
    <i :class="`dark:text-white pi ${iconClass}`" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      iconClass: "pi-moon",
    };
  },
  methods: {
    onThemeToggler() {
      const root = document.getElementsByTagName("html")[0];

      root.classList.toggle("p-dark");
      this.iconClass = this.iconClass === "pi-moon" ? "pi-sun" : "pi-moon";
    },
  },
};
</script>
