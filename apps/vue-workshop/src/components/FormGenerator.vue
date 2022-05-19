<template>
  <v-card elevation="2" class="pa-4">
    <template v-for="(item, index) in schema">
      <component :is="item.componentType" :key="index" v-bind="item.binds" />
    </template>
  </v-card>
</template>
<script>
import VTextField from "vuetify/lib/components/VTextField/VTextField";
import CustomInput from "./custom-input";
import RadioGroup from "./RadioGroup";
import SelectList from "./SelectList";
export default {
  props: ["schema"],
  components: {
    VTextField,
    CustomInput,
    RadioGroup,
    SelectList,
  },
};
</script>