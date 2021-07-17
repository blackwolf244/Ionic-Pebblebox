<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-grid fixed>
          <ion-row>
            <ion-col
              v-if="active.weather == true"
              size="12"
              size-sm="12"
              size-md="6"
              size-xl="4"
            >
              <Weather></Weather>
            </ion-col>
            <ion-col
              v-if="active.mensa == true"
              size="12"
              size-sm="12"
              size-md="6"
              size-xl="4"
            >
              <OpenMensa></OpenMensa>
            </ion-col>
            <ion-col
              v-if="active.shoutout == true"
              size="12"
              size-sm="12"
              size-md="6"
              size-xl="4"
            >
              <Shoutout></Shoutout>
            </ion-col>
            <ion-col
              v-if="active.twitter == true"
              size="12"
              size-sm="12"
              size-md="6"
              size-xl="8"
            >
              <Twitter></Twitter> </ion-col
            ><ion-col
              v-if="active.system == true"
              size="12"
              size-sm="12"
              size-md="6"
              size-xl="4"
            >
              <System />
            </ion-col>
            <ion-col size="12" size-sm="12" size-md="6" size-xl="4">
              <ion-card>
                <PebbleRequest></PebbleRequest>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row> </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// Dynamic Dashboard Attempt currently unfunctional. resetting to static in multiple pages. would need a page refresh to function and reload the properties correctly.

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
  IonCard,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import Weather from "../components/weather.vue";
import OpenMensa from "../components/mensa.vue";
import Twitter from "../components/twitter.vue";
import Shoutout from "../components/shoutout.vue";
import PebbleRequest from "../components/pebblerequest.vue";
import System from "../components/system.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

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
    IonCard,
    IonCol,
    Weather,
    OpenMensa,
    Twitter,
    Shoutout,
    System,
    PebbleRequest,
  },
  data() {
    //import location data and setup a array with active elements per page
    const route = useRoute();
    const loc = computed(() => route.params.id);
    return {
      route: route,
      location: loc,
      active: {},
      components: {
        thd: {
          weather: true,
          mensa: true,
          shoutout: false,
          twitter: true,
          system: false,
        },
        pond: {
          weather: true,
          mensa: true,
          shoutout: true,
          twitter: true,
          system: true,
        },
        social: {
          weather: false,
          mensa: false,
          shoutout: true,
          twitter: true,
          system: false,
        },
      },
    };
  },
  mounted() {
    //on location change reload the active components
    if (this.location == "thd") {
      this.active = this.components.thd;
    } else if (this.location == "pond") {
      this.active = this.components.pond;
    } else if (this.location == "social") {
      this.active = this.components.social;
    } else {
      this.active = {};
    }
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