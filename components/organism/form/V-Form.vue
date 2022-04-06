<template>
  <form action="" class="w-full">
    <SingleAndMultiSelect
      :list="list"
      type="bottom"
      :tabIndex="0"
    ></SingleAndMultiSelect>
    <div class="flex">
      <SingleAndMultiSelect
        :list="list"
        type="bottom"
        :multiselect="true"
        icon="save"
        :tabIndex="0"
      ></SingleAndMultiSelect>
      <SingleAndMultiSelect
        :list="list"
        type="bottom"
        :tabIndex="0"
      ></SingleAndMultiSelect>
    </div>
  </form>
</template>
<script>
import SingleAndMultiSelect from "../../molecules/form/SingleAndMultiSelect.vue";
export default {
  components: { SingleAndMultiSelect },
  name: "V-Form",
  data() {
    return {
      list: ["1", 2, 3, 4, 5, 6],
    };
  },
};
</script>
