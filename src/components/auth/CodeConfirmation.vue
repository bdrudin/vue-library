<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="text-center mb-4">Verifikasi Kode OTP</h2>
                <p class="text-center text-muted">Kami telah mengirimkan kode otp melalui email yang Anda daftarkan. Silahkan di cek di inbox/spam email Anda. </p>
                <form role="form" @submit.prevent="otpVerifikasi">
                    <div class="mb-3">
                        <label for="otp" class="form-label">Kode OTP</label>
                        <input type="text" class="form-control" id="otp" name="otp" v-model="otpCode">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="email">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Verifikasi akun saya</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            otpCode : 0,
            email : '',
            baseUrl: import.meta.env.VITE_APP_BASE_URI
        }
    },
    methods: {
        async otpVerifikasi(){
            const otpData = {
                otp_code : this.otpCode,
                email : this.email
            }
            console.log(otpData)
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${this.baseUrl}/api/v1/otp-confirmation`, otpData, {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });
                console.log(response.data.message)
                this.$router.push('/dashboard');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>