<template>
  <td class="border p-3 ">
    <router-link :to="{name : path , params : (params ?  params : {})}"><i class="text-lg fa-solid fa-edit"></i></router-link>
  </td>
</template>

<script>
export default {
  name: "Action",
  props: ["path",'params'],
};
</script>

<style></style>
