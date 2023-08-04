<template>
  <td class="border text-sm text-black p-3 border-primary">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: "TdTable",
  props: ["value"],
};
</script>
