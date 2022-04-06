<template>
  <div class="flex flex-col justify-start items-start wrapper relative">
    <div class="flex items-center mb-1">
      <font-awesome-icon
        :icon="icon"
        size="xs"
        class="mr-1"
        v-if="icon !== undefined"
      />
      <span class="text-xs">{{ label }}</span>
    </div>
    <!-- <input /> -->
    <Input
      placeholder="Select an item"
      classs="px-2 py-1 w-full text-sm"
      @focused="focused()"
      v-model="selected"
      :valueProps="selected"
      :class="[colorFn()]"
      :type="type"
      name="s123540540540"
      cursor="pointer"
    />
    <input
      type="text"
      placeholder="test"
      hidden
      v-model="selectedToSend"
      :name="name"
    />
    <ul
      v-if="inputFocused"
      @focusout="inputFocused = false"
      :tabindex="tabIndex"
      :ref="'ul' + tabIndex"
      class="
        flex flex-col
        w-11/12
        justify-start
        overflow-y-auto
        shadow-md
        rounded-md
        absolute
        z-50
        bg-white
      "
      :class="list.length * 28 < 256 ? '' : 'h-64'"
    >
      <li
        v-for="(option, i) in list"
        :key="i"
        class="
          py-1
          text-sm text-left
          mx-2
          px-2
          rounded-md
          cursor-pointer
          my-1
          flex
        "
        :class="[
          mouseOver == i
            ? ' text-white shadow-lg ' + color + 'BackgroundColor '
            : '',
          multiselect
            ? selected.includes(
                typeof option == 'object' ? option.label : option
              )
              ? ' text-white shadow-lg ' + color + 'BackgroundColor '
              : ''
            : null,
        ]"
        @mouseover="mouseOver = i"
        @mouseout="mouseOver = null"
        @click="selectThis(option)"
        ref="selectOption"
      >
        <div class="w-1/12">
          <font-awesome-icon
            icon="check"
            v-if="
              multiselect
                ? selected.includes(
                    typeof option == 'object' ? option.label : option
                  )
                : null
            "
          ></font-awesome-icon>
        </div>
        <span class="w-11/12">{{
          typeof option == "object" ? option.label : option
        }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SingleAndMultiSelect",
  data() {
    return {
      inputFocused: false,
      mouseOver: false,
      selected: "",
      selectedToSend: "",
    };
  },
  methods: {
    focused() {
      return (this.inputFocused = !this.inputFocused);
    },
    selectThis(option) {
      if (typeof option !== "object") {
        if (this.multiselect) {
          let select = [JSON.parse(JSON.stringify(this.selected))].flat();
          select.includes(option)
            ? select.splice(select.indexOf(option), 1)
            : select.push(option);
          select = select.filter((sel) =>
            typeof sel !== "number" ? sel.length > 0 : sel
          );
          this.selected = select;
          this.selectedToSend = select;
        } else {
          this.selected = option;
          this.selectedToSend = option;
          this.inputFocused = !this.inputFocused;
        }
      } else {
        if (this.multiselect) {
          let select = [JSON.parse(JSON.stringify(this.selectedToSend))].flat();

          select.map((sel) => sel.label).includes(option.label)
            ? select.splice(
                select.map((sel) => sel.label).indexOf(option.label),
                1
              )
            : select.push(option);
          select = select.filter((sel) => {
            return typeof sel == "object";
          });
          this.selectedToSend = select;
          this.selected = select.map((sel) => sel.label);
        } else {
          this.selected = option.label;
          this.selectedToSend = option;
          this.inputFocused = !this.inputFocused;
        }
      }
    },
    colorFn() {
      return this.color != undefined && this.type != undefined
        ? this.color +
            "Input" +
            this.type.charAt(0).toUpperCase() +
            this.type.substr(1).toLowerCase() +
            "Border " +
            this.color +
            "BorderColor"
        : this.color != undefined && this.type == undefined
        ? this.color + "InputFullBorder " + this.color + "BorderColor"
        : this.color == undefined && this.type == undefined
        ? "primaryInputFullBorder primaryBorderColor"
        : this.color == undefined && this.type != undefined
        ? "primaryInput" +
          this.type.charAt(0).toUpperCase() +
          this.type.substr(1).toLowerCase() +
          "Border primaryBorderColor"
        : null;
    },
  },
  updated() {
    if (this.inputFocused) {
      this.$refs["ul" + this.tabIndex].focus();
    }
  },
  props: {
    type: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      require: false,
    },
    color: {
      default: "primary",
      type: String,
      require: false,
    },
    label: {
      default: "Put a label here",
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
    },
    multiselect: {
      type: Boolean,
      require: false,
    },
    icon: {
      type: String,
    },
    list: {
      type: Array,
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
  },
};
</script>