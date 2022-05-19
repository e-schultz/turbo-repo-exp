<template>
  <div class="mx-auto v-card v-sheet theme--light elevation-2">
    <div class="v-card__title">Card Example</div>
    <div class="v-card__subtitle">Are you sure you want to save?</div>
    <div class="v-card__text">
      Here is some information
      <v-text-field
        v-model="firstName"
        label="First name"
        required
      ></v-text-field>
    </div>
    <div class="v-card__text">
      <InputStart />
    </div>
    <div class="v-card__actions">
      <button
        type="button"
        class="v-btn v-btn--text theme--light v-size--default orange--text"
      >
        <span class="v-btn__content"> Cancel </span></button
      ><button
        type="button"
        class="v-btn v-btn--text theme--light v-size--default orange--text"
      >
        <span class="v-btn__content"> Save </span>
      </button>
    </div>
  </div>
</template>
<script>
import InputStart from "./MInputStart.vue";
export default {
  components: {
    InputStart,
  },
  data() {
    return {
      firstName: "Evan",
    };
  },
};
</script>