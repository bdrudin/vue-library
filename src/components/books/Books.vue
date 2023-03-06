<template>
  <div class="container">
    <h3 class="my-4 text-primary">Daftar Buku</h3>
    <div class="row ps-1 pe-1">
      <div class="col-md-4" v-for="book in books" :key="book.id">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">Tahun Rilis: {{ formatDate(book.release_date)}}</p>
            <p class="card-text">Summary: {{ book.summary }}</p>
            <p class="card-text">Stok: {{ book.stock }}</p>
            <p class="card-text">Kategori: {{ book.categorie.name }}</p>
            <button v-if="role !== 'admin'" class="btn btn-primary" @click="borrowBook(book.id)">
              Pinjam
            </button>
            <button v-if="role === 'admin'" class="btn btn-danger" @click="deleteBook(book.id)">
              Hapus
            </button>
            <button v-if="role === 'admin'" class="btn btn-warning" @click="editBook(book.id)">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex'

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
      books: [],
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.baseUrl}/api/v1/books` , {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.books = response.data.books;
        this.successMessage = response.data.message
      } catch (error) {
        console.error(error)
      }
    },
    formatDate(date) {
      const formattedDate = new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));
      return formattedDate;
    },
    async borrowBook(id) {
      try {
        const nowDate = new Date();
        const returnDate = new Date(nowDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        const dateForm = {
          loan_date: nowDate.toISOString().slice(0, 10),
          return_date: returnDate.toISOString().slice(0, 10),
        };

        console.log(dateForm)
        const token = localStorage.getItem('token');
        const response = await axios.post(`${this.baseUrl}/api/v1/book/${id}/borrow`, dateForm, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        this.successMessage = response.data.message
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBook(id) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${this.baseUrl}/api/v1/books/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    },
  },
};
</script>
<style scoped>
.card {
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  background-color: #df7020;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  color: #fff;
}
.hover:hover {
  cursor: pointer;
}

</style>


