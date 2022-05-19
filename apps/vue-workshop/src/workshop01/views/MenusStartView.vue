<template>
  <v-container>
    <v-row>
      <v-card>
        <v-card-title> Menu Demos </v-card-title>
        <v-card-text> Select An Option </v-card-text>
        <v-card-actions>
          <template v-for="(parent, index) in menuItems">
            <v-menu offset-y :key="index">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                >
                  {{ parent.name }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in parent.children"
                  :key="index"
                  link
                  :to="{
                    name: 'MenuSelected',
                    params: {
                      selectedItem: `${item.id}`,
                      selectedName: item.name,
                    },
                  }"
                >
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-card-actions>
      </v-card>
      <v-sheet>
        <router-view />
      </v-sheet>
    </v-row>
  </v-container>
</template>
<script>
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
import transformTree from "../utils/transformTree";
export default {
  data() {
    return {
      items: [{ title: "one" }],
      initial: JSON.parse(JSON.stringify(INITIAL_TREE)),
    };
  },
  computed: {
    menuItems() {
      return transformTree(this.initial);
    },
  },
};
</script>
