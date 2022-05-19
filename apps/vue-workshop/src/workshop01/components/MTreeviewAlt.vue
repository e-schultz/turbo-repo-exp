<template>
  <v-card>
    <v-treeview
      :items="treeViewItems"
      v-bind="$attrs"
      :active.sync="active"
      :open.sync="open"
      activatable
    >
      <template v-slot:label="{ item }">
        <!-- since the api for v-treeview uses label here as the
    slot name going to expose it as label to the consumer so things are
    consistent -->

        <slot v-bind:item="item" name="label"> {{ item.name }} </slot>
      </template>
    </v-treeview>
  </v-card>
</template>
<script>
import transformTree from "../utils/transformTree";
export default {
  props: ["items"],
  data() {
    return {
      active: [],
      open: [],
    };
  },
  computed: {
    treeViewItems() {
      return transformTree(this.items);
    },
  },
};

/*
Since this has been extracted to it's own method, and passing in the items - we can make
this a pure function that does not rely on 'this'
- this could be moved to it's own file if it's reusable
- this could be exported to test the data transformation without needing
  to mount the component
*/
/*
function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [key, value] = currentItem;
    let { label, properties, id, ...rest } = value;

    let children = properties ? transformTree(properties) : undefined;

    ///  let id = value.id;
    // console.log({ key, value });

    return [...acc, { key, id, name: label, children: children, ...rest }];
  }, []);
}*/
</script>
