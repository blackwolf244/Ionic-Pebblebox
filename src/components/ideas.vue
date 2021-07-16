<template>
  <div id="app">
    <ion-list>
      <ion-item>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Awesome Title</ion-card-title>
          </ion-card-header>
          <ion-card-content
            ><ion-text color="primary">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
            </ion-text>
            <ion-toolbar>
              <ion-buttons slot="primary">
                <ion-button color="warning"> Wish for it! </ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-card-content>
        </ion-card>
      </ion-item>
      <ion-item>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Awesome Title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-text color="primary">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
            </ion-text>
            <ion-toolbar>
              <ion-button
                v-on:click="onClick()"
                fill="solid"
                shape="round"
                slot="end"
              >
                Make a wish!
              </ion-button>
            </ion-toolbar>
          </ion-card-content>
        </ion-card>
      </ion-item>
      <ion-item>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Awesome Title</ion-card-title>
          </ion-card-header>
          <ion-card-content
            ><ion-text color="primary">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
            </ion-text>
            <ion-toolbar>
              <ion-buttons slot="secondary">
                <ion-button color="primary">
                  <ion-icon color="warning" :icon="sparklesSharp"></ion-icon>
                  Make a Wish!
                </ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-card-content>
        </ion-card>
      </ion-item>
    </ion-list>
  </div>
</template>

<script lang='ts'>
import { IonItem, IonList } from "@ionic/vue";
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
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  personCircle,
  archiveOutline,
  archiveSharp,
  bookmarkSharp,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  schoolOutline,
  schoolSharp,
  settingsOutline,
  settingsSharp,
  fishOutline,
  fishSharp,
  sparklesOutline,
  sparklesSharp,
  search,
  star,
} from "ionicons/icons";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonItem,
    IonList,
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
      ellipsisHorizontal,
      ellipsisVertical,
      helpCircle,
      personCircle,
      search,
      star,
      archiveOutline,
      archiveSharp,
      bookmarkSharp,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      schoolOutline,
      schoolSharp,
      settingsOutline,
      settingsSharp,
      fishOutline,
      fishSharp,
      sparklesOutline,
      sparklesSharp,
    };
  },
  name: "Ideas",
  methods: {},
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

ion-icon {
  padding-right: 10px;
}
</style>