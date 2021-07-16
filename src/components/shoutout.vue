<template>
  <ion-card color="tertiary">
    <ion-card-header>
      <ion-card-title>Shoutout</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <div class="messagewindow">
            <ion-text>
              {{ MessageArray }}
            </ion-text>
          </div>

          <form action="" method="post">
            <ion-item color="secondary">
              <ion-label position="floating">Broadcast a message!</ion-label>
              <ion-input
                maxlength="50"
                enterkeyhint="send"
                name="message"
                required
                spellcheck="true"
              ></ion-input>
              <ion-button
                slot="end"
                @click="sendMessage('Hello World')"
                color="primary"
              >
                <ion-icon
                  slot="icon-only"
                  :icon="arrowForwardCircle"
                ></ion-icon>
              </ion-button>
            </ion-item>
          </form>
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
import {
  IonLabel,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonInput,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonText,
  IonButton,
  IonItem,
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
    IonInput,
    IonLabel,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
    IonText,
    IonButton,
    IonItem,
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
    return {
      messageArray: [],
      connection: null,
    };
  },
  created() {
    this.connection = new WebSocket("wss://localhost:3000");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Connection Success");
    };

    this.connection.onmessage = function (event) {
      console.log(event);
    };
  },
  methods: {
    sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
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
</style>