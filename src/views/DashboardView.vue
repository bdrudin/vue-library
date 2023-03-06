<script setup>
  import { mapGetters, mapMutations } from 'vuex'
</script>
<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <h1 class="text-center my-4">Selamat Datang di E-Perpustakaan!</h1>
        <div class="card mb-5">
          <div class="card-body">
            <h2 class="card-title">Books</h2>
            <p class="card-text">Temukan buku-buku terbaru dan terpopuler di sini. Tersedia berbagai macam genre buku yang bisa Anda pilih sesuai dengan minat dan kebutuhan Anda.</p>
          </div>
        </div>
        <div class="card mb-5">
          <div class="card-body">
            <h2 class="card-title">Categories</h2>
            <p class="card-text">Cari buku-buku berdasarkan kategori yang Anda inginkan. Kami menyediakan berbagai macam kategori buku, seperti novel, biografi, sejarah, dan masih banyak lagi.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  background-color: #df7020;
  border-color: #df7020;
}

.btn-primary:hover {
  background-color: #b35c00;
  border-color: #b35c00;
}

@media (max-width: 767px) {
  .card {
    margin-bottom: 2rem;
  }
}
</style>

<script>
export default {
  computed: {
    ...mapGetters(['isAdmin']),
  },
  methods: {
    ...mapMutations(['logout']),
    logoutSistem() {
      this.logout();
    },
  },
  
}
</script>