<template>
  <div class="container">
    <h3 class="my-4">Tambah buku baru</h3>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Judul Buku *</label>
        <input type="text" class="form-control" id="title" v-model.trim="form.title" required>
      </div>
      <div class="mb-3">
        <label for="summary" class="form-label">Summary *</label>
        <textarea class="form-control" id="summary" v-model.trim="form.summary" required></textarea>
      </div>
      <div class="mb-3">
        <label for="release_date" class="form-label">Tanggal Release *</label>
        <input type="date" class="form-control" id="release_date" v-model="form.release_date" required>
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">Stock *</label>
        <input type="number" class="form-control" id="stock" v-model.number="form.stock" required>
      </div>
      <div class="mb-3">
        <label for="category_id" class="form-label">Kategori *</label>
        <select class="form-select" id="category_id" v-model.number="form.category_id" required>
          <option value="" selected disabled>Pilih kategori</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Tambah</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        title: '',
        summary: '',
        release_date: '',
        stock: '',
        category_id: '',
      },
      categories: [
        { id: 0, name: '' },
      ],
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.baseUrl}/api/v1/categories` , {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.categories = response.data.categories
        console.log(this.categories);
      } catch (error) {
        console.error(error)
      }
    },
    async submitForm() {
      const bookData = this.form
      console.log(this.form);
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${this.baseUrl}/api/v1/books`, bookData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.successMessage = response.data.message
        this.form = {
          title: "",
          summary: "",
          release_date: "",
          stock: "",
          category_id: "",
        };
      } catch (error) {
        console.error(error)
      }
    },
  },
};
</script>
