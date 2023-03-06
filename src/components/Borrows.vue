<template>
  <div class="container">
    <h1 class="my-4 text-primary">List Buku yang dipinjam</h1>
    <div class="row">
      <div v-for="borrow in borrows" :key="borrow.id" class="col-md-6 col-lg-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ borrow.users.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ borrow.users.email }}</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="fw-bold">{{ borrow.books.title }}</div>
                <div>Tanggal Pinjam: {{ formatDate(borrow.loan_date) }}</div>
                <div>Tanggal Pengembalian: {{ formatDate(borrow.return_date )}}</div>
                    <button class="btn btn-info" @click="selesai(book.id)">
                    Selesai pinjam
                    </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      borrows: [],
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  },
  mounted() {
    this.fetchBorrows();
  },
  methods: {
    async fetchBorrows() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${this.baseUrl}/api/v1/borrow` , {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        console.log(response.data)
        this.borrows = response.data.borrows
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
  },
};
</script>

<style>
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
