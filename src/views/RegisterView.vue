<template>
  <div class="min-h-screen flex items-center justify-center bg-green-300">
    <div class="bg-white rounded-lg shadow-lg p-10 max-w-md w-full relative">
      <h2 class="text-4xl font-semibold text-center">Get Started</h2>
      <p class="text-center text-gray-500 mt-2">
        Already have an Account? <a href="/login" class="text-blue-500">Log in</a>
      </p>
      <form @submit.prevent="registerUser" class="mt-6">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Name</label>
          <input
            v-model="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            class="mt-2 px-4 py-2 border rounded-md w-full"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            class="mt-2 px-4 py-2 border rounded-md w-full"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="mt-2 px-4 py-2 border rounded-md w-full"
            required
          />
        </div>
        <button type="submit" class="w-full bg-green-500 text-white py-2 rounded-md">
          Sign Up
        </button>
      </form>
      <div class="flex items-center justify-center space-x-4 mt-4">
        <span class="text-white">Or Sign Up with</span>
        <i class="bx bxl-google text-4xl text-white"></i>
        <i class="bx bxl-apple text-4xl text-white"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../api/axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        const res = await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (res.status === 201) {
          // Save token and redirect to Home
          localStorage.setItem("token", res.data.accessToken);
          this.$router.push("/home");
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
}
</style>
