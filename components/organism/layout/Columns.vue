<template>
  <div class="flex justify-between w-full" :class="[color + 'BackgroundColor']">
    <div class="flex flex-wrap wrapper">
      <div
        v-for="(col, index) in text"
        :key="index"
        :class="[
          'w-full',
          'md:w-' + 12 / text.length + '/12 ',
          'items-' + align,
        ]"
        class="md:mb-0 mb-6 md:px-4 flex flex-1 justify-center"
      >
        <component
          :is="col.type"
          :type="col.props.type"
          :color="col.props.color"
          :name="col.props.name"
          :rounded="col.props.rounded"
          :text="col.props.text"
          :label="col.props.label"
          :placeholder="col.props.placeholder"
          :align="col.props.align"
          :marginTop="col.props.marginTop"
          :marginBottom="col.props.marginBottom"
          :image="col.props.image"
          :parentName="col.props.parentName"
          :height="col.props.height"
          :parallax="col.props.parallax"
          :combinations="col.props.combinations"
          :components="col.props.components"
          :onClick="col.props.onClick"
          :textAlign="col.props.textAlign"
          :icon="col.props.icon"
          :size="col.props.size"
          :wrapper="col.props.wrapper"
          :colorBackground="col.props.colorBackground"
          :fontWeight="col.props.fontWeight"
          :uppercase="col.props.uppercase"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Columns",
  props: {
    columnsNo: {
      type: Number,
      required: false,
      default: 2,
    },
    text: {
      type: Array,
      require: true,
    },

    align: {
      type: String,
      default: "start",
    },
    color: {
      type: String,
    },
  },
};
</script>
