<template>
  <header>
    <div class="header">
      <div class="drawer-open">
        <button @click="showMenu = true">
          <img src="~/assets/images/icon-menu.svg" alt="Menu" />
        </button>
      </div>
      <div>
        <div>
          <img src="~/assets/images/logo.svg" alt="Sneakers Logo" />
        </div>
      </div>
      <div class="header-end">
        <button><img src="~/assets/images/icon-cart.svg" alt="Cart" /></button>
        <button>
          <img src="~/assets/images/image-avatar.png" alt="User" class="w-10" />
        </button>
      </div>
    </div>
    <div class="drawer-container" :class="showMenu ? 'w-full' : 'w-0'">
      <div
        class="drawer-overlay"
        @click="showMenu = false"
        :class="showMenu ? 'w-full opacity-100' : 'w-0 p-0 opacity-0'"
      ></div>
      <div class="drawer" :class="showMenu ? 'w-[300px]' : 'w-0 p-0'">
        <button
          @click="showMenu = false"
          class="drawer-close"
          :class="showMenu ? 'block' : 'hidden'"
        >
          <span class="sr-only">Close menu</span>
          <img src="~/assets/images/icon-close.svg" alt="Close" />
        </button>
        <nav class="drawer-menu" :class="showMenu ? 'flex' : 'hidden'">
          <div v-for="item in menu" :key="item">
            <a href="#">{{ item }}</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const menu = ["Collections", "Men", "Women", "About", "Contact"];

const showMenu = ref(false);
</script>
