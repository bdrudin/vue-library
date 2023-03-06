<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="/">E-Perpustakaan</a>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ name: 'login' }">Masuk</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'register' }">Mendaftar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    </header>
</template>
<style scoped>

</style>