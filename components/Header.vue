<template>
  <header>
    <div class="header">
      <div>
        <button @click="showMenu = true">
          <img src="~/assets/images/icon-menu.svg" alt="Menu" />
        </button>
      </div>
      <div>
        <div><img src="~/assets/images/logo.svg" alt="Sneakers Logo" /></div>
      </div>
      <div class="header-end">
        <button><img src="~/assets/images/icon-cart.svg" alt="Cart" /></button>
        <button>
          <img src="~/assets/images/image-avatar.png" alt="User" class="w-10" />
        </button>
      </div>
    </div>
    <div class="drawer-backdrop" :class="showMenu ? 'w-full' : 'w-0'">
      <div class="drawer" :class="showMenu ? 'w-full' : 'w-0'">
        <button @click="showMenu = false">
          <span class="sr-only">Close menu</span>
          <img src="~/assets/images/icon-close.svg" alt="Close" />
        </button>
        <nav>
          <ul>
            <li v-for="item in menu" :key="item">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const menu = ["Collections", "Men", "Women", "About", "Contact"];

const showMenu = ref(false);
</script>
