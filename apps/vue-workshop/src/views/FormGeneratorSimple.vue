<template>
  <v-container>
    <div class="row mt-4">
      <div class="col-sm-6">
        <!-- this is now under Tab 4 -->
        <!-- <form-generator :schema="schema" /> -->
      </div>
    </div>

    <tab-generic :schema="tabSchema" />
    <!--
    <v-card>
      <ul>
        <li>
          Props being passed down to prop-test
          <ul>
            <li>someValue - {{ someValue }}</li>
            <li>objProp - {{ objProp.value }}</li>
          </ul>
        </li>
      </ul>
-->
    <!--  <prop-test :stringProp="someValue" :objProp="objProp"></prop-test>-->
    <!--  </v-card>-->
  </v-container>
</template>

<script>
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
];

let tabSchema = {
  type: "object",
  properties: {
    one: {
      title: "Simple Form",
      component: SomeForm,
    },
    four: {
      title: "Complex Form",
      component: FormGenerator,
      binds: {
        schema: schema,
      },
    },
  },
};
export default {
  data() {
    return {
      someValue: "string value",
      objProp: {
        value: "object passed as prop",
      },
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
</style>s