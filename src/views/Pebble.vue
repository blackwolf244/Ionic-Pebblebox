<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Pebble Request</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-segment :value="selected" @ionChange="segmentChanged($event)">
          <ion-segment-button value="request">
            <ion-label>Send a Request</ion-label>
          </ion-segment-button>
          <ion-segment-button value="ideas">
            <ion-label>Look at existing Ideas</ion-label>
          </ion-segment-button>
        </ion-segment>
        <Request v-if="selected === 'request'"></Request>
        <Ideas v-if="selected === 'ideas'"></Ideas>
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine, ellipse } from "ionicons/icons";
import { defineComponent } from "vue";
import Request from "../components/request.vue";
import Ideas from "../components/ideas.vue";

export default defineComponent({
  name: "Contact",
  data() {
    return {
      selected: "request",
    };
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    Request,
    Ideas,
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
    segmentChanged(ev: CustomEvent) {
      this.selected = ev.detail.value;
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