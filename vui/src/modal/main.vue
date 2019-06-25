<template>
  <kv-card class="vui-modal">
    <div class="vui-modal-body">
      <slot></slot>
    </div>
    <footer class="vui-modal-footer">
      <slot name="footer"></slot>
    </footer>
  </kv-card>
</template>

<script>
import _get from 'lodash/get'

import KvCard from '../../dist/card'

export default {
  name: 'vui-modal',
  components: { KvCard },
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

<style>
.vui-modal {
  box-shadow: 2px 6px 8px rgba(0, 0, 0, .1);
  min-width: 300px;
}
.vui-modal-body {
  min-height: 100px;
}
.vui-modal-footer {
  margin: 1em -2em -1em;
  padding: .8em 2em;
  border-top: 2px solid #333;
  background: #eee;
}
</style>
