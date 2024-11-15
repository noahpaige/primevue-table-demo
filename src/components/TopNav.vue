<template>
  <Menubar class="pb-8" :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>
    <template #end>
      <div class="flex flex-row gap-2">
        <DarkModeToggle />
        <ThemeEditor />
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ThemeEditor from "./ThemeEditor.vue";
import DarkModeToggle from "./DarkModeToggle.vue";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Opcon",
    icon: "pi pi-cog",
    command: () => {
      router.push("/opcon");
    },
  },
  {
    label: "Earth",
    icon: "pi pi-globe",
    command: () => {
      router.push("/earth");
    },
  },
]);

router.push("/");
</script>
