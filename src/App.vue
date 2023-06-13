<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="grid grid-cols-12 h-full">
    <div
      class="col-span-2 lg:col-span-3 xl:col-span-2 z-20 h-full overflow-y-auto"
    >
      <Sidebar />
    </div>

    <div class="col-span-10 lg:col-span-9 xl:col-span-10 overflow-hidden z-10">
      <Navbar />
      <div class="p-4 h-full overflow-auto bg-red-400">
        <router-view />
      </div>
    </div>
  </div>
</template>
