<template>
  <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
      <v-list-item v-for="(link, index) in menuItems" :key="index">
        <v-list-item-title>
          <router-link :to="link.path || '/'">
            {{ link.title }}</router-link
          ></v-list-item-title
        >
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
export default {
  props: ["menuItems"],
};
</script>