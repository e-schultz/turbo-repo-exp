<template>
  <div>
    <ul>
      <li>
        PropTest.vue
        <ul>
          <li>Proptest.stringProp - {{ stringProp }}</li>
          <li>PropTest.objProp - {{ objProp.value }}</li>

          <li><v-btn @click="doStuff()">Do Stuff </v-btn></li>
          <li><v-btn @click="doStuff2">Do Stuff and Force Update </v-btn></li>
          <li><v-btn @click="logValues">Just Log</v-btn></li>
        </ul>
        with inputs
        <ul>
          <!--
          <li>string: <v-text-field v-model="stringProp" /></li>
          <li>obj: <v-text-field v-model="objProp.value" /></li>
          <li v-for="element in Object.keys(objProp)" :key="element">
            objProp.{{ element }} - <v-text-field v-model="objProp[element]" />
          </li>-->
        </ul>
      </li>
    </ul>
    <p>above, we are displaying the values passed down as props.</p>
    <p>
      When we click on the button - the method doStuff is directly modifying the
      props
    </p>
    <p>
      The values above this - are from the App.vue, when we click on 'doStuff' -
      <br />
      'doStuff' is going to set both stringProp, and objProp.value to "modifed
      prop value"
    </p>
    <!-- 
       sometimes, the stringProp value won't update on the screen
       until you click the button twice, or something else happens in vue
       to force an update.

       However, notice how when we click on "doStuff" - 
       the App data for the object also updates, this is because we have mutated an object

      Also, if you click between the two buttons - now and then you will
      see the value of 'stringProp' switch back to the initial value being
      passed down
      
      -->
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["stringProp", "objProp"],
  methods: {
    doStuff() {
      console.log("stuff");
      this.stringProp = "modified prop value";
      this.objProp.value = "modified prop value";
    },
    doStuff2() {
      this.objProp.value = "force update";
      this.$nextTick(() => {
        this.stringProp = "force update";
        this.$forceUpdate();
      });
    },
    logValues() {
      console.log(this.stringProp, this.objProp.value);
    },
  },
};
</script>