<template>
  <div class="home">
    <h1>This is Home</h1>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Header,
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
