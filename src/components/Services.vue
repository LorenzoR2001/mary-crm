<template>
  <div class="w-full py-4">
    <h1 class="flex justify-center text-3xl mb-4">Servizi</h1>
    <div class="flex justify-end mb-3">
      <ButtonSecondary @click="openModal" text="Aggiungi servizio +" />
    </div>
    <Table :voci="voces">
      <template #body>
        <TrTable v-for="(service, index) in servicesWorks">
          <TdTable width="70%"> {{ service?.description }} </TdTable>
          <TdTable width="20%"> {{ service?.price }} &euro;</TdTable>
          <TdTable width="10%"
            ><span class="flex w-full justify-center"
              ><ButtonEdit
                @click="
                  EditService(service?.id, service?.description, service?.price)
                " />
              <ButtonDelete @click="DeleteService(service?.id)"
            /></span>
          </TdTable>
        </TrTable>
      </template>
    </Table>
  </div>

  <div
    v-show="showmodal"
    class="relative z-[999]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="w-full flex gap-x-4">
                <InputPrimary v-model="description" name="Descrizione" />
                <InputPrimary type="number" v-model="price" name="Prezzo" />
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              @click="InsertServices"
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Conferma
            </button>
            <button
              @click="showmodal = false"
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalConfirm
    :show="showmodalDelete"
    v-on:update="showmodalDelete = $event"
    message="Sicuro di voler eliminare questo servizio?"
    :action="confirmDeleteService"
  />
</template>

<script setup>
import ButtonSecondary from "./elements/ButtonSecondary.vue";
import services from "../services";
import { ButtonEdit, ButtonDelete } from "./elements/Actions/index.js";
import { Table, TrTable, TdTable, Action } from "../components/table";
import { ref, onMounted, reactive } from "vue";
import InputPrimary from "./elements/InputPrimary.vue";
import ModalConfirm from "./elements/ModalConfirm.vue";
const servicesWorks = ref([]);

const voces = ref(["Servizio", "Prezzo"]);
const description = ref("");
const price = ref(null);
const showmodal = ref(false);
const showmodalDelete = ref(false);
const idSelected = ref(0);

onMounted(() => {
  getServices();
});

function DeleteService(id) {
  idSelected.value = id;
  showmodalDelete.value = true;
}

function openModal() {
  showmodal.value = true;

  clearData();
}

function EditService(id, desc, pr) {
  description.value = desc;
  price.value = pr;
  idSelected.value = id;
  showmodal.value = true;
}

function confirmDeleteService() {
  let params = {
    element: "services",
    function: "delete",
    id: idSelected.value,
  };
  services
    .getApi(params)
    .then((response) => {
      showmodalDelete.value = false;
      idSelected.value = 0;
      getServices();
    })
    .catch((error) => {
      console.log(error);
    });
}

function InsertServices() {
  let params = {
    element: "services",
    function: idSelected.value ? "update" : "insert",
    price: price.value,
    id: idSelected.value,
    description: description.value,
  };
  services
    .getApi(params)
    .then((response) => {
      showmodal.value = false;
      getServices();
      clearData();
    })
    .catch((error) => {
      console.log(error);
    });
}

function clearData() {
  idSelected.value = 0;
  price.value = '';
  description.value = "";
}
function getServices() {
  let params = {
    element: "services",
    function: "get",
  };
  services
    .getApi(params)
    .then((response) => {
      servicesWorks.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
