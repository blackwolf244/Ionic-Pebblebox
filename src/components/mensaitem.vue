<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ fooditem.name }}</ion-title>
      <ion-button v-on:click="dismissModal()" slot="end" fill="clear">
        <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item-group>
        <ion-item-divider>
          <ion-text><h2>Category</h2></ion-text>
        </ion-item-divider>
        <ion-item>
          <ion-label>{{ fooditem.category }}</ion-label>
        </ion-item>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>
          <ion-text> <h2>Prices</h2> </ion-text>
        </ion-item-divider>
        <ion-item>
          <ion-label>Students: {{ prices.students }}€</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Employees: {{ prices.employees }}€</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Others: {{ prices.others }}€</ion-label>
        </ion-item>
      </ion-item-group>
      <ion-item-group>
        <ion-item-divider>
          <ion-text><h2>Notes</h2></ion-text>
        </ion-item-divider>
        <div class="notes" style="padding-left: 10px">
          <ion-chip v-for="(note, index) in this.notes" :key="index">
            {{ note }}
          </ion-chip>
        </div>
      </ion-item-group>
    </ion-list>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
  IonIcon,
  IonButton,
  IonLabel,
  IonItemDivider,
  IonItem,
  IonItemGroup,
  IonList,
  IonChip,
} from "@ionic/vue";

import { closeOutline } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonLabel,
    IonItemDivider,
    IonItem,
    IonItemGroup,
    IonList,
    IonChip,
  },
  setup() {
    return {
      closeOutline,
    };
  },

  name: "MensaItem",
  props: {
    date: { type: String },
    id: { type: String },
  },
  data() {
    return {
      urlBase: "https://openmensa.org/api/v2/canteens/198/days/",
      fooditem: {},
      prices: {},
      notes: [],
    };
  },

  methods: {
    dismissModal() {
      modalController.dismiss();
    },
    getItem(date, id) {
      //get the Mensa data from the next 5 days
      fetch(`${this.urlBase}${date}/meals/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          this.fooditem = result;
          this.prices = result.prices;
          this.notes = result.notes;
        });
    },
  },
  mounted() {
    this.getItem(this.date, this.id);
  },
});
</script>