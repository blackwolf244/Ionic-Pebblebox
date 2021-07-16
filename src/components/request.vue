<template>
  <div id="app">
    <!-- <ion-button @click="openMap()"> Show Map </ion-button> -->
    <form action="" method="post">
      <ion-grid fixed>
        <ion-item>
          <ion-item>
            <ion-label position="floating">Idea Title</ion-label>
            <ion-input formControlName="email" type="text"></ion-input>
          </ion-item>
        </ion-item>
        <ion-item class="left">
          <ion-label position="floating">Your Idea goes here!</ion-label>
          <ion-textarea rows="6" cols="20" auto-grow="true"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-text class="padleft"
            >Accept <a @click="showPrivacy()">Privacy Policy</a></ion-text
          >
          <ion-checkbox required></ion-checkbox>
        </ion-item>
        <ion-toolbar>
          <ion-button v-on:click="onClick()" fill="outline" slot="end">
            Pebble away!
          </ion-button>
        </ion-toolbar>
      </ion-grid>
    </form>
  </div>
</template>

<script lang='ts'>
import {
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonTextarea,
  IonText,
  IonCheckbox,
  IonGrid,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import {
  add,
  arrowBackCircle,
  arrowForwardCircle,
  arrowUpCircle,
  chevronDownCircleOutline,
  heartOutline,
  warningOutline,
  bookmarkOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  person,
  settings,
  share,
} from "ionicons/icons";

import { defineComponent } from "vue";
import MapModal from "../components/map.vue";
import Privacy from "../components/privacy.vue";
export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonTextarea,
    IonText,
    IonCheckbox,
    IonGrid,
    IonToolbar,
  },
  setup() {
    return {
      add,
      arrowBackCircle,
      arrowForwardCircle,
      arrowUpCircle,
      chevronDownCircleOutline,
      heartOutline,
      warningOutline,
      bookmarkOutline,
      logoFacebook,
      logoInstagram,
      logoTwitter,
      logoVimeo,
      person,
      settings,
      share,
    };
  },
  name: "Request",
  methods: {
    async openMap() {
      const modal = await modalController.create({
        component: MapModal,
        componentProps: {
          location: [48.1334774041, 12.1039466858],
          title: "TH Deggendorf",
          subtitle: "lat: 48.830133477, lon: 12.954103946",
          info: "Edlmairstraße 6-8, 94469 Deggendorf, Germany",
        },
      });
      return modal.present();
    },
    async showPrivacy() {
      const modal = await modalController.create({
        component: Privacy,
        componentProps: {},
      });
      return modal.present();
    },
  },
});
</script>

<style scoped>
#container {
  position: absolute;
  left: 0;
  right: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.left {
  padding-left: 15px;
  padding-right: 15px;
}
ion-textarea {
  padding-bottom: 50px;
}
ion-button {
  padding-right: 20px;
}
ion-checkbox {
  margin-left: 20px;
}

.padleft {
  padding-left: 15px;
}
</style>