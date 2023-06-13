<template>
  <div class="w-full bg-myblack h-full lg:mt-4 md:mt-12 mt-24">
    <section id="home" class="w-full grid lg:grid-cols-2  ">
      <div
        class="flex flex-col w-full justify-center xl:pl-32 lg:pl-24   py-12 px-4 pb-8"
      >
        <h1
          class="text-primary font-bold font-mytext text-center lg:text-left text-5xl xl:text-6xl"
        >
          Make Up By Mary
        </h1>
        <div class="flex w-full flex-wrap text-center lg:text-left">
          <p class="text-mywhite mt-4 font-mytext lg:text-xl ">
            Truccatrice professionale e studentessa dell'accademia di trucco
            <a
              target="_blank"
              class="hover:text-primary"
              href="https://accademialilianapaduano.it/?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zAVrUB-zy1zLuFFQyTlTfrUu-FhBcLAnJeqoLueGGAQ6SJkvaJs0waAri4EALw_wcB"
              ><u>Liliana Paduano</u></a
            >. <b>Il viso è una tela dove poter creare un dipinto.</b>
          </p>
          <div class="w-full mt-14 gap-x-4 lg:flex grid grid-cols-2">
            <a class="lg:w-48 lg:px-0 px-[10%] w-full" href="#services"
              ><ButtonPrimary class="w-full" text="Servizi"
            /></a>
            <a class="lg:w-48  lg:px-0 px-[10%] w-full" href="#contact"
              ><ButtonSecondary class="w-full" text="Prenota"
            /></a>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <img class="lg:w-[75%] w-100  " src="../assets/mary.jpg" />
      </div>
    </section>
    <section id="services" class="w-full bg-myblack2"><Services /></section>
    <section id="works" class="w-full bg-primary"><Works /></section>
    <section id="missions" class="w-full bg-primary"><Mission /></section>
    <section id="pricelist" class="w-full bg-blakc"><PriceList /></section>
    <section id="me" class="w-full bg-primary"><Me /></section>
    <section id="testimonial" class="w-full bg-primary">
      <Testimonial />
    </section>

    <section id="contact" class="w-full"><Contact /></section>
  </div>
</template>

<script setup>
import ButtonPrimary from "./elements/ButtonPrimary.vue";
import ButtonSecondary from "./elements/ButtonSecondary.vue";
import Contact from "./Contact.vue";
import Services from "./Services.vue";
import Me from "./Me.vue";
import Works from "./Works.vue";
import Mission from "./Mission.vue";
import PriceList from "./PriceList.vue";
import { useRoute } from "vue-router";
import router from "../router";
import Testimonial from "./Testimonial.vue";
const route = useRoute();

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  const sections = document.querySelectorAll("section[id]");

  // Get current scroll position

  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      router.push({ name: "homepage", hash: "#" + sectionId });
    }
  });
}
</script>
