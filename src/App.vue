<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-mywhite">
    <Sidebar />

    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <Navbar />
      <div class="p-4 h-full overflow-auto bg-mywhite">
        <router-view />
      </div>
    </div>
  </div>
</template>

