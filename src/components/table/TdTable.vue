<template>
  <td class="border bg-primary  p-3 border-black">
    {{ value }}
  </td>
</template>

<script>
export default {
  name: "TdTable",
  props: ["value"],
};
</script>
