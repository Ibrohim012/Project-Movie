<template>
  <div class="header-container">
    <header
      class="bg-red-600 flex items-center justify-between px-4 py-3 h-16 shadow-md w-full"
    >
      <!-- Chap qism -->
      <div class="flex items-center space-x-4">
        <!-- Menu Icon -->
        <i class="bx bx-menu text-white text-2xl cursor-pointer"></i>
        <!-- Home Icon -->
        <i class="bx bx-home text-white text-2xl cursor-pointer"></i>
        <!-- Title va subtitle -->
        <div class="flex flex-col">
          <h1 class="text-white text-lg font-semibold">Saytda qidiruv</h1>
          <span class="text-white text-sm">Ищите Ваше любимое кино у нас</span>
        </div>
      </div>

      <!-- O'ng qism -->
      <div class="flex items-center space-x-4">
        <!-- Search Icon -->
        <i class="bx bx-search text-white text-2xl cursor-pointer"></i>
        <!-- More Options Icon -->
        <i class="bx bx-dots-vertical-rounded text-white text-2xl cursor-pointer"></i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-container {
  width: 100%;
  top: 0;
  z-index: 1; /* Header qismi ustida bo'lishi uchun */
}
</style>
