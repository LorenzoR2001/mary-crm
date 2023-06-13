<template>
  <button class="text-mywhite font-bold rounded-lg text-1xl border hover:bg-mywhite hover:text-myblack py-2 px-10 border-mywhite">
    {{ text }}
  </button>
</template>
<script setup>
const props = defineProps({
  text: String,
});
</script>
