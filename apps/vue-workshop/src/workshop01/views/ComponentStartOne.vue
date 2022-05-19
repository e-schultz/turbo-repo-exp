<template>
  <v-container>
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
        <!-- workshop note
        v-treeview has a number of props, eg
        - activatable
        - color
        - dense
        - hoverable
        - etc
        - do we need to re-implement them all?
        -->
        <MTreeviewAlt :items="items" />
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <v-card class="mx-auto">
          <v-card-title>Card Example</v-card-title>
          <v-card-subtitle> Are you sure you want to save? </v-card-subtitle>
          <v-card-text>Here is some information</v-card-text>
          <v-card-actions>
            <v-btn color="orange" text> Cancel </v-btn>
            <v-btn color="orange" text> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <MCardStart />
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <div class="mx-auto v-card v-sheet theme--light">
          <div class="v-card__title">Card Example</div>
          <div class="v-card__subtitle">Are you sure you want to save?</div>
          <div class="v-card__text">Here is some information</div>
          <div class="v-card__actions">
            <button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Cancel </span></button
            ><button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Save </span>
            </button>
          </div>
        </div>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <MCard>
          <MCardTitle>This is a title</MCardTitle>
          <MCardBody>This Is the boedy</MCardBody>
          <MCardActions>
            <button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Cancel </span></button
            ><button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Save </span>
            </button>
          </MCardActions>
        </MCard>
      </v-container>
    </v-row>
  </v-container>
</template>
<script>
import MCardStart from "../components/MCardStart";
import MCard from "../components/MCard.vue";
import MCardBody from "../components/MCardBody.vue";
import MCardTitle from "../components/MCardTitle.vue";
import MCardActions from "../components/MCardActions.vue";
import MTreeview from "../components/MTreeview.vue";
import MTreeviewAlt from "../components/MTreeviewAlt.vue";
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
    let [key, value] = currentItem;
    let name = value.label;
    let children = value.properties
      ? transformTree(value.properties)
      : undefined;

    let id = value.id;
    console.log({ key, value });

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
    MCardStart,
    MCard,
    MCardBody,
    MCardTitle,
    MCardActions,
    MTreeview,
    MTreeviewAlt,
  },
};
</script>

