<template>
  <div>
    <!-- <vui-card> -->
      <!-- <vui-button>BBB</vui-button> -->
    <!-- </vui-card> -->
    <vui-modal>
      <p>MMMMModal</p>
      <template v-slot:footer>
        <vui-button>BBB</vui-button>
      </template>
    </vui-modal>
  </div>
</template>

<script>
import { VuiModal, VuiButton } from 'vui'
// import { VuiButton } from 'vui'
// import VuiButton from 'vui/button'
// import VuiCard from 'vui/card'

export default {
  // components: { VuiButton, VuiCard }
  components: { VuiModal, VuiButton }
}
</script>
