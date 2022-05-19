<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-container>
            <!-- workshop note
        v-treeview has a number of props, eg
        - activatable
        - color
        - dense
        - hoverable
        - etc
        - do we need to re-implement them all?
        -->
            <MTreeview :items="treeItems" />
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <!-- if we don't provide any content between the open
        and closing tag - the default v-treeview rendering will take over -->
            <MTreeviewAlt :items="items" />
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <MTreeviewAlt :items="items">
              <!-- what if we want to render a link - should the m-tree-view
              know how to use the router link? -->

              <template v-slot:label="{ item }">
                <router-link
                  :to="{
                    params: { selectedItem: item.id, selectedName: item.name },
                    name: 'TreeViewSelected',
                  }"
                  :append="true"
                >
                  {{ item.name }}
                </router-link>
              </template>
            </MTreeviewAlt>
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <!-- What if we have a use case, where needing to display this as a tree view
            of links is fairly common - wouldn't it be nice to just be able to pass in the list of items
            and not need to worry about the slots? especially if we need to do this fairly often. 
            -->
            <MNavigationTree :items="items" :routeName="'TreeViewSelected'" />
          </v-container>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-container> <router-view /> </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MTreeview from "../components/MTreeview.vue";
import MTreeviewAlt from "../components/MTreeviewAlt.vue";
import MNavigationTree from "../components/MNavigationTree.vue";
/* tree view expects 
({
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
*/
const INITIAL_TREE = {
  item1: {
    id: 0,
    label: "Parent 1",
    type: "object",
    properties: {
      child1: {
        id: 1,
        label: "Child 1-1",
      },
      child2: {
        id: 2,
        label: "Child 2-2",
      },
    },
  },
  item2: {
    id: 3,
    label: "Parent 2",
    properties: {
      child1: {
        id: 4,
        label: "Child 2-1",
      },
      child2: {
        id: 5,
        label: "Child 2-2",
      },
    },
  },
  item3: {
    id: 6,
    label: "Parent 3",
    properties: {
      child1: {
        id: 7,
        label: "Child 3-1",
      },
      child2: {
        id: 8,
        label: "Child 3-2",
      },
      child3: {
        id: 9,
        label: "Nested Child",
        properties: {
          child4: {
            id: 10,
            label: "child 3-2-1",
          },
        },
      },
    },
  },
};

function transformTree(tree) {
  return Object.entries(tree).reduce((acc, currentItem) => {
    let [, value] = currentItem;
    let name = value.label;
    let children = value.properties
      ? transformTree(value.properties)
      : undefined;

    let id = value.id;

    return [...acc, { id, name, children: children }];
  }, []);
}

export default {
  data() {
    return { items: JSON.parse(JSON.stringify(INITIAL_TREE)) };
  },
  computed: {
    treeItems() {
      return transformTree(this.items);
    },
  },
  components: {
    MTreeview,
    MTreeviewAlt,
    MNavigationTree,
  },
};
</script>

