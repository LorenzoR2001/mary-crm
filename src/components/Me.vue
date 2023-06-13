<template>
  <div class="container bg-primary mx-auto p-16 lg:px-32">
    <div class="w-full grid lg:grid-cols-2">
      <div><img class="lg:w-[75%] w-100" src="../assets/mary2.jpg" /></div>
      <div>
        <div class="w-full">
          <div class="flex justify-center">
            <h1 class="text-myblack2 font-mytext text-6xl lg:mt-0 mt-8">
              Mi presento
            </h1>
          </div>
          <div class="mt-8">
            <div class="w-full grid lg:gap-y-12 gap-y-4 lg:grid-cols-4">
              <div class="flex lg:col-span-1 justify-center lg:block">
                <p class="text-myblack text-2xl">Nome</p>
              </div>
              <div class="flex lg:col-span-3 lg:justify-end justify-center">
                <span class="text-2xl text-myblack2 font-bold">Maria Federico</span>
              </div>
              <div class="flex lg:col-span-1 justify-center lg:block">
                <p class="text-myblack text-2xl">Età</p>
              </div>
              <div class="flex lg:col-span-3 lg:justify-end justify-center">
                <span class="text-2xl text-myblack2  font-bold"
                  >{{ calculate_age(new Date(2002, 10, 20)) }}
                </span>
              </div>

              <div class="flex lg:col-span-1 justify-center lg:block">
                <p class="text-myblack text-2xl">Città</p>
              </div>
              <div class="flex lg:col-span-3 lg:justify-end justify-center">
                <span class="text-2xl text-myblack2  font-bold">Casalnuovo (Na) </span>
              </div>
              <div class="flex lg:col-span-1 justify-center lg:block">
                <p class="text-myblack text-2xl">Cellulare</p>
              </div>
              <div class="flex lg:col-span-3 lg:justify-end justify-center">
                <span class="text-2xl text-myblack2  font-bold underline">
                  <a href="tel:+39 366 420 5971">+39 366 420 5971</a>
                </span>
              </div>
              <div class="lg:col-span-1 flex justify-center lg:block">
                <p class="text-myblack text-2xl">Orari</p>
              </div>
              <div class="flex lg:col-span-3 lg:justify-end justify-center">
                <span class="text-2xl text-myblack2  font-bold"
                  >Lun-Sab (07:00-19:00)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
</script>
