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
      class="object-cover w-full transition-opacity duration-500 ease-in-out md:hidden"
      :class="currentImg === index ? 'h-[300px] opacity-100' : 'h-0 opacity-0'"
      alt="Preview"
    />
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.img"
      @click="toggleModal"
      class="rounded-xl object-cover w-full transition-opacity duration-500 ease-in-out cursor-pointer hidden md:block"
      :class="currentImg === index ? 'h-[500px] opacity-100' : 'h-0 opacity-0'"
      alt="Preview"
    />
    <div class="md:grid hidden grid-cols-4 gap-4 mt-4 md:mt-8 md:gap-8">
      <button
        @click="changeImg(index)"
        v-for="(img, index) in images"
        :key="index"
        class="overflow-hidden transition border-2 rounded-xl"
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

    <div
      class="lightbox-modal"
      :class="showModal ? 'opacity-100' : 'opacity-0 -z-50'"
    >
      <div class="lightbox-overlay" @click="toggleModal"></div>

      <div class="lightbox-content">
        <div class="lightbox-image">
          <button @click="showModal = false" class="float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="fill-white w-8 h-8 mb-4 -mr-2"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </button>
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
            class="rounded-xl object-cover w-full transition-opacity duration-500 ease-in-out"
            :class="
              currentImg === index ? 'h-[500px] opacity-100' : 'h-0 opacity-0'
            "
            alt="Preview"
          />
        </div>
        <div class="md:grid hidden grid-cols-4 gap-4 mt-4 md:mt-8 md:gap-8">
          <button
            @click="changeImg(index)"
            v-for="(img, index) in images"
            :key="index"
            class="overflow-hidden transition border-2 rounded-xl"
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
const showModal = ref(false);

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

function toggleModal() {
  showModal.value = !showModal.value;
}
</script>
