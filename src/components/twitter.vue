<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-card-title>Twitter THD</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <a
            class="twitter-timeline"
            href="https://twitter.com/TH_Deggendorf"
            data-tweet-limit="1"
            data-chrome="noheader nofooter noborders noscrollbar transparent"
          ></a>
          <ion-fab vertical="top" horizontal="end" edge slot="fixed">
            <ion-fab-button mini color="light">
              <ion-icon :icon="chevronDownCircleOutline"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="bottom">
              <!-- <ion-fab-button
                ><ion-icon :icon="heartOutline"></ion-icon
              ></ion-fab-button> -->
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

<script lang='ts'>
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
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
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
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
  name: "Twitter",
  mounted() {
    const twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
  },
});
</script>

<style scoped>
#app {
  width: 85%;
  height: 100%;
  overflow-y: auto;
}
ion-fab-button {
  width: 50px;
  height: 50px;
}
ion-fab-list ion-fab-button {
  width: 40px;
  height: 40px;
}
</style>