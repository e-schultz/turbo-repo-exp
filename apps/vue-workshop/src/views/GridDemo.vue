<template>
  <div>
    <v-container style="outline: 1px solid red">
      This is now inside a container
    </v-container>
    <br />
    <v-row style="outline: 1px solid red">
      This is a row, not inside of a container
    </v-row>
    <v-row style="outline: 1px solid red">
      This is a row, not inside of a container
    </v-row>
    <br />
    <v-row style="outline: 1px solid red">
      <v-col style="outline: 1px solid green"
        >This is a col in a row, not in a container</v-col
      >
      <v-col style="outline: 1px solid green"
        >This is a col in a row, not in a container</v-col
      >
      <v-col style="outline: 1px solid green"
        >This is a col in a row, not in a container</v-col
      >
    </v-row>
    <br />
    <v-container style="outline: 1px solid red">
      <v-row> This is a row inside of a container </v-row>
      <v-row> This is a row inside of a container </v-row>
      <v-row>
        <v-col>This is a col in a row, in a container</v-col>
        <v-col>This is a col in a row, in a container</v-col>
        <v-col>This is a col in a row, in a container</v-col>
      </v-row>
      <br />
      <v-container style="outline: 1px solid blue">
        <v-row> This is a row inside of a container </v-row>
        <v-row> This is a row inside of a container </v-row>
        <v-row>
          <v-col>This is a col in a row, in a container</v-col>
          <v-col>This is a col in a row, in a container</v-col>
          <v-col>This is a col in a row, in a container</v-col>
        </v-row>
        <br />
        <v-container style="outline: 1px solid blue">
          <v-row> This is a row inside of a container </v-row>
          <v-row> This is a row inside of a container </v-row>
          <v-row>
            <v-col>This is a col in a row, in a container</v-col>
            <v-col>This is a col in a row, in a container</v-col>
            <v-col>This is a col in a row, in a container</v-col>
          </v-row>
        </v-container>
      </v-container>
      <v-expansion-panels multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Item - no row - no container</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            no row - no container - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row> Item - row - no container </v-row></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-row>
              row - no container Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row> Item - container - row </v-row></v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-container>
              <v-row>
                container - row Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </v-row>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
export default {}
</script>