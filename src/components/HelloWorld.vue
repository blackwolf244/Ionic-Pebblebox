<template>
  <div class="hello" ref="dh">
    <h1 ref="myh1">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    // see https://stackoverflow.com/questions/65026253/object-is-possibly-null-on-a-refnull
    let myh1 = ref<null | { textContent: string }>(null) // declare property textContent for reference

    onMounted(() => {
      console.log('Component is mounted!')
      if (myh1.value) myh1.value.textContent = 'foo'
      console.log(myh1.value?.textContent) // ? important for optional chaining
      // message.set("Hallo");
      return {}
    }) // onMounted

    return {
      myh1,
    }
  }, // setup
}) // defineComponent
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4268b9;
}
</style>
