<script>
import { Form as VeeForm, Field as VeeField, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    VeeForm,
    VeeField,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      viewers: 0,
      validationSchema: yup.object({
        name: yup.string().required("Kino nomini kiriting"),
        viewers: yup
          .number()
          .typeError("Faqat raqam kiriting")
          .required("Necha marta ko'rilganini kiriting")
          .positive("Faqat ijobiy raqam kiriting")
          .integer("Faqat butun son kiriting"),
      }),
    };
  },
  methods: {
    submitForm(values) {
      const newMovie = {
        id: Date.now(),
        name: values.name,
        viewers: values.viewers,
        favourite: false,
        like: false,
      };
      this.$emit("CreateMovie", newMovie);
    },
  },
};
</script>

<template>
  <div class="movie-add-form">
    <h3>Yangi kino qo'shish</h3>
    <VeeForm @submit="submitForm" :validation-schema="validationSchema">
      <div>
        <VeeField
          name="name"
          type="text"
          class="form-control new-movie-label text-center"
          placeholder="Kino nomi"
        />
        <ErrorMessage name="name" class="text-danger" />
      </div>

      <div>
        <VeeField
          name="viewers"
          type="number"
          class="form-control new-movie-label text-center"
          placeholder="Necha marotaba ko'rilgan!"
        />
        <ErrorMessage name="viewers" class="text-danger" />
      </div>

      <button class="btn btn-outline-dark" type="submit">Qo'shish</button>
    </VeeForm>
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
  font-size: 12px;
}
</style>
