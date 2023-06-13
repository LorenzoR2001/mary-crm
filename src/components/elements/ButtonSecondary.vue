<template>
  <button
    class="text-myblack font-bold bg-primary rounded-lg text-1xl hover:bg-mywhite hover:text-myblack py-2 px-10"
  >
    {{ text }}
  </button>
</template>
<script setup>
const props = defineProps({
  text: String,
});
</script>
