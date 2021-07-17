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
        <form @submit.prevent="onSubmit()">
          <ion-grid fixed>
            <ion-item>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input v-model="form.email" type="email"></ion-input>
              </ion-item>
            </ion-item>
            <ion-item class="left">
              <ion-label position="floating">Text goes here!</ion-label>
              <ion-textarea
                v-model="form.text"
                required
                rows="6"
                cols="20"
              ></ion-textarea>
            </ion-item>
            <ion-item>
              <ion-text class="padleft"
                >Accept <a @click="showPrivacy()">Privacy Policy</a></ion-text
              >
              <ion-checkbox required v-model="form.checked"></ion-checkbox>
            </ion-item>
            <ion-toolbar>
              <ion-button type="submit" fill="solid" shape="round" slot="end">
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
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonInput,
  IonTextarea,
  IonText,
  IonCheckbox,
  IonGrid,
  modalController,
  toastController,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";
import Privacy from "../components/privacy.vue";
import { createContact } from "@/firebase";

export default defineComponent({
  name: "Contact",
  components: {
    IonContent,
    IonHeader,
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
    IonButtons,
    IonMenuButton,
  },
  data() {
    return {
      form: reactive({ email: "", text: "", checked: false }),
      buttontext: "Pebble away!",
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
    async openToast(message: string, duration: number) {
      const toast = await toastController.create({
        message: message,
        duration: duration,
      });
      return toast.present();
    },

    async onSubmit() {
      if (this.form.checked == false) {
        this.openToast(
          "You have to Accept the Privacy Policy in order to send a Message",
          6000
        );
      } else {
        try {
          await createContact(this.form);
          this.form.email = "";
          this.form.text = "";
          this.form.checked = false;
          this.openToast(
            "Your Message is sent off and saved on our Database! we'll try to respond ASAP so keep your eyes open for answers heading your way!",
            8000
          );
          this.buttontext = "Another one?";
        } catch (error) {
          console.log(error);
        }
      }
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