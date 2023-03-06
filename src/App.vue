<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import Aside from './components/Aside.vue'
  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap"
  import { mapGetters } from 'vuex'
</script>

<template>
  <Header v-if="!isAuthenticated"/>
  <!-- <RouterView /> -->
  <div class="wrapper">
    <Aside v-if="isAuthenticated"/>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" v-if="isAuthenticated">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">E-Perpustakaan</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/books">Books</a>
            </li>
            <li class="nav-item" v-if="role === 'admin'">
              <a class="nav-link" href="/books/add">Add Book</a>
            </li>
            <li class="nav-item" >
              <a class="nav-link" href="/categories">Categories</a>
            </li>
            <li class="nav-item" v-if="role === 'admin'">
              <a class="nav-link" href="/categories/add">Add Category</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <main class="content" :style="!isAuthenticated ? { marginLeft: 0 } : {}">
      <div class="dashboard-title bg-primary shadow rounded ms-2 me-2 my-2" v-if="isAuthenticated">
        <h3 class="text-center m-0">Dashboard</h3>
      </div>
      <RouterView />
    </main>
  </div>
</template>
<script>
export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  }
}
</script>
<style lang="css">
  
.dashboard-title {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
  .sidebar {
    display: none;
  }
  .content {
    width: 100%;
    margin-left: 0 !important;
  }
}
  .content{
    margin-left: 200px;
  }

</style>