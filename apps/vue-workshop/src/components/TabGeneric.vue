<template>
  <div>
    <v-tabs v-model="activeTab">
      <v-tab v-for="tab in schema.properties" :key="tab.title">
        {{ tab.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item v-for="tab in schema.properties" :key="tab.title">
        <component :is="tab.component" v-bind="tab.binds" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
/* eslint-disable */
let computedCountCalled = 0;
let methodCountCalled = 0;
export default {
  props: ["schema"],
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    getTabTitle: function (x) {
      computedCountCalled++;
      console.log({ computedCountCalled, x });
      return `${x.title}`;
    },
  },

  computed: {
    // ignore this
    test() {
      return (x) => {
        computedCountCalled++;
        console.log({ computedCountCalled, x });
        return `${x.title}`;
      };
    },
  },
};
</script>