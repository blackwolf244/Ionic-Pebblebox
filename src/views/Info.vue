<template>
  <section class="main-content dashboard_part">
    <!-- <Header></Header> -->
    <div class="about">
      <h2>This is the Info page</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Header from '@/components/Header.vue'
// @ is an alias to /src

export default defineComponent({
  name: 'Info',
  components: {
    // Header,
  },
  methods: {
    hello(message: string, event: Event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
  },
})
</script>
