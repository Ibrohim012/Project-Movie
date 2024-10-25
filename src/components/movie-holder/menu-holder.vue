<template>
  <div>
    <!-- Menu toggle button -->
    <button @click="isMenuOpen = true" class="menu-btn">
      <i class="bx bx-menu text-3xl"></i>
    </button>

    <!-- Sidebar menu -->
    <div
      :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
      class="fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform duration-300 p-4 z-50"
    >
      <div class="flex justify-between items-center mb-4">
        <!-- Logo and close button -->
        <h1 class="text-white font-bold text-lg">ASILMEDIA.NET</h1>
        <button @click="isMenuOpen = false">
          <i class="bx bx-x text-3xl text-white"></i>
        </button>
      </div>

      <!-- Login and subscription buttons -->
      <div class="flex space-x-2 mb-4">
        <button class="bg-teal-600 text-white py-2 px-4 rounded">Войти</button>
        <button class="bg-gray-600 text-white py-2 px-4 rounded">Подписка</button>
      </div>

      <!-- Menu items -->
      <nav class="text-gray-400 space-y-2">
        <div class="flex items-center space-x-2">
          <i class="bx bx-play-circle"></i>
          <span>Tomosha qilishingiz kerak</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-star"></i>
          <span>Ko'p marta ko'rilgan</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-label"></i>
          <span>So'nggi qo'shilgan</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-film"></i>
          <span>Фильмы (Kinolar)</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-tv"></i>
          <span>Seriallar (Seriallar)</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-planet"></i>
          <span>Multfilmlar (Multiklar)</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-tv"></i>
          <span>Onlayn TV</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-mobile"></i>
          <span>Соф (Dasturlar)</span>
        </div>
      </nav>

      <!-- Additional menu items -->
      <nav class="text-gray-400 space-y-2 mt-4">
        <!-- O'yinlar -->
        <div class="flex items-center space-x-2">
          <i class="bx bx-joystick"></i>
          <span>Игры (O'yinlar)</span>
        </div>

        <!-- Section header: Пользователям -->
        <div class="pt-4">
          <h2 class="text-sm text-gray-500">Пользователям</h2>
        </div>

        <div class="flex items-center space-x-2">
          <i class="bx bx-bookmark"></i>
          <span>Закладки</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-history"></i>
          <span>Avval ko'rilganlar</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-heart"></i>
          <span>Ваши Списки фильмов</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-collection"></i>
          <span>Коллекции</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-trophy"></i>
          <span>TOP-100</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bx-cart"></i>
          <span>Заказать</span>
        </div>

        <!-- Section header: Biz bilan bog'lanish -->
        <div class="pt-4">
          <h2 class="text-sm text-gray-500">Biz bilan bog'lanish</h2>
        </div>

        <div class="flex items-center space-x-2">
          <i class="bx bx-envelope"></i>
          <span>Почта</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bxl-telegram"></i>
          <span>Телеграм</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="bx bxl-vk"></i>
          <span>Вконтакте</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style scoped>
.menu-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 60;
}
</style>
