<template>
  <div class="app-filter">
    <div class="btn-group text-center">
      <button
        class="btn"
        type="button"
        @click="showAllMovies"
        :class="['btn', filterName === 'all' ? 'active-btn' : 'btn-outline-dark']"
      >
        Barcha kinolar
      </button>
      <button
        class="btn"
        type="button"
        @click="showPopularMovies"
        :class="['btn', filterName === 'popular' ? 'active-btn' : 'btn-outline-dark']"
      >
        Ko'p marta ko'rilgan
      </button>
      <button
        class="btn"
        type="button"
        @click="showFavouriteMovies"
        :class="['btn', filterName === 'favourite' ? 'active-btn' : 'btn-outline-dark']"
      >
        Tomosha qilinganlar
      </button>
    </div>

    <!-- Placeholder messages -->
    <div v-if="message" class="alert alert-warning mt-3">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"],
  data() {
    return {
      filterName: "all", // Hozirgi tanlangan filter nomi
      message: null,
    };
  },
  methods: {
    showAllMovies() {
      this.message = null;
      this.filterName = "all";
      this.$emit("filterMovies", this.movies);
    },

    showPopularMovies() {
      const popularMovies = this.movies.filter((movie) => movie.views > 500);

      if (popularMovies.length === 0) {
        this.message = "Ko'p marta ko'rilgan kinolar mavjud emas!";
      } else {
        this.message = null;
      }
      this.filterName = "popular";
      this.$emit("filterMovies", popularMovies);
    },

    showFavouriteMovies() {
      const favouriteMovies = this.movies.filter((movie) => movie.favourite);

      if (favouriteMovies.length === 0) {
        this.message = "Sizning saralangan kinolar mavjud emas!";
      } else {
        this.message = null;
      }
      this.filterName = "favourite";
      this.$emit("filterMovies", favouriteMovies);
    },
  },
};
</script>

<style scoped>
/* Aktiv tugma uchun rang */
.active-btn {
  background-color: #2e84e6;
  color: #fff;
  border: none;
}
</style>
