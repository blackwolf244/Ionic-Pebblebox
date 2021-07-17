<template>
  <div id="app">
    <form @submit.prevent="onSubmit()">
      <ion-grid fixed>
        <ion-item>
          <ion-item>
            <ion-label position="floating">Idea Title</ion-label>
            <ion-input v-model="form.title" required></ion-input>
          </ion-item>
        </ion-item>
        <ion-item class="left">
          <ion-label position="floating">Your Idea goes here!</ion-label>
          <ion-textarea
            v-model="form.text"
            required
            rows="6"
            cols="20"
            auto-grow="true"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-text class="padleft"
            >Accept <a @click="showPrivacy()">Privacy Policy</a></ion-text
          >
          <ion-checkbox required v-model="form.checked"></ion-checkbox>
        </ion-item>
        <ion-toolbar>
          <ion-button type="submit" fill="outline" slot="end">
            {{ buttontext }}
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
  toastController,
} from "@ionic/vue";

import { defineComponent, reactive } from "vue";
import Privacy from "../components/privacy.vue";
import { createIdea } from "@/firebase";
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
  name: "Request",
  data() {
    return {
      form: reactive({ title: "", text: "", checked: false }),
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
          "You have to Accept the Privacy Policy in order to hand in Ideas",
          6000
        );
      } else {
        try {
          await createIdea(this.form);
          this.form.title = "";
          this.form.text = "";
          this.form.checked = false;
          this.openToast(
            "Idea is sent off! Thanks for your Contribution! \n Check out all the other Ideas! Or create some more!",
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
  padding-right: 20px;
}
ion-checkbox {
  margin-left: 20px;
}

.padleft {
  padding-left: 15px;
}
</style>