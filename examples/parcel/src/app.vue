<template>
  <div>
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

export default {
  components: { VuiModal, VuiButton }
}
</script>
