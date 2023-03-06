<template>
<section class="login">
  <div class="container-fluid h-custom mt-3">
    <div class="row d-flex align-items-center">
        <div class="ms-5 col-md-8 col-lg-8 col-xl-8 mb-2">
            <h1>Selamat datang di E-Perpustakaan</h1>
        </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5 mb-2">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form role="form" @submit.prevent="handleSubmit">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-4">
            <p class="lead fw-normal mb-0 me-3">Masuk dengan</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label fw-bold" for="form3Example3">Email</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="user@mail.com" v-model="email" required/>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <label class="form-label fw-bold" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="********" v-model="password" required/>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-1">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Lupa password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2 mb-4">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 1.5rem; padding-right: 1.5rem;">Masuk</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Belum punya akun? <a href="/register"
                class="link-danger">Mendaftar</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <!-- Copyright -->
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2022. All rights reserved.
    </div>
    <!-- Copyright -->

    <!-- Right -->
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <!-- Right -->
  </div>
</section>
</template>
<script>
  import axios from 'axios';
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
        successMessage: '',
        baseUrl: import.meta.env.VITE_APP_BASE_URI
      }
    },
    methods: {
      ...mapMutations(['setToken', 'login']),
      async handleSubmit() {
        const credentials = {
          email: this.email,
          password: this.password,
        }
        try {
          const response = await axios.post(`${this.baseUrl}/api/v1/login`, credentials);
          console.log(response.data)
          if(response.status === 200){
            this.successMessage = response.data.message;
            this.setToken(response.data.token.token);
            localStorage.setItem('user', JSON.stringify(response.data.username));
            this.login(response.data.username);
            this.$router.push('/dashboard');
          }else{
            this.errorMessage = response.data.message;
          }
          if(credentials.email === "admin@gmail.com"){
            localStorage.setItem('role', JSON.stringify('admin'));
          }   
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
</script>