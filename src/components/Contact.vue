<template>
  <!-- Container for demo purpose -->

  <div class="container pt-24 bg-myblack mx-auto md:px-6">
    <h1 class="text-center text-primary font-mytext mb-12 text-5xl">
      Contattami
    </h1>

    <!-- Section: Design Block -->
    <section class="mb-32">
      <div
        class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('./assets/trucchi.jpg')]"
      ></div>
      <div class="container px-6 md:px-12">
        <div
          class="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
        >
          <div class="flex flex-wrap">
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            >
              <form>
                <InputPrimary v-model="name" name="Nome" />
                <InputPrimary v-model="email" name="email" />
                <TextAreaPrimary v-model="message" name="Messagio" />
                <div class="w-full flex justify-center">
                  <ButtonSecondary text="Invia" />
                </div>
              </form>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div
                  class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div
                        class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                      >
                        <svg
                          class="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path
                            d="M799-89q-136 0-264-60.5t-227.5-160Q208-409 147.5-537T87-801q0-31.714 21.143-52.857T161-875h161q37 0 60 18t31 52l25 119q6 30-.5 52.5T411-594l-103 90q34 54 82 101.5T493-320l101-98q20-19 44.5-26t53.5 0l111 25q35 9 52.5 30t17.5 56v169q0 32.143-21.143 53.571Q830.714-89 799-89ZM247-617l65-57-15-75h-82q3 34 10.457 66.941Q232.914-649.118 247-617Zm361 361q33 14 68 23t71 14v-83l-74-17-65 63ZM247-617Zm361 361Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold text-white">Telefoni</p>

                      <p class="text-neutral-200 underline hover:text-primary">
                        <a href="tel:+39 366 420 5971">+39 366 420 5971</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div
                        class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                      >
                        <svg
                          class="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path
                            d="M172-126q-53 0-89.5-36.5T46-252v-456q0-53 36.5-89.5T172-834h616q53 0 89.5 36.5T914-708v456q0 53-36.5 89.5T788-126H172Zm308-271L172-597v345h616v-345L480-397Zm0-111 308-200H172l308 200Zm-308-89v-111 456-345Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 text-white">Email prenotazioni</p>

                      <p class="text-neutral-200 underline hover:text-primary">
                        <a href="mailto:mariafederico3010@virigilio.it"> mariafederico3010@virigilio.it</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12"
                >
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div
                        class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                      >
                        <svg
                          class="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path
                            d="M479.788-472Q516-472 542-497.788q26-25.787 26-62Q568-596 542.212-622q-25.787-26-62-26Q444-648 418-622.212q-26 25.787-26 62Q392-524 417.788-498q25.787 26 62 26ZM480-217q110.308-102.888 163.654-186.944Q697-488 697-552.323q0-98.749-62.774-161.713t-154-62.964Q389-777 326-714.036t-63 161.713q0 64.323 53.346 148.379T480-217Zm0 167Q308-197 222.5-321.515 137-446.03 137-552q0-160.518 103.408-255.759Q343.817-903 479.908-903 616-903 719.5-807.759T823-552q0 105.97-85.5 230.485Q652-197 480-50Zm0-502Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bol text-white">Locazione</p>
                      <p class="text-neutral-200">
                        Casalnuovo di Napoli (Na) 80013
                      </p>
                      <p class="text-neutral-200">Italia (EU)</p>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12"
                >
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div
                        class="inline-block rounded-md bg-primary-100 p-4 text-primary"
                      >
                        <svg
                          class="fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path
                            d="M480.058-86Q404-86 339-125.5 274-165 238-232H126v-96h83q-2.25-15.667-2.625-31.333Q206-375 206-392h-80v-96h80q0-17 .375-32.667Q206.75-536.333 209-552h-83v-96h117q10-27 29-48.5t43-38.5l-66-66 69-68 86 86q34-15 70.5-16t70.5 13l90-89 68 68-64 64q29 19 50 45t34 58h111v88h-83q2.25 15.667 2.625 31.333Q754-505 754-488h80v96h-80q0 17-1 32.5t-3 31.5h84v96H722q-36 67-100.942 106.5t-141 39.5ZM480-212q66 0 107-46.706Q628-305.413 628-371v-137q0-66.412-41-113.706T480-669q-66 0-107 47.294T332-508v137q0 65.587 41 112.294Q414-212 480-212Zm-80-100h160v-96H400v96Zm0-160h160v-96H400v96Zm80 31Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold text-white">Bug report</p>

                      <p class="text-neutral-200 underline hover:text-primary">
                        <a href="mailto:mary@gmail.com"> veroncile@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>

<script setup>
import InputPrimary from "./elements/InputPrimary.vue";
import TextAreaPrimary from "./elements/TextAreaPrimary.vue";
import ButtonSecondary from "./elements/ButtonSecondary.vue";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
</script>
