<script setup>
import { onMounted , onUnmounted, onUpdated} from 'vue';
import { useUserStore } from '../stores/user';


const userStore = useUserStore();

console.log("Soy el log del inicio")


onMounted (() => {
  console.log("onMounted")
});

onUnmounted (() => {
  console.log("onUnmounted")
});

onUpdated( () => {
  console.log("onUpdated")
});

console.log("Soy el log del final")

</script>

<template>
  <header>
    <div class="nav-bar-login">
      <p v-if="userStore.user">{{ userStore.user.name }}</p>
      <button v-if="userStore.user" @click="userStore.closeSession()">Cerrar sesion</button>
      <button v-else @click="userStore.getUser()">Login</button>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link class="link" to="/">Productos</router-link>
          <router-link class="link" to="/create">Crear producto</router-link>
          <router-link class="link" to="/animales">Animal</router-link>
          <router-link class="link" to="/peliculas">Peliculas</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-bar-login {
  display: flex;
  justify-content: end;
  gap: 10px;
  color: white;
  margin-right: 10px;
  line-height: 1px;

  button {
    border-radius: 5px;
    padding: 10px;
    background-color: #1abc9c;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    background-color: #34495e;
  }

}

header {
  position: sticky;
  width: 100vw;
  top: 0;
  background-color: #2c3e50;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav {
  max-width: 1200px;
  margin: 0 auto;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.link:hover {
  background-color: #34495e;
  transform: scale(1.05);
}

.router-link-active {
  background-color: #1abc9c;
  color: white;
}
</style>