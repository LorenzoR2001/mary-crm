<template>
   <input type="checkbox" id="menu-open" class="hidden" />
  <header
    class="bg-primary text-myblack z-[999] flex justify-between lg:hidden h-max"
    data-dev-hint="mobile menu bar"
  >
    <label for="menu-open" id="mobile-menu-button" class="m-2 z-40 h-6 w-6">
      <svg
        id="menu-open-icon"
        class="h-6 w-6 transition duration-200 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        id="menu-close-icon"
        class="h-6 w-6 transition duration-200 ease-in-out bg-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </label>
  </header>
  <aside
    id="sidebar"
    class="bg-primary shadow-lg absolute inset-y-0 z-[99] left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out overflow-y-auto h-screen w-full sm:w-[280px]"
    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
  >
    <nav data-dev-hint="second-main-navigation or footer navigation">
      <div class="text-xl overflow-hidden h-full px-8">
        <div
          class="py-6 mb-4 flex w-full justify-center border-b border-myblack"
        >
          <Logo />
        </div>

         <div class="flex flex-col gap-y-2">
          <router-link :to="{ name: 'homepage' }">
            <p
              class="text-myblack cursor-pointer hover:text-secondary hover:fill-secondary hover:font-bold"
              :class="$route.name =='homepage' ? 'text-secondary font-bold fill-secondary' : '' "
            >
              <span class="flex items-center gap-x-2"><Home />Home</span>
            </p></router-link
          >
          <router-link :to="{ name: 'services' }">
            <p
              class="text-myblack cursor-pointer hover:text-secondary hover:fill-secondary hover:font-bold" :class="$route.name =='services' ? 'text-secondary font-bold fill-secondary' : '' "
            >
              <span class="flex items-center gap-x-2"><Services />Servizi</span>
            </p>
          </router-link>
          <router-link :to="{ name: 'works' }">
            <p
              class="text-myblack cursor-pointer hover:text-secondary hover:fill-secondary hover:font-bold" :class="$route.name =='works' ? 'text-secondary font-bold fill-secondary' : '' "
            >
              <span class="flex items-center gap-x-2"><Gallery />Lavori</span>
            </p></router-link
          ><p
              class="text-myblack cursor-pointer hover:text-secondary hover:fill-secondary hover:font-bold"
            >
            <div class="  flex lg:hidden   flex-col mt-8 gap-y-8">
          <StartMenu class="flex justify-center" />
        </div>
            </p>
        </div>
        
      </div>
    </nav>
  </aside>
</template>

<script setup>
import Logo from "./svg/Logo.vue";
import StartMenu from "./StartMenu.vue";
import Services from "./svg/Services.vue";
import Gallery from "./svg/Gallery.vue";
import Home from "./svg/Home.vue";
</script>

<style>
#sidebar {
  --tw-translate-x: -100%;
}

#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}

#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

#menu-open:checked ~ * #menu-open-icon {
  display: none;
}

#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 1025px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}

div.link-sidebar:hover path {
  fill: #ebc67a;
}

div.link-sidebar:hover span {
  color: #ebc67a;
}
</style>
