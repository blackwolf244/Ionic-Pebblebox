<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Map</ion-title>
      <ion-button @click="closeModal" slot="end" fill="clear">
        <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div id="nav1">
      <l-map
        id="lm1"
        ref="lmap1"
        :zoom="16"
        :center="location"
        @ready="doSomethingOnReady()"
        ><!-- @move="log('move')" -->
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker :lat-lng="[48.8301334774041, 12.9541039466858]">
          <l-popup>
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
                <ion-title>{{ title }}</ion-title>
              </ion-card-header>
              <ion-card-content>
                <ion-text color="primary">
                  <p>{{ info }}</p>
                </ion-text>
              </ion-card-content>
            </ion-card>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
  LPopup,
} from "@vue-leaflet/vue-leaflet";

import { closeOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    LMap,
    //LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    //LTooltip,
    LPopup,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonText,
  },
  name: "Modal",
  props: {
    location: { type: [], default: ["48.829311", "12.955348"] },
    title: { type: String, default: "Map" },
    subtitle: { type: String, default: "Subtitle" },
    info: { type: String, default: "Infotext" },
  },
  data() {
    return {
      closeOutline,
      content: "Content",
      center: { lat: 47.41322, lng: -1.219482 },
      // center: { lat: 48.829311, lng: 12.955348 }, // [47.41322, -1.219482] lat: 48.82931148694937, lng: 12.955348491668703
      zoom: 2, // bird view
      iconWidth: 25,
      iconHeight: 40,
      map: null,
      markers: [],
    };
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },
  methods: {
    dismissModal() {
      // eslint-disable-next-line vue/no-mutating-props
      this.location = [];
      modalController.dismiss();
    },
    doSomethingOnReady() {
      this.map = this.$refs.lmap1.leafletObject;
      // this.$log.debug(this.map);
    },

    // log(a) {
    //   this.$log.debug(a);
    // },

    // Parameter: Event
    // showLatLng(eve) {
    //   // 2 outputs, Event and object
    //   this.$log.debug("Event para", eve);
    //   // check for latlng property
    //   if (eve.latlng)
    //     alert("Lat, Lon : " + eve.latlng.lat + ", " + eve.latlng.lng);
    // },

    newCenter() {
      //this.center = { lat: 48.829311, lng: 12.955348 }; // THD location
      //this.zoom = 15; // Zoom in
      // use map reference
      this.map.flyTo({ lat: 48.829311, lng: 12.955348 }, 15);
    },

    // removeMarker(index) {
    //   this.markers.splice(index, 1);
    // },
    // addMarker(event) {
    //   if (event.latlng) {
    //     this.markers.push(event.latlng);
    //     this.$log.debug(this.markers[0]); // Test
    //   }
    // },
  },
});
</script>

<style scoped>
#nav1 {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>