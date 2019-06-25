<template>
  <vui-card class="vui-modal">
    <div class="vui-modal-body">
      <slot></slot>
    </div>
    <footer class="vui-modal-footer">
      <slot name="footer"></slot>
    </footer>
  </vui-card>
</template>

<script>
import _get from 'lodash/get'

export default {
  name: 'vui-modal',
  data() {
    return {
      a: {
        b: {
          c: 'hi'
        }
      }
    }
  },
  created() {
    console.log('vui-modal created')

    console.log('test lodash', _get(this.a, 'b.c'))

    console.log('test object spread', {...this.a})
  }
}
</script>

<style src="./style.css"></style>