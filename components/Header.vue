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
      <nav class="header-menu">
        <div v-for="item in menu" :key="item" class="menu-item">
          <a href="#">{{ item }}</a>
        </div>
      </nav>
      <div class="header-end">
        <button @click="toggleCart" class="group relative">
          <div
            v-for="item of cart"
            class="bg-primary-100 text-white px-2 text-xs absolute -right-2 rounded-full -top-2"
          >
            {{ item.qty }}
          </div>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
              class="group-hover:fill-accent-100 transition"
              :class="showCart ? 'fill-accent-100' : ''"
            />
          </svg>
        </button>
        <button
          class="transition border-2 hover:border-primary-100 rounded-full"
        >
          <img src="~/assets/images/image-avatar.png" alt="User" class="w-10" />
        </button>
      </div>
    </div>

    <div
      class="cart-wrapper"
      :class="
        showCart ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      "
    >
      <div
        class="cart"
        :class="
          showCart
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-1 hidden'
        "
      >
        <div class="cart-heading"><h1>Cart</h1></div>
        <div class="cart-body">
          <div v-if="cart == ''" class="empty">Your cart is empty.</div>
          <div v-if="cart" v-for="item of cart" class="flex gap-4 mb-4">
            <img
              src="/images/image-product-1.jpg"
              alt=""
              class="w-14 h-14 object-cover rounded-lg"
            />
            <div class="mr-auto">
              <h1>{{ item.name }}</h1>
              <p>
                {{ formatter.format(item.price) }} x {{ item.qty }}
                <span class="font-bold ml-2">
                  {{ formatter.format(item.price * item.qty) }}
                </span>
              </p>
            </div>
            <div>
              <button @click="$emit('deleteItem', item.id)">
                <img src="~/assets/images/icon-delete.svg" alt="" />
              </button>
            </div>
          </div>
          <button v-if="cart != ''" class="btn-primary">Checkout</button>
        </div>
      </div>
    </div>

    <Drawer :showMenu="showMenu" :toggleMenu="toggleMenu" :menu="menu" />
  </header>
</template>

<script setup>
const props = defineProps(["cart", "showCart", "toggleCart"]);
const emit = defineEmits(["deleteItem"]);
const menu = ["Collections", "Men", "Women", "About", "Contact"];

const showMenu = ref(false);

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
