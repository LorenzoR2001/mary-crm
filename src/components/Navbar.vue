<template>
  <nav
    class="z-[99] w-full fixed px-4 py-4 flex justify-between items-center bg-myblack  "
  >
    <div class="w-full justify-end flex">
      <a href="#home" class="text-3xl font-bold leading-none">
        <img src="../assets/logo.png" class="w-24" />
      </a>
      <div class="lg:hidden relative w-full flex justify-end">
        <ul id="menu" class="z-[199]">
          <a
            class="menu-button icon-plus flex justify-center items-center"
            id="open-menu"
            href="#menu"
            title="Show navigation"
          >
            <svg
              class="block h-4 w-4 fill-primary"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
          ></a>
          <a
            class="menu-button icon-minus flex justify-center items-center"
            href="#0"
            title="Hide navigation"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
              class="fill-primary"
            >
              <path
                d="m256-168-88-88 224-224-224-224 88-88 224 224 224-224 88 88-224 224 224 224-88 88-224-224-224 224Z"
              /></svg
          ></a>
          <li class="menu-item" title="listino prezzi">
            <a class="flex justify-center items-center" href="#pricelist">
              <svg
                class="fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path
                  d="M563-110q-115 0-204.5-59.5T232-338H116v-118h96q-1-3-1-16.5t1-31.5h-96v-118h116q40-100 128-164t203-64q84 0 153.5 32.5T844-727l-84 84q-41-41-90.5-65T563-732q-62 0-117 32t-80 78h228v118H329l-1.5 12q-1.5 12 1.5 36h265v118H361q29 54 84.5 82T563-228q57 0 106.5-24.5T760-317l84 83q-58 58-127.5 91T563-110Z"
                />
              </svg>
            </a>
          </li>
          <li class="menu-item" title="Contatti">
            <a class="flex justify-center items-center" href="#contact">
              <span class="fa fa-linkedin"
                ><svg
                  class="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path
                    d="m434-38 8-125-3-1q-146.329-17-243.665-125.268Q98-397.535 98-544.768 98-704 209.282-814.5 320.564-925 480.18-925q79.202 0 148.511 30.5t120.809 82q51.5 51.5 82 120.866T862-543q0 84-38 159.5t-99.5 140q-61.5 64.5-138 116T434-38Zm118-201q80-60 136-139.5T744-543q0-109-77.5-186.5T480-807q-109 0-186.5 77.5T216-543q0 109 77.5 186.5T480-279h72v40Zm-71-102q22.585 0 37.793-15.207Q534-371.415 534-394t-15.207-37.793Q503.585-447 481-447t-37.793 15.207Q428-416.585 428-394t15.207 37.793Q458.415-341 481-341Zm-42-131h82q0-27 5.5-43.5T545-545q20-19 38.5-38t18.5-58q0-54.5-33-83.75T482-754q-45.885 0-79.859 29.833Q368.167-694.333 355-654l75.328 31q5.672-18 17.663-34.5T480-674q21 0 30.5 11.25T520-639q0 17-15 31t-27 25q-27 26-33 47.5t-6 63.5Zm41-51Z"
                  /></svg
              ></span>
            </a>
          </li>
          <li class="menu-item">
            <a
              class="flex justify-center items-center"
              title="lavori"
              href="#works"
            >
              <span class="fa fa-instagram"
                ><svg
                  class="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path
                    d="M180-107q-49.7 0-83.85-34.15Q62-175.3 62-225v-408q0-49.7 34.15-83.85Q130.3-751 180-751h125v-56.212Q305-857 339.176-891t83.912-34h114.176Q587-925 621-890.85q34 34.15 34 83.85v56h125q49.7 0 83.85 34.15Q898-682.7 898-633v408q0 49.7-34.15 83.85Q829.7-107 780-107H180Zm0-118h600v-408H180v408Zm243-526h114v-56H423v56ZM180-225v-408 408Z"
                  /></svg
              ></span>
            </a>
          </li>
          <li class="menu-item">
            <a
              class="flex justify-center items-center"
              title="Servizi"
              href="#services"
            >
              <span class="fa fa-twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-primary"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path
                    d="M757-568 560-764l41-42q35-35 84-35t84 35l29 29q35 35 35 84t-35 84l-41 41ZM105-113v-198l151-150L43-672l236-236 213 212 68-68 197 196-69 68 213 211L664-52 452-264 302-113H105Zm223-419 91-92-41-42-46 46-55-56 46-46-43-42-92 92 140 140Zm336 336 91-91-42-44-47 46-54-56 45-46-41-41-92 92 140 140Zm-456-20h52l351-352-51-52-352 351v53Z"
                  /></svg
              ></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full justify-end items-center hidden lg:flex">
        <ul
          class="hidden absolute lg:flex lg:mx-8 lg:items-end lg:w-auto lg:space-x-6"
        >
          <li>
            <a
              class="text-sm hover:text-gray-500"
              :class="
                $route.hash === '#home'
                  ? 'text-primary font-bold'
                  : 'text-mywhite'
              "
              href="#home"
              >Home</a
            >
          </li>

          <li>
            <a
              class="text-sm hover:text-gray-500"
              :class="
                $route.hash === '#services'
                  ? 'text-primary font-bold'
                  : 'text-mywhite'
              "
              href="#services"
              >Servizi</a
            >
          </li>

          <li>
            <a
              class="text-sm"
              :class="
                $route.hash === '#works'
                  ? 'text-primary font-bold  '
                  : 'text-mywhite'
              "
              href="#works"
              >I miei lavori</a
            >
          </li>

          <li>
            <a
              :class="
                $route.hash === '#pricelist'
                  ? 'text-primary font-bold '
                  : 'text-mywhite'
              "
              class="text-sm hover:text-gray-500"
              href="#pricelist"
              >Listino</a
            >
          </li>
           <li>
            <a
              class="text-sm hover:text-gray-500"
              href="#contact"
              :class="
                $route.hash === '#contact'
                  ? 'text-primary font-bold'
                  : 'text-mywhite'
              "
              >Contatti</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const visibleMenu = ref(false);
