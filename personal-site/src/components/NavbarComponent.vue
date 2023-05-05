<!-- src/components/Navbar.Vue -->
<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link to="/database-demo" class="nav-link">Database Demo</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
.navbar {
  background-color: #445e74;
  padding: 1rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

li {
  display: inline;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-link:hover {
  color: #c9ada7;
}
</style>
