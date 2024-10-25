<template>
  <li
    class="list-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]"
  >
    <span
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
      class="list-group-item-label"
      >{{ movie.name }}</span
    >
    <input type="number" class="list-group-item-input" :value="movie.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn-cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="bx bxs-cookie"></i>
      </button>

      <button type="button" class="btn-trash btn-sm" @click="$emit('onDelete', movie.id)">
        <i class="bx bx-trash"></i>
      </button>

      <i class="bx bx-star"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.$emit("onLike", this.movie.id);
    },
    toggleFavourite() {
      this.$emit("onFavourite", this.movie.id);
    },
  },
};
</script>

<style scoped>
.list-group-item {
  padding: 15px;
  border-bottom: 1px solid #3d5a80;
}
.list-group-item:last-child {
  border-bottom: none;
}

.list-group-item span {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
}

.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: none;
  outline: none;
}

.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}

.list-group-item .btn-cookie {
  color: #f7db20;
}

.list-group-item .btn-trash {
  color: #f22c2c;
}

.list-group-item .bx-star {
  width: 35px;
  height: 35px;
  font-size: 17px;
  text-align: center;
  line-height: 35px;
  color: #f0c118;
  transition: 0.4s all;
  transform: translate(30px);
  opacity: 0;
}

.list-group-item.like .bx-star {
  opacity: 1;
  transform: translateX(0);
}

.list-group-item.favourite .list-group-item-label,
.list-group-item.favourite .list-group-item-input {
  color: #f0c118;
}
</style>
