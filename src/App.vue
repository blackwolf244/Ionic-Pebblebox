<template>
  <!-- changed after hint in Browser concole -->
  <router-view v-slot="{ Component }">
    <transition name="component-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import './assets/app.scss';
@import './assets/style.css';

#app {
  font-family: Saira, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a4273;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  background-color: $thdlightgrey;
  color: black;
}

#nav a.router-link-exact-active {
  color: $thdblue;
}

#nav .nav-item {
  margin-right: 1em;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
