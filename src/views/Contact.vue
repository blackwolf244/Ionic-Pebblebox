<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Contact</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <form action="" method="post">
          <ion-grid fixed>
            <ion-item>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input formControlName="email" type="text"></ion-input>
              </ion-item>
            </ion-item>
            <ion-item class="left">
              <ion-label position="floating">Text goes here!</ion-label>
              <ion-textarea rows="6" cols="20"></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-text class="padleft"
                >Accept <a @click="showPrivacy()">Privacy Policy</a></ion-text
              >
              <ion-checkbox required></ion-checkbox>
            </ion-item>
            <ion-toolbar>
              <ion-button
                v-on:click="onClick()"
                fill="solid"
                shape="round"
                slot="end"
              >
                Send!
              </ion-button>
            </ion-toolbar>
          </ion-grid>
        </form>
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
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonTextarea,
  IonText,
  IonCheckbox,
  IonGrid,
  modalController,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine, ellipse } from "ionicons/icons";
import { defineComponent } from "vue";
import Privacy from "../components/privacy.vue";
export default defineComponent({
  name: "Contact",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonTextarea,
    IonText,
    IonCheckbox,
    IonGrid,
    IonItem,
    IonLabel,
  },
  setup() {
    return {
      pin,
      walk,
      warning,
      wifi,
      wine,
      ellipse,
    };
  },
  methods: {
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
  padding-right: 50px;
}

ion-checkbox {
  margin-left: 20px;
}

.padleft {
  padding-left: 15px;
}
</style>