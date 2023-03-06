<template>
    <form role="form" @submit.prevent="submitForm">
      <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-1">
        <p class="lead fw-normal mb-0 me-3">Mendaftar dengan </p>
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>
      </div>
      <!-- Name input -->
      <div class="form-outline mb-1">
        <label class="form-label fw-bold" for="name">Nama</label>
        <input type="text" id="name" class="form-control form-control-lg"
          placeholder="Masukan nama..." v-model="name"/>
      </div>
      
      <!-- Email input -->
      <div class="form-outline mb-1">
        <label class="form-label fw-bold" for="email">Email</label>
        <input type="email" id="email" class="form-control form-control-lg"
          placeholder="user@mail.com" v-model="email" />
      </div>
      <!-- Password input -->
      <div class="form-outline mb-1">
        <label class="form-label fw-bold" for="password">Password</label>
        <input type="password" id="password" class="form-control form-control-lg"
          placeholder="********" v-model="password" />
      </div>
      <div class="text-center text-lg-start mt-4 pt-2 mb-4">
        <button type="submit" class="btn btn-primary btn-lg"
          style="padding-left: 1.5rem; padding-right: 1.5rem;">Daftar</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">Sudah memiliki akun? <a href="/login"
            class="link-primary">Masuk</a></p>
      </div>
    </form>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: 'user',
      };
      this.$emit('register', formData);
    },
  }
}
</script>