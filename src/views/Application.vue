<template>
  <Sidebar></Sidebar>
  <section class="main_content dashboard_part">
    <Header></Header>
    <div class="main_content_iner">
      <div class="about">
        <h2>This is the Application</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Application',
  components: {
    Header,
    Sidebar,
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
