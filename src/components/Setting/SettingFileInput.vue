<template lang="pug">
.setting-file-input
  input.setting-file-raw-input(:name="name" :id="name" type="file" @change="onChange")
  label.setting-file-label(:for="name") {{ label }}
  p.setting-file-name(v-if="value") {{ value.name }}
</template>

<script>
export default {
  name: 'settingFileInput',
  data() {
    return {
      settingText: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: File,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    maxSize: {
      type: Number,
      required: false
    }
  },
  methods: {
    reset() {
      this.settingText = ''
      this.$emit('inputsetting', '')
    },
    onChange(event) {
      const file = event.target.files[0]
      if (this.maxSize && file.size > this.maxSize) {
        window.alert('ファイルサイズが大きすぎます')
        this.value = null
        event.preventDefault()
        return
      }
      this.$emit('input', file)
      const reader = new FileReader()
      reader.onload = e => {
        this.$emit('load', e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="sass">
.setting-file-raw-input
  display: none

.setting-file-label
  display: inline-block
  padding: .5rem 1rem
  color: $primary-color-on-bg
  border: 1px solid $primary-color-on-bg
  border-radius: 4px
  cursor: pointer

.setting-file-name
  margin-top: 0.5rem
</style>
