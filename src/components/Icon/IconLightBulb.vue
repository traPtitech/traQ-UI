<template functional>
  <svg
    :width="props.size"
    :height="props.size"
    version="1.1"
    id="emoji"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 72 72"
    enable-background="new 0 0 72 72"
    xml:space="preserve"
  >
    <g id="_xD83D__xDCA1__1_">
      <path
        fill="none"
        :stroke="props.color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="
		M52.3,23.8c0,4-1.8,5.9-3.8,10.5c-0.5,1.2-4.2,13.4-4.2,13.4H27.1c0,0-3-11.7-3.5-12.6c-2.4-4-4.4-6.9-4.4-11.3
		c0-9.1,7.4-16.6,16.6-16.6C44.8,7.2,52.3,14.6,52.3,23.8z"
      />

      <line
        :stroke="props.color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="35.7"
        y1="47.2"
        x2="35.7"
        y2="35.3"
      />

      <line
        :stroke="props.color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="41.7"
        y1="35.3"
        x2="29.7"
        y2="35.3"
      />
      <path
        fill="none"
        :stroke="props.color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="
		M52.3,23.8c0,4-1.8,5.9-3.8,10.5c-0.5,1.2-4.2,13.4-4.2,13.4H27.1c0,0-3-11.7-3.5-12.6c-2.4-4-4.4-6.9-4.4-11.3
		c0-9.1,7.4-16.6,16.6-16.6C44.8,7.2,52.3,14.6,52.3,23.8z"
      />
      <path
        fill="none"
        :stroke="props.color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="
		M43.9,56.5c0,4.5-3.7,8.2-8.2,8.2c-4.5,0-8.2-3.7-8.2-8.2H43.9z"
      />

      <line
        :stroke="props.color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="27.2"
        y1="52.2"
        x2="44.3"
        y2="52.2"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconLightBulb',
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
