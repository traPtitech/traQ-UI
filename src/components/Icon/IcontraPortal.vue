<template functional>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 3H4V21H6V15.1277H20V3ZM18 8.28571V13.1277H6V5H13.4L18 8.28571Z"
      :fill="props.color"
    />
  </svg>
</template>
<script>
export default {
  name: 'IconTraPortal',
  props: {
    size: {
      type: String,
      default: '16'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>
