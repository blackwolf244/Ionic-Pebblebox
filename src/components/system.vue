<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Serverinformation</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <ion-row>
            <ion-col size="12">
              <ion-note>
                <p>API-Server is currently necessary</p>
              </ion-note>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="6">
              <ion-row>
                <Memory />
              </ion-row>
            </ion-col>
            <ion-col size="6"
              ><ion-row>
                <Cpu />
              </ion-row>
            </ion-col>
          </ion-row>
          <ion-fab vertical="top" horizontal="end" edge slot="fixed">
            <ion-fab-button color="light">
              <ion-icon :icon="chevronDownCircleOutline"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="bottom">
              <ion-fab-button
                ><ion-icon :icon="heartOutline"></ion-icon
              ></ion-fab-button>
              <ion-fab-button href="/contact">
                <ion-icon :icon="warningOutline"></ion-icon>
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </main>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import Cpu from "../components/cpu.vue";
import Memory from "../components/memory.vue";
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonNote,
  IonCol,
  IonRow,
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

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    // IonButton,
    Cpu,
    Memory,
    IonNote,
    IonCol,
    IonRow,
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
  name: "Shoutout",
  data() {
    return {};
  },
  methods: {},
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

ion-fab-button {
  width: 50px;
  height: 50px;
}
ion-fab-list ion-fab-button {
  width: 40px;
  height: 40px;
}
ion-item {
  padding: 0;
  margin: 0;
  height: 60px;
}
.messagewindow {
  width: 80%;
  height: 100px;
  padding-left: 20px;
}
ion-button {
  margin-top: 22px;
}
ion-col {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>