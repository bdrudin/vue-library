<template>
  <div class="container">
    <h3 class="my-4">Buat Kategori baru</h3>
    <form role="form" @submit.prevent="addCategory()">
      <div class="mb-3">
        <label for="name" class="form-label">Nama Kategori *</label>
        <input type="text" class="form-control" id="name" v-model="category.name" required>
      </div>
      <button type="submit" class="btn btn-primary">Tambah</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      category: {
        name: ''
      },
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    }
  },
  methods: {
    async addCategory() {
      const categoryData = this.category
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${this.baseUrl}/api/v1/categories`, categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.successMessage = response.data.message
        this.category = {
            name: ''
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
