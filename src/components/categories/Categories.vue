<template>
  <div class="container">
    <h3 class="my-4 text-primary">Kategori</h3>
    <div class="row ps-1 pe-1">
      <div class="col-md-4" v-for="category in categories" :key="category.id">
        <div class="card mb-3" :class="{'card-hover': category.hover}">
          <div class="card-body">
            <h4 class="card-title">{{ category.name }}</h4>
            <p class="text-muted">Daftar Buku yang tersedia: <span class="ms-3"><i class="fa-solid fa-arrow-pointer"></i></span></p>
            <ul>
              <li v-for="book in category.books" :key="book.id">{{ book.title }}</li>
            </ul>
            <button v-if="role === 'admin'" class="btn btn-danger" @click="deleteCategory(category.id)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';
export default {
    computed: {
    ...mapState(['token', 'role']),
    role() {
      const roleString = localStorage.getItem('role');
      const role = JSON.parse(roleString);
      return role;
    },
  },
  data() {
    return {
      categories: [],
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  },
  mounted() {
    this.fetchcategories();
  },
  methods: {
    async fetchcategories() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.baseUrl}/api/v1/categories` , {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.categories = response.data.categories;
        this.successMessage = response.data.message
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCategory(id) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${this.baseUrl}/api/v1/categories/${id}` , {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.successMessage = response.data.message
        this.categories = this.categories.filter(category => category.id !== id);
      } catch (error) {
        console.error(error)
      }
    },
  },
  computed: {
    hoverCategories() {
      return this.categories.map(category => {
        category.hover = false;
        return category;
      });
    }
  }
};
</script>

<style scoped>
.card {
  transition: all 0.2s ease-in-out;
}


.card:hover {
  transform: translateY(-5px);
  background-color: #df7020;
  color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.hover:hover {
  cursor: pointer;
}
.card-body ul {
  display: none;
}
.card:hover .card-body ul {
  display: block;
}

</style>
