<template>
  <div class="relative mb-6" data-te-input-wrapper-init>
    <textarea
      class="peer block min-h-[auto] text-mywhite w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6]   border-mywhite outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleFormControlTextarea1"
      rows="3"
      @input="$emit('update:modelValue', $event.target.value)"
      v-model="props.modelValue"
      placeholder="Your message"
      :class="props.modelValue ? 'border border-t-0 placeholder:opacity-100' : 'border focus:border-t-0 focus:placeholder:opacity-100'"
    ></textarea>
    <label
      for="exampleFormControlTextarea1"
      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
     
      :class="props.modelValue ? '-translate-y-[0.9rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]' : 'peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]'"

      >{{ name }}</label
    >
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["update:modelValue"]);
const props = defineProps({
  name: String,
  modelValue: String,
});
</script>
