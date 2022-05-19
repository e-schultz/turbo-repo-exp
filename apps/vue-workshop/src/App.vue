<template>
  <div id="app">
    <v-app app>
      <v-navigation-drawer v-model="drawer" permanent app>
        <side-menu :menu-items="menuItems" />
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ appTitle }} </v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import SideMenu from "./components/SideMenu.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SideMenu,
  },
  data() {
    return {
      drawer: false,
      routes: this.$router.getRoutes(),
    };
  },
  computed: {
    ...mapGetters(["appTitle"]),
    menuItems() {
      return this.routes.map((n) => {
        return { title: n.meta.title, path: n.path };
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
