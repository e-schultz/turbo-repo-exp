<template>
  <v-card>
    <v-card-text> Yo! - {{ selectedItem }} - {{ selectedName }} </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["selectedItem", "selectedName"],
};
</script>
