<template>
  <div class="my-24 w-full md:px-6 bg-myblack">
    <section class="mb-32 text-center">
      <h1 class="text-center text-primary font-mytext pb-12 text-5xl">
        Testimonianze
      </h1>

      <div class="grid gap-x-6 grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="../assets/test1.jpg"
              class="w-32 rounded-full shadow-lg"
            />
          </div>
          <h5 class="mb-2 text-lg text-mywhite">Sonia</h5>
          <h6 class="mb-4 font-medium text-primary">Studentessa</h6>
          <p class="mb-4 text-mywhite">
            Esperienza unica! Il trucco era una meraviglia per non parlare dei
            massaggi al viso un vero relax, non potevo chiedere di più.
            Precisione e professionalità questi sono i due aggettivi che voglio attribuire a Maria, Veramente un'esperienza perfetta consiglio vivamente. Grazie infinite.<Virgolette />
          </p>
          <Stars />
        </div>
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="../assets/test2.jpg"
              class="w-32 rounded-full shadow-lg"
            />
          </div>
          <h5 class="mb-2 text-lg text-mywhite">Rosa</h5>
          <h6 class="mb-4 font-medium text-primary">Cameriera</h6>
          <p class="mb-4 text-mywhite">
            Con Make Up By Mary si respira aria di indiscussa professionalità e
            qualificata competenza, di evidente passione per il proprio mestiere
            e di tangibile dedizione verso le clienti. Maria ha messo a
            disposizione la loro provata esperienza, superando ogni mia
            aspettativa. Un servizio di make up all’avanguardia e di palese
            valore artistico.<Virgolette />
          </p>
          <Stars />
        </div>
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="../assets/test3.jpg"
              class="w-32 rounded-full shadow-lg"
            />
          </div>
          <h5 class="mb-2 text-lg text-mywhite">Raffaella</h5>
          <h6 class="mb-4 font-medium text-primary">Studentessa</h6>
          <p class="mb-4 text-mywhite">
            Semplicemente fantastica! Un'artista nel vero senso del termine, che
            cura come se fosse un’opera d’arte il tuo volto! Le sue tecniche
            eliminano le imperfezioni e risaltando i lineamenti del viso con un
            make up accurato dove il trucco c’è ma non si vede.<Virgolette />
          </p>
          <Stars />
        </div>
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="../assets/test4.jpg"
              class="w-32 rounded-full shadow-lg"
            />
          </div>
          <h5 class="mb-2 text-lg text-mywhite">Maria</h5>
          <h6 class="mb-4 font-medium text-primary">Infermiera</h6>
          <p class="mb-4 text-mywhite">
            Sono rimasta veramente soddisfatta il catalogo è veramente ricco di
            servizi per ogni esigenza. Oltre alle doti professionali, Maria si
            pone sempre con cordialità e spenzieratezza e fa sentire i clienti a
            proprio agio, quasi come se fossero a casa. <Virgolette />
          </p>
          <Stars />
        </div>
      </div>
    </section>
  </div>
  <!-- Container for demo purpose -->
</template>
<script setup>
import Stars from "./svg/Stars.vue";
import Virgolette from "./svg/Virgolette.vue";
</script>
