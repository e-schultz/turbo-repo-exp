<template>
  <v-select :items="options" label="Standard"></v-select>
</template>
<script>
export default {
  props: ['options']
}
</script>