<template>
  <div class="vui-card"><slot></slot></div>
</template>

<script>
import _get from 'lodash/get'
import _set from 'lodash/set'

export default {
  name: 'vui-card',
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
    console.log('vui-card created')
    _set(this.a, 'b.c', 'ping')
    console.log('test lodash', _get(this.a, 'b.c'))

    console.log('test object spread', {...this.a})
  },
  methods: {
    click(e) {
      alert(e.target.textContent)
    }
  }
}
</script>

<style src="./style.css"></style>