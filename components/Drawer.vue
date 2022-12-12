<template>
  <div class="drawer-container" :class="showMenu ? 'w-full' : 'w-0'">
    <div
      class="drawer-overlay"
      @click="toggleMenu"
      :class="showMenu ? 'w-full opacity-100' : 'w-0 p-0 opacity-0'"
    ></div>
    <div class="drawer" :class="showMenu ? 'w-[300px]' : 'w-0 p-0'">
      <button
        @click="toggleMenu"
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
</template>

<script setup>
const props = defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  toggleMenu: {
    type: Function,
    required: true,
  },
  menu: {
    type: Array,
    required: true,
  },
});
</script>
