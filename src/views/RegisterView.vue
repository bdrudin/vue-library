<script setup>
  import RegisterForm from '@/components/auth/RegisterForm.vue'
</script>

<template>
<section class="register">
  <div class="container-fluid h-custom mt-3">
    <div class="row d-flex align-items-center">
        <div class="ms-5 col-md-8 col-lg-8 col-xl-8 mb-2">
            <h1>Registrasi akun E-Perpustakaan</h1>
        </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5 mb-2">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <!-- Form Register -->
        <RegisterForm @register="registerUser" />
        <div>
              <div v-if="showSuccessAlert" class="mt-n4 mx-3 alert alert-success alert-dismissible text-white" role="alert">
                <span class="text-sm text-success">{{ successMessage }}</span>
                <button type="button" class="btn-close py-3" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div v-else-if="showErrorAlert" class="mt-n4 mx-3 alert alert-danger alert-dismissible text-white" role="alert">
                <span class="text-sm text-danger">{{ errorMessage }}</span>
                <button type="button" class="btn-close py-3" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
        </div>
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

export default {
  data(){
    return {
      showSuccessAlert: false,
      showErrorAlert: false,
      errorMessage: '',
      successMessage: '',
      baseUrl: import.meta.env.VITE_APP_BASE_URI
    };
  }, 
  methods: {
    async registerUser(formData){
      try {
        const response = await axios.post(`${this.baseUrl}/api/v1/register`, formData);
        if(response.status === 201){
          this.successMessage = response.data.message;
          this.showSuccessAlert = true;
          this.showErrorAlert = false;
          this.profilName = '';
          this.username = '';
          this.password = '';
        }else{
          this.errorMessage = response.data.message;
          this.showSuccessAlert = false;
          this.showErrorAlert = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>