<template>
	<button class="vui-btn" @click="click"><slot></slot></button>
</template>

<script>
import _get from 'lodash/get'

export default {
  name: 'vui-button',
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
    console.log('vui-button created')

    const val = 'hhhh'
    console.log('test const to var', val)

    console.log('test lodash', _get(this.a, 'b.c'))

    console.log('test object spread', {...this.a})

    const fn = () => this.a
    console.log('test arrow function', fn())
  },
  methods: {
    click(e) {
      alert(e.target.textContent)
    }
  }
}
</script>

<style src="./style.css"></style>