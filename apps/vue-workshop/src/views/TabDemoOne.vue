<template>
  <v-container>
    <TabGeneric :schema="tabSchema" />
    <!--
    <v-tabs v-model="activeTab2">
      <v-tab v-for="tab in tabSchema.properties" :key="tab.title">
        {{ tab.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab2">
      <v-tab-item v-for="tab in tabSchema.properties" :key="tab.title">
        <component :is="tab.component" v-bind="tab.binds" />
      </v-tab-item>
    </v-tabs-items>-->
  </v-container>
</template>

<script>
import SomeComponent from "../components/SomeComponent.vue";
import SomeTest from "../components/SomeTest.vue";
import SomeForm from "../components/SomeForm.vue";
import TabGeneric from "../components/TabGeneric.vue";
import FormGenerator from "../components/FormGenerator.vue";

let schema = [
  {
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    componentType: "radio-group",
    binds: {
      options: [
        { value: "radio-1", text: "Option 1" },
        { value: "radio-2", text: "Option 2" },
        { value: "radio-3", text: "Option 3" },
      ],
      row: true,
    },
  },
  {
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    componentType: "select-list",
    binds: {
      options: [
        { value: "radio-6", text: "Config 1" },
        { value: "radio-7", text: "Config 2" },
        { value: "radio-9", text: "Config 3" },
      ],
    },
  },
  {
    componentType: "v-text-field",
    binds: {
      label: "Config 1 Description",
    },
    conditions: [{}],
  },
  {
    componentType: "radio-group",
    binds: {
      options: [
        { value: "radio-5", text: "Another Option 1" },
        { value: "radio-7", text: "Another Option 2" },
        { value: "radio-8", text: "Another Option 3" },
      ],
      column: true,
      multiple: false,
      dense: true,
    },
  },
];

let childTabSchema = {
  type: "object",
  properties: {
    one: {
      title: "child 1",
      component: SomeForm,
    },
    two: {
      title: "child 2",
      component: SomeTest,
    },
  },
};
let tabSchema = {
  type: "object",
  properties: {
    one: {
      title: "Form Generator",
      component: FormGenerator,
      binds: {
        schema: schema,
      },
    },
    two: {
      title: "Slides",
      component: SomeTest,
    },
    three: {
      title: "Fancy Card",
      component: SomeComponent,
    },
    four: {
      title: "Simple Form",
      component: SomeForm,
    },
    five: {
      title: "Nested Tabs",
      component: TabGeneric,
      binds: {
        schema: childTabSchema,
      },
    },
  },
};
export default {
  data() {
    return {
      textValue: "",
      radioValue: "",
      inputValue: "",
      schema: schema,
      tabSchema: tabSchema,
      activeTab: null,
      activeTab2: 0,
    };
  },
  components: {
    TabGeneric,
  },
};
</script>

<style>
.theme--light.v-application {
  background: #f9f9fa !important;
}
</style>