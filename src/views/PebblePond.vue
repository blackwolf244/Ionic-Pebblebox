<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>THD Favourites</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-grid fixed>
          <ion-row>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <Weather></Weather>
            </ion-col>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <OpenMensa></OpenMensa>
            </ion-col>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <Shoutout></Shoutout>
            </ion-col>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="8">
              <Twitter></Twitter> </ion-col
            ><ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <System />
            </ion-col>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <PebbleRequest></PebbleRequest>
            </ion-col>
          </ion-row>
          <ion-row> </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import Weather from "../components/weather.vue";
import OpenMensa from "../components/mensa.vue";
import Twitter from "../components/twitter.vue";
import Shoutout from "../components/shoutout.vue";
import PebbleRequest from "../components/pebblerequest.vue";
import System from "../components/system.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    Weather,
    OpenMensa,
    Twitter,
    Shoutout,
    System,
    PebbleRequest,
  },
  setup() {
    // const today = new Date().toISOString().slice(0, 10);
  },
});
</script>

<style scoped>
ion-card {
  height: 250px;
  overflow-y: auto;
  border-radius: 0px;
}
</style>