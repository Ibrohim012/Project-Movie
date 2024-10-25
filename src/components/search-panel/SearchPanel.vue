<template>
  <div>
    <input
      type="text"
      class="form-control search-input"
      v-model="searchTerm"
      @input="validateInput"
      placeholder="Ma'lumot izlash uchun kichik harflar va lotin, rus alifbosidan foydalaning! Misol uchun: mars tutquni"
    />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      errorMessage: null,
    };
  },
  methods: {
    validateInput() {
      // Regular expression to allow only Latin, English, Russian, and Cyrillic letters
      const validCharacters = /^[a-zA-Zа-яА-ЯёЁ\s]*$/;

      if (!validCharacters.test(this.searchTerm)) {
        this.errorMessage = "Faqat ingliz, lotin, rus va kiril harflaridan foydalaning!";
        this.$emit("updateSearchTerm", ""); // Emit empty term if invalid input
      } else {
        this.errorMessage = null; // Clear error if valid
        this.$emit("updateSearchTerm", this.searchTerm); // Emit the valid search term
      }
    },
  },
};
</script>

<style scoped>
.search-input {
  padding: 1.5rem;
  margin-bottom: 1rem;
  background-color: #fcfaf5;
  margin-top: 1.2rem;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}

.error-message {
  color: red;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
</style>
