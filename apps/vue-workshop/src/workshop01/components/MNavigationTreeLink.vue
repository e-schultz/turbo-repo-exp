<template>
  <router-link :to="itemRoute">
    {{ item.name }}
  </router-link>
</template>
<script>
function getItemRoute(item, paramMap, routeName) {
  let params = paramMap.reduce((acc, [key, value]) => {
    acc[key] = item[value];
    return acc;
  }, {});
  return {
    name: routeName,
    params,
  };
}
export default {
  props: ["item", "paramMap", "routeName"],
  computed: {
    itemRoute() {
      /*  let params = this.paramMap.reduce((acc, [key, value]) => {
        acc[key] = this.item[value];
        return acc;
      }, {});*/

      return getItemRoute(this.item, this.paramMap, this.routeName);
    },
  },
};
</script>
