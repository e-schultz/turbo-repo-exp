<template>
  <v-card>
    <FormGenerator :schema="schema" />
    <hr />
    -- this one will not display anything because schema2 is in the wrong shape
    --
    <FormGenerator :schema="schema2" />
    <hr />
    -- we have a computed property to transform the schema into a shape we
    expect --
    <FormGenerator :schema="schema2Transformed" />
    <hr />
    -- schema2 - but using schema2transform2
    <FormGenerator :schema="schema2Transform2" />
    <hr />
    <v-btn @click="addItem">Add Input to Schema 2</v-btn>
    <v-btn @click="changeType('select-list')"
      >Make schema 2 Options a Select List</v-btn
    >
    <v-btn @click="changeType('radio-group')"
      >Make schema 2 Options a Radio List</v-btn
    >
  </v-card>
</template>
<script>
// import AppContainer from "../components/AppContainer";
import FormGenerator from "../components/FormGenerator";
// for the current FormGenerator - it's expecting an array,
// with a component type field, and a binds property
// sometimes the shape of the data we get, isn't the shape of the data we need
// notice how this one is an array
let schema1 = [
  {
    name: "prop1",
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    name: "prop2",
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
    name: "prop3",
    componentType: "v-text-field",
    binds: {
      label: "Input Label",
    },
  },
  {
    name: "prop4",
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
    name: "prop5",
    componentType: "v-text-field",
    binds: {
      label: "Config 1 Description",
    },
    conditions: [{}],
  },
];

// sometimes we get data that is in a different shape than what we need, lets say for example
// the API changes, and we now get this back as a result
// I've just added a few tweaks here - changed it to an objected, added a layer of nesting - just because,
// and renamed binds to properties
// but -- can this still work with our form Generator?
let schema2 = {
  schemaDetails: {
    type: "object",
    properties: {
      prop1: {
        control: "v-text-field",
        properties: {
          label: "Input Label",
        },
      },
      prop2: {
        control: "radio-group",
        properties: {
          options: [
            { value: "radio-1", text: "Option 1" },
            { value: "radio-2", text: "Option 2" },
            { value: "radio-3", text: "Option 3" },
          ],
        },
      },
      prop3: {
        control: "v-text-field",
        properties: {
          label: "Input Label",
        },
      },
      prop4: {
        control: "select-list",
        properties: {
          options: [
            { value: "radio-6", text: "Config 1" },
            { value: "radio-7", text: "Config 2" },
            { value: "radio-9", text: "Config 3" },
          ],
        },
      },
      prop5: {
        control: "v-text-field",
        properties: {
          label: "Config 1 Description",
        },
      },
    },
  },
};

export default {
  data() {
    return {
      schema: schema1,
      schema2: schema2,
      newFieldStart: 6,
    };
  },
  methods: {
    changeType(type) {
      console.log("hi");
      // since we are not adding or removing a property
      // and for purposes of this example - just going to hardcode and know I want to change the type of prop4
      // since this property already exists on the data object, we can change it directly and not need to use this.set
      this.schema2.schemaDetails.properties.prop4.control = type;
    },
    addItem() {
      /*
        Vue2 can't detect new properties being added, so can't do something like this 
        although it would be nice, see doc for details
        https://v2.vuejs.org/v2/guide/reactivity.html#For-Objects
        this.schema2.schemaDetails.properties.prop6 = {
        componentType: 'v-text-field',
        properties: {
          label: 'Config 1 Description'
        }
      }
    */
      this.$set(
        this.schema2.schemaDetails.properties,
        `prop${this.newFieldStart}`,
        {
          control: "v-text-field",
          properties: {
            label: `Config ${this.newFieldStart} Description`,
          },
        }
      );
      this.newFieldStart++;
    },
  },
  computed: {
    schemaEntries() {
      // Object.entries will take an object like
      // { a: '1', b: '2'} and return an array like [['a',1],['b',2]]
      // console.log(Object.entries({ a: '1', b: '2'}))
      // the property name becomes the first element in the array, and the value the second
      // so this should result in an array that looks something like
      // [['prop1', componentType: 'v-text-field',
      //properties: {
      // label: 'Input Label'
      //}]]
      // any time schemaDetails.properties changes - this gets run
      return Object.entries(this.schema2.schemaDetails.properties);
    },
    schema2Transformed() {
      // this has a dependency on this.schemaEntries - so every time that updates - this runs

      // there are lots of different ways we could do this transformation
      // we now have an array, of arrays - where the first item is the name, and the sewcond item is the value
      // so we can start to transform it to look closer to schema1
      let x = this.schemaEntries.map(([key, value]) => {
        // we know that we have a property called 'properties', but our form expects it to be called binds
        // any other values - we can just merge into the object
        // if we have an object like
        /*
       {
         properties: 1,
         x: 2,
         y: 3
       }
       the properties property, gets assigned to properties, and then 'rest' - will collect all of the other ones
       that we have not specified, 
       */
        let { properties, control, ...rest } = value;

        return {
          name: key,
          binds: properties,
          componentType: control,
          ...rest,
        };
      });
      return x;
    },
    schema2Transform2() {
      // pretty much the same as the above, but less comments
      return this.schemaEntries.map((currentItem) => {
        /* this is the same as doing 
         let key = currentItem[0];
         let value = currentItem[1];
          */
        let [key, value] = currentItem;
        let { properties, control, ...rest } = value;

        return {
          name: key,
          binds: properties,
          componentType: control,
          ...rest,
        };
      });
    },
  },
  components: {
    //  AppContainer,
    FormGenerator,
  },
};
/*

What is the purpose of this demo?
- we had built a component that expected a certian shape of data to be passed in - the API of the component
- now and then - the data that we get (from an API, etc) - might not be the shape that the component expects
- maybe it was an API change, maybe we need to use a different API but still want to use the same components
  - refactoring FormGeneric to handle the change, or both types - leads to a whole lot of changes 
  - if we didn't did the transform 
    - I would need to modify FormGenerator to handle both schema types + all of the components it's using if we needed to support both
    - if we only needed to support one - I'd still need to modify FormGenerator + the other components to accept the new schema
  - because we did transform the schema
    - any changes to the schema, we only need to change how we transform it to match what our components expect
    - if the shape of schema2 changed again - we would only need to modify the function `schema2Transform2` - to make it match the shape
    - we touch one thing, not several 
*/
</script>