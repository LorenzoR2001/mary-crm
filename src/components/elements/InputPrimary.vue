<template>
  <div class="relative mb-6" data-te-input-wrapper-init>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      v-model="props.modelValue"
      :type="type ? type : 'text'"
      class="peer block min-h-[auto] w-full rounded  text-myblack border-mywhite bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleInput90"
      :placeholder="name"
      :class="props.modelValue ? 'border border-t-0  placeholder:opacity-100  ' : 'border focus:border-t-0 focus:placeholder:opacity-100 peer-focus:text-myblack'"
    />
    <label
      class="pointer-events-none absolute top-0  left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
      for="exampleInput90"
      :class="props.modelValue ? '-translate-y-[0.9rem]  scale-[0.8] text-myblack' : 'peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-myblack'"

      >{{ name }}
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["update:modelValue"]);
const props = defineProps({
  name: String,
  modelValue: String,
  type: String,

  
});
</script>
