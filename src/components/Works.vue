<template>
  <div class="w-full py-4">
    <h1 class="flex justify-center text-3xl mb-4">Servizi</h1>
    <div class="flex justify-end mb-3">
      <ButtonSecondary @click="openModal" text="Aggiungi lavoro +" />
    </div>
    <Table :voci="voces">
      <template #body>
        <TrTable v-for="(work, index) in works">
          <TdTable width="20%">
            <img
              class="object-cover h-32"
              :src="services.baseURL + work?.file"
            />
          </TdTable>
          <TdTable width="70%"> {{ work?.teme }} </TdTable>
          <TdTable width="10%"
            ><span class="flex w-full justify-center"
              ><ButtonEdit @click="EditWork(work?.id, work?.teme)" />
              <ButtonDelete @click="DeleteWork(work?.id)"
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
              <div class="w-full">
                <InputPrimary v-model="teme" name="Tema" />
                <input v-if="!idSelected" type="file" ref="fileInput" @change="onFileChange" />
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              @click="InsertWorks"
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
    message="Sicuro di voler eliminare questo lavoro?"
    :action="confirmDeleteWork"
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
const works = ref([]);
const selectedFile = ref();

const voces = ref(["Foto", "Tema"]);
const teme = ref("");
const showmodal = ref(false);
const showmodalDelete = ref(false);
const idSelected = ref(0);

onMounted(() => {
  getWorks();
});

function onFileChange(event) {
  // Recupera il file selezionato dall'input di tipo "file"
  selectedFile.value = event.target.files[0];
}

function DeleteWork(id) {
  idSelected.value = id;
  showmodalDelete.value = true;
}

function openModal() {
  showmodal.value = true;

  clearData();
}

function EditWork(id, desc) {
  teme.value = desc;
  idSelected.value = id;
  showmodal.value = true;
}

function confirmDeleteWork() {
  let params = {
    element: "works",
    function: "delete",
    id: idSelected.value,
  };
  services
    .getApi(params)
    .then((response) => {
      showmodalDelete.value = false;
      idSelected.value = 0;
      getWorks();
    })
    .catch((error) => {
      console.log(error);
    });
}

function InsertWorks() {
  const formData = new FormData();
  formData.append("file",  selectedFile.value);
  formData.append("element",'works');
  formData.append('function',idSelected.value ? "update" : "insert");
  formData.append("teme", teme.value);
  formData.append("id", idSelected.value);

   services
    .getApi(formData)
    .then((response) => {
      showmodal.value = false;
      getWorks();
      clearData();
    })
    .catch((error) => {
      console.log(error);
    });
}

function clearData() {
  idSelected.value = 0;
  selectedFile.value = "";
  teme.value = "";
}
function getWorks() {
  let params = {
    element: "works",
    function: "get",
  };
  services
    .getApi(params)
    .then((response) => {
      works.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
