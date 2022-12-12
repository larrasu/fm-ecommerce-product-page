<template>
  <header>
    <div class="header">
      <div class="drawer-open">
        <button @click="toggleMenu">
          <img src="~/assets/images/icon-menu.svg" alt="Menu" />
        </button>
      </div>
      <div>
        <div>
          <img src="~/assets/images/logo.svg" alt="Sneakers Logo" />
        </div>
      </div>
      <div class="header-end">
        <button>
          <img src="~/assets/images/icon-cart.svg" alt="Cart" />
        </button>
        <button>
          <img src="~/assets/images/image-avatar.png" alt="User" class="w-10" />
        </button>
      </div>
    </div>
    <Drawer :showMenu="showMenu" :toggleMenu="toggleMenu" :menu="menu" />
  </header>
</template>

<script setup>
const menu = ["Collections", "Men", "Women", "About", "Contact"];

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
