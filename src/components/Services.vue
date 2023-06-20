<template>
    <div class="w-full py-4">
      <h1 class="flex justify-center text-3xl mb-4">Servizi</h1>
      <div class="flex justify-end mb-3">
        <ButtonSecondary text="Aggiungi servizio +" />
      </div>
      <Table :voci="voces">
        <template #body>
          <TrTable>
            <TdTable v-show="voci.first_name.show">{{ row.first_name }}</TdTable>
            <TdTable v-show="voci.last_name.show">{{ row.last_name }}</TdTable>
            <TdTable v-show="voci.date_of_birth.show">{{
              row.date_of_birth
            }}</TdTable>
            <TdTable>
              <Action showPage="showautore" :idrow="row.id" />
            </TdTable>
          </TrTable>
        </template>
      </Table>
    </div>
  </template>
  
  <script setup>
  import ButtonSecondary from "./elements/ButtonSecondary.vue";
  
  import { Table, TrTable, TdTable, Action } from "../components/table";
  import { ref } from "vue";
  const voces = ref(["Servizio", "Prezzo"]);
  </script>
  