<template>
  <v-card>
    <v-treeview :items="items" v-bind="$attrs" />
  </v-card>
</template>
<script>
export default {
  props: ["items"],
};
</script>
