<template>
  <MTreeviewAlt :items="items">
    <template v-slot:label="{ item }">
      <router-link :to="getRoute(item)">
        {{ item.name }}
      </router-link>
    </template>
  </MTreeviewAlt>
</template>
<script>
import MTreeviewAlt from "./MTreeviewAlt.vue";
// import MNavigationTreeLink from "./MNavigationTreeLink.vue";
export default {
  props: {
    items: Object,
    routeName: {
      type: String,
      default: "",
    },
    paramMap: {
      type: Array,
      default: () => {
        return [
          ["selectedItem", "id"],
          ["selectedName", "name"],
        ];
      },
    },
  },
  methods: {
    getRoute(item) {
      let params = this.paramMap.reduce((acc, [key, value]) => {
        acc[key] = item[value];
        return acc;
      }, {});
      let routeTo = {
        name: this.routeName,
        params,
      };

      return routeTo;
    },
  },
  components: {
    // MNavigationTreeLink,
    MTreeviewAlt,
  },
};
</script>

<!-- 
 <MTreeviewAlt :items="items" />
-->

<!-- 
 <MTreeviewAlt :items="items">
    <template v-slot:label="{ item }">
    <router-link :to="`/workshop-02/${item.id}/${item.name}`">
        {{ item.name }}
    </router-link>
    </template>
</MTreeviewAlt>
-->