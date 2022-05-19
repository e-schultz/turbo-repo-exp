<template>
  <v-container>
    <v-row class="text-center"> {{ msg }} </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"],
};
</script>
