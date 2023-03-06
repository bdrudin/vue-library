<template>
  <aside class="sidebar bg-secondary">
    <h3 class="text-dark ms-2">Menu</h3>
    <div class="nav-tab px-4 mt-3">
      <ul class="navbar-nav">
        <div>
          <li class="navbar-item" @click="active = 'dashboard'" :class="{ active: active === 'dashboard' }">
            <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
          </li>
        </div>
        <div class="pt-1">
          <li @click="active = 'books'" :class="{ active: active === 'books' }">
            <router-link :to="{ name: 'Books' }">Books</router-link>
          </li>
        </div>
        <div class="ms-2" v-if="role === 'admin'">
          <li @click="active = 'addBook'" :class="{ active: active === 'addBook' }">
            <router-link :to="{ name: 'AddBook' }">Add Book</router-link>
          </li>
        </div>
        <div class="pt-1">
          <li @click="active = 'categories'" :class="{ active: active === 'categories' }">
            <router-link :to="{ name: 'Categories' }">Categories</router-link>
          </li>
        </div>
        <div class="ms-2" v-if="role === 'admin'">
          <li @click="active = 'addCategory'" :class="{ active: active === 'addCategory' }">
            <router-link :to="{ name: 'AddCategory' }">Add Category</router-link>
          </li>
        </div>
        <div class="pt-1" v-if="role === 'admin'">
          <li @click="active = 'borrows'" :class="{ active: active === 'borrows' }">
            <router-link :to="{ name: 'Borrows' }">Borrowed books</router-link>
          </li>
        </div>
      </ul>
      <div class="mt-4 d-flex justify-content-center alin-items-center">
        <a class="btn btn-danger btn-sm" type="button" @click="logoutSistem()"  href="/"><span><i class="fa-solid fa-arrow-right-from-bracket"></i></span> Logout</a>
      </div>
    </div>
  </aside>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  data() {
    return {
      active: 'dashboard',
    };
  },
  computed: {
    ...mapState(['token', 'role']),
    role() {
      const roleString = localStorage.getItem('role');
      const role = JSON.parse(roleString);
      return role;
    },
  },
  methods: {
    ...mapMutations(['logout']),
    logoutSistem() {
      this.logout();
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow-x: hidden;
  padding-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sidebar .nav-tab {
  margin-top: 20px;
}

.sidebar .nav-tab ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar .nav-tab li {
  margin-bottom: 10px;
}

.sidebar .nav-tab li a {
  display: block;
  text-decoration: none;
  color: #fff;
}

.sidebar .nav-tab li.active {
  background-color: #0d6efd;
  padding: 5px;
  border-radius: 5px;
}

</style>
