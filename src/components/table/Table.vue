<template>
  <table class="w-full text-left">
    <thead class="   text-white">
      <tr>
        <th scope="col" class="p-3 bg-primary text-myblack"  v-for="voce in voci">
          <span>
            {{ voce }}
          </span>
        </th>
        <th scope="col" class="p-3 bg-primary text-myblack">
          <span> Azioni </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["voci"],
};
</script>
