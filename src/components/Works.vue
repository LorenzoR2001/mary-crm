<template>
  <div class="w-full bg-myblack2">
    <div class="multicolor">
      <h1
        class="text-center mb-12 flex pt-28 justify-center bg-myblack2 text-primary font-mytext text-5xl"
      >
        I miei lavori
      </h1>

      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="(work, index) in works" :key="index">
          <div class="carousel__item flex flex-row">
            <img
              @mouseover="showworks = false"
              @mouseout="showworks = true"
              class="object-cover w-[500px] h-[500px]"
              :src="services.baseURL + 'img/works/' + work"
            />
            <div class="hidden lg:block w-[500px] h-[500px] bg-mywhite relative p-8">
              <img
                src="../assets/favicon.png"
                class="absolute inset-0 m-auto opacity-30"
              />
              <h2 class="text-3xl flex justify-start">Make-up</h2>
              <div class="text-xl flex flex-col items-start mt-4 ">
                <p >Modella - <b>Nome modella</b></p>
                <p >Tempistica - <b>tot ore</b></p>
                <p >Tema - <b>Tema trucco</b></p>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :breakpoints="{
          0: { itemsToShow: 3 },
          769: { itemsToShow: 4 },
          1025: { itemsToShow: 6 },
          1536: { itemsToShow: 12 },
        }"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(work, index) in works" :key="index">
           <Transition class="  bg-myblack" name="slide-fade">
            <div
              :class="
                showworks ? 'slide-fade-leave-active' : 'slide-fade-leave-to'
              "
              class="carousel__item bg-myblack"
              @click="slideTo(index)"
            >
              <img
              :class="index== currentSlide ? 'opacity-20' : ''"
                class="object-cover h-64"
                :src="services.baseURL + 'img/works/' + work"
              />
            </div>
          </Transition>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>


<script setup>
import services from "../services";
import { ref, onMounted, reactive } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const works = reactive([]);
const currentSlide = ref(0);
const showworks = ref(true);

onMounted(() => {
  getWorks();
});

function slideTo(val) {
  currentSlide.value = val;
}

function getWorks() {
  services
    .getWorks()
    .then((response) => {
      works.push(...response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<style scoped>
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}

.multicolor {
  width: 100%;
  background: linear-gradient(
    to top,
    #e8bda1 0%,
    #e8bda1 60%,
    #161616 60%,
    #161616 100%
  );
}
</style>