</script>
<style scoped>
#menu {
  left: 50%;
  top: 50%;
  margin: -75px 0 0 -75px;
  list-style: none;
  font-size: 200%;
}

.menu-button {
  opacity: 0;
  z-index: -1;
}

.menu-button {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0%;
  top: 0%;
  border-radius: 50%;
  background: #424242;
  background-size: 100%;
  overflow: hidden;
  text-decoration: none;
}

#menu:not(:target) > a:first-of-type,
#menu:target > a:last-of-type {
  opacity: 1;
  z-index: 1;
}

#menu:not(:target) > .icon-plus:before,
#menu:target > .icon-minus:before {
  opacity: 1;
}

.menu-item {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0%;
  top: 0%;
  margin-right: 5px;
  margin-top: 5px;

  border-radius: 50%;
  background-color: #424242;
  transform: translate(0px, 0px);
  transition: transform 500ms;
  z-index: -2;
  transition: 0.5s;
}

.menu-item:hover {
  opacity: 0.5;
  box-shadow: 0 5px 10px black;
}

.menu-item a {
  color: #fff;
  position: relative;
  top: 30%;
  left: 0;
  text-decoration: none;
}

#menu:target > .menu-item:nth-child(6) {
  transform: rotate(-85deg) translateY(-100px) rotate(40deg);
  transition-delay: 0s;
  padding: 1px 5px 6px 5px;
}

#menu:target > .menu-item:nth-child(5) {
  transform: rotate(-115deg) translateY(-100px) rotate(116deg);
  padding: 1px 5px 6px 5px;
  transition-delay: 0.1s;
}

#menu:target > .menu-item:nth-child(3) {
  transform: rotate(-145deg) translateY(-100px) rotate(147deg);
  transition-delay: 0.2s;
  padding: 1px 5px 6px 5px;
}

#menu:target > .menu-item:nth-child(4) {
  transform: rotate(-175deg) translateY(-100px) rotate(175deg);
  transition-delay: 0.3s;
  padding: 1px 5px 6px 5px;
}

.content {
  position: absolute;
  text-align: center;
  margin: -10px 0 0 -30px;
  top: 70%;
  left: 50%;
  font-size: 20px;
}
</style>
