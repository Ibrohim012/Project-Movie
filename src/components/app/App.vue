<template>
  <div class="app">
    <Header />
    <div class="content">
      <!-- Header Component -->
      <AppInfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="favouriteMoviesCount"
      />
      <div class="search-panel">
        <SearchPanel @updateSearchTerm="updateSearchTerm" />
        <AppFilter :movies="movies" @filterMovies="onFilterMovies" />
      </div>
      <MovieAdd @CreateMovie="addMovie" />
      <MovieList
        :movies="filteredMovies"
        @onToggle="onToggleHandler"
        @onDelete="deleteMovie"
      />
      <MenuHolder />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieAdd from "@/components/movie-add/MovieAdd.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
// import MenuHolder from "@/components/movie-holder/menu-holder.vue";
import Header from "@/components/header-menu/Header.vue";

export default {
  components: {
    Header,
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieAdd,
    MovieList,
    // MenuHolder,
  },
  data() {
    return {
      movies: [],
      term: "",
      filteredMovies: [],
    };
  },
  computed: {
    favouriteMoviesCount() {
      return this.movies.filter((c) => c.favourite).length;
    },
  },
  mounted() {
    this.loadMovies();
  },
  watch: {
    movies: {
      immediate: true,
      handler() {
        this.filteredMovies = this.movies;
      },
    },
    term: "applyFilters",
  },
  methods: {
    async addMovie(newMovie) {
      try {
        const response = await axios.post("http://localhost:3000/save-movie", newMovie);
        if (response.status === 200) {
          this.movies.push(response.data);
        }
      } catch (error) {
        console.error("Error adding movie:", error);
      }
    },
    async loadMovies() {
      try {
        const response = await axios.get("/movies.json");
        this.movies = response.data;
        this.filteredMovies = this.movies;
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    },
    updateSearchTerm(newTerm) {
      this.term = newTerm.trim();
    },
    onFilterMovies(filtered) {
      this.filteredMovies = filtered ?? this.movies;
      this.applyFilters();
    },
    applyFilters() {
      const searchTerm = this.term.toLowerCase();
      this.filteredMovies = this.movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchTerm)
      );
    },
    async onToggleHandler({ id, prop }) {
      const updatedMovie = this.movies.find((item) => item.id === id);
      if (updatedMovie) {
        updatedMovie[prop] = !updatedMovie[prop];
        try {
          await this.updateMovie(updatedMovie);
          this.movies = this.movies.map((item) => (item.id === id ? updatedMovie : item));
        } catch (error) {
          console.error("Error updating movie:", error);
        }
      }
    },
    async updateMovie(updatedMovie) {
      try {
        await axios.put(`http://localhost:3000/movies/${updatedMovie.id}`, updatedMovie);
      } catch (error) {
        console.error("Error updating movie:", error);
      }
    },
    async deleteMovie(id) {
      try {
        const response = await axios.delete(`http://localhost:3000/movies/${id}`);
        if (response.status === 200) {
          this.movies = this.movies.filter((movie) => movie.id !== id);
        }
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    },
  },
};
</script>
