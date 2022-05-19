<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <ul>
            <li>
              Values from parent
              <ul>
                <li>someValue - {{ someValue }}</li>
                <li>objProp.value - {{ objProp.value }}</li>
                <li>objProp.valueTwo - {{ objProp.valueTwo }}</li>
              </ul>
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <prop-test
            :stringProp="someValue"
            :objProp="objProp"
          ></prop-test> </v-card
      ></v-col>
    </v-row>
    <div class="row mt-4">
      <div class="col-sm-1">hi</div>
      <div class="col-sm-1">
        <!-- this is now under Tab 4 -->
        <!-- <form-generator :schema="schema" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import PropTest from "../components/PropTest.vue";

export default {
  data() {
    return {
      someValue: "string value",
      objProp: {
        value: "object passed as prop",
        valueTwo: "another value",
      },
    };
  },
  components: {
    PropTest,
  },
};
</script>

<style>
.theme--light.v-application {
  background: #f9f9fa !important;
}
</style>