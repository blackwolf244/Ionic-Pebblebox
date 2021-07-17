<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>To be determined</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <ion-text>
            We always try to get new Pebbles going for you, so send in your
            Ideas and Vote away!
          </ion-text>
          <p>
            <router-link to="/pebble">Pebble Request</router-link>
          </p>
        </main>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang='ts'>
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { IonCardHeader, IonCardTitle, IonCardContent, IonText },
  name: "Pebblerequest",
});
</script>

<style scoped>
#app {
  width: 80%;
  height: 100%;
}
p {
  padding-top: 10px;
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>