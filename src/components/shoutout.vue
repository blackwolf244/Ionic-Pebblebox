<template>
  <ion-card color="tertiary">
    <ion-card-header>
      <ion-card-title>Shoutout</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <div class="messagewindow">
            <div class="center">
              <ion-label position="floating">Message:</ion-label>
              <ion-text v-for="{ id, message } in shouts" :key="id">
                <h2>{{ message }}</h2>
              </ion-text>
            </div>
          </div>

          <form @submit.prevent="send()">
            <ion-item>
              <ion-label position="floating">Broadcast a message!</ion-label>
              <ion-input
                maxlength="50"
                enterkeyhint="send"
                v-model="form.message"
                required
                spellcheck="true"
              ></ion-input>
              <ion-button type="submit" slot="end" color="primary">
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

import { useLoadShouts, updateShout } from "@/firebase";
import { defineComponent, reactive } from "vue";

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
    const shouts = useLoadShouts();
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
      shouts,
    };
  },
  name: "Shoutout",
  data() {
    return {
      form: reactive({ message: "" }),
    };
  },
  methods: {
    async send() {
      await updateShout(this.form);
      this.form.message = "";
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
  height: 60px;
}

.messagewindow {
  width: 80%;
  height: 110px;
  align-content: center;
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
ion-button {
  margin-top: 22px;
}
</style>