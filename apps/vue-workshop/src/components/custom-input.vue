<!-- I didn't write this component
it was in the sandbox I forked from -->
<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field v-bind="{ ...$attrs, ...commonAttrs }" v-on="$listeners">
      <template
        v-for="(_, scopedSlotName) in $scopedSlots"
        #[scopedSlotName]="slotData"
      >
        <slot :name="scopedSlotName" v-bind="slotData" />
      </template>
      <template v-for="(_, slotName) in $slots" #[slotName]>
        <slot :name="slotName" />
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  computed: {
    commonAttrs() {
      return {
        label: "",
        persistentHint: true,
        outlined: true,
        dense: true,
        hideDetails: false,
        class: {
          "mt-1": this.$props.label,
        },
      };
    },
  },
};
</script>
