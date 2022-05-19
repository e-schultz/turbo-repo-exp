<template>
  <v-container>
    <v-checkbox
      v-model="checkbox"
      :label="`Open Multipul: ${checkbox.toString()}`"
    ></v-checkbox>
    <ExpansionPanelGeneric :schema="schema" :multiple="checkbox">
    </ExpansionPanelGeneric>
  </v-container>
</template>
<script>
import TabDemoOne from './TabDemoOne.vue'
import SchemaTransformTest from './SchemaTransformTest'
import FormGeneratorSimple from './FormGeneratorSimple'
import ExpansionPanelGeneric from '../components/ExpansionPanelGeneric'
let schema = [
  {
    title: 'Tab Demo One',
    componentType: TabDemoOne
  },
  {
    title: 'Schema Transform Test',
    componentType: SchemaTransformTest
  },
  {
    title: 'Form Generator Simple',
    componentType: FormGeneratorSimple
  }
]
export default {
  components: {
    ExpansionPanelGeneric
  },
  data() {
    return { schema, checkbox: true }
  }
}
</script>