<script setup>
import Login from '@/views/LoginView.vue'
import Register from '@/views/RegisterView.vue'

</script>

<template>
  <main>
    <div class="container-fluid text-center d-flex align-items-center justify-content-center flex-column">
      <div class="row">
        <div class="col-lg-8 offset-md-2 mt-2 col-sm-12">
          <h4>E-Perpustakaan adalah layanan perpustakaan digital dengan konsep digital. Kami hadir untuk memudahkan pengelolaan perpustakaan digital Anda.</h4>
        </div>
        <h5 class="text-center"> Dibuat menggunakan:</h5>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card mx-auto my-3" style="width: 18rem;">
            <img src="https://www.example.com/vue-logo.webp" class="card-img-top" alt="Vue logo">
            <div class="card-body">
              <h5 class="card-title">Vue 3</h5>
              <p class="card-text">Vue adalah sebuah framework JavaScript yang digunakan untuk membangun antarmuka pengguna yang interaktif.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card mx-auto my-3" style="width: 18rem;">
            <img src="https://www.example.com/bootstrap-logo.webp" class="card-img-top" alt="Bootstrap logo">
            <div class="card-body">
              <h5 class="card-title">Bootstrap 5</h5>
              <p class="card-text">Bootstrap adalah sebuah framework CSS yang digunakan untuk mempercepat proses pembuatan desain web yang responsif dan mudah dikustomisasi.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="card mx-auto my-3" style="width: 18rem;">
            <img src="https://www.example.com/nodejs-logo.webp" class="card-img-top" alt="Node.js logo">
            <div class="card-body">
              <h5 class="card-title">Node.js</h5>
              <p class="card-text">Node.js adalah sebuah platform server-side JavaScript yang memungkinkan pengembang untuk membangun aplikasi jaringan dengan menggunakan JavaScript di sisi server.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card mx-auto my-3" style="width: 18rem;">
            <img src="https://www.example.com/adonisjs-logo.webp" class="card-img-top" alt="AdonisJS logo">
            <div class="card-body">
              <h5 class="card-title">AdonisJS</h5>
              <p class="card-text">AdonisJS adalah sebuah framework web Node.js yang menyediakan segala kebutuhan yang dibutuhkan untuk membangun aplikasi web berbasis server dengan cepat dan efisien.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>