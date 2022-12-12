<template>
  <div class="lightbox">
    <button @click="prev" class="prev">
      <img src="~/assets/images/icon-previous.svg" alt="Previous" />
    </button>
    <button @click="next" class="next">
      <img src="~/assets/images/icon-next.svg" alt="Next" />
    </button>
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.img"
      class="md:rounded-lg object-cover w-full transition-opacity duration-500 ease-in-out"
      :class="
        currentImg === index
          ? 'h-[300px] md:max-h-full opacity-100'
          : 'h-0 opacity-0'
      "
      alt="Preview"
    />
    <div class="md:grid hidden grid-cols-4 gap-4 mt-4">
      <button
        @click="changeImg(index)"
        v-for="(img, index) in images"
        :key="index"
        class="overflow-hidden transition border-2 rounded-lg"
        :class="
          currentImg == index ? 'border-primary-100' : 'border-transparent'
        "
      >
        <img
          :src="img.thumb"
          alt="Preview"
          class="hover:opacity-50 transition"
          :class="currentImg === index ? 'opacity-50' : 'opacity-100'"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const currentImg = ref(0);
const images = ref([
  {
    img: "/images/image-product-1.jpg",
    thumb: "/images/image-product-1-thumbnail.jpg",
  },
  {
    img: "/images/image-product-2.jpg",
    thumb: "/images/image-product-2-thumbnail.jpg",
  },
  {
    img: "/images/image-product-3.jpg",
    thumb: "/images/image-product-3-thumbnail.jpg",
  },
  {
    img: "/images/image-product-4.jpg",
    thumb: "/images/image-product-4-thumbnail.jpg",
  },
]);
function prev() {
  if (currentImg.value === 0) {
    currentImg.value = images.value.length - 1;
  } else {
    currentImg.value--;
  }
}
function next() {
  if (currentImg.value === images.value.length - 1) {
    currentImg.value = 0;
  } else {
    currentImg.value++;
  }
}
function changeImg(index) {
  currentImg.value = index;
}
</script>
