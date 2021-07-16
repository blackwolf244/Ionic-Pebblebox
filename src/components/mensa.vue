<template>
  <ion-card color="secondary">
    <ion-card-header>
      <ion-card-title>OpenMensa THD</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <div class="segmentselector">
            <ion-segment @ionChange="segmentChanged($event)" :value="today()">
              <template v-for="(date, index) in thdDays" :key="index">
                <ion-segment-button :value="date">
                  <ion-label>{{ getDayName(date) }}</ion-label>
                </ion-segment-button>
              </template>
            </ion-segment>
          </div>
          <div class="mensacontent">
            <ion-item-group>
              <template v-for="(meal, index) in thdMensaMeals" :key="index">
                <ion-item detail="true" button @click="openModal(meal.id)">
                  <ion-text>{{ meal.name }}</ion-text>
                </ion-item>
              </template>
            </ion-item-group>
          </div>
        </main>
        <ion-fab vertical="top" horizontal="end" edge slot="fixed">
          <ion-fab-button color="light">
            <ion-icon :icon="chevronDownCircleOutline"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="bottom">
            <ion-fab-button>
              <ion-icon :icon="heartOutline"></ion-icon
            ></ion-fab-button>
            <ion-fab-button href="/contact">
              <ion-icon :icon="warningOutline"></ion-icon>
            </ion-fab-button>
            <ion-fab-button @click="openMap(location)"
              ><ion-icon :icon="compassOutline"></ion-icon
            ></ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  modalController,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonText,
  IonItem,
  IonItemGroup,
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
  compassOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  person,
  settings,
  share,
} from "ionicons/icons";

import MensaItem from "../components/mensaitem.vue";
import MapModal from "../components/map.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonSegment,
    IonLabel,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonSegmentButton,
    IonText,
    IonItem,
    IonItemGroup,
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
      compassOutline,
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
  name: "OpenMensa",
  data() {
    return {
      selectedDay: this.today(),
      thdDays: [] as string[],
      urlBase: "https://openmensa.org/api/v2/canteens/198/days/",
      thdMensaDays: [] as any[],
      thdMensaMeals: [] as any[],
    };
  },
  methods: {
    today() {
      const today = new Date().toISOString().split("T")[0];
      return today;
    },

    addDays(date: string | number | Date, days: number) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },

    getDayName(date: string | number | Date) {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = new Date(date);
      return days[day.getDay()];
    },

    getdays() {
      const arr = [] as string[];
      for (let n = 0; n < 5; n++) {
        arr[n] = this.addDays(this.today(), n).toString();
      }
      this.thdDays = arr;
    },

    fetchOpenMensa() {
      fetch(`${this.urlBase}`)
        .then((res) => {
          return res.json();
        })
        .then(this.setData);
    },

    setData(results: any[]) {
      //get the Mensa data from the next 5 days
      results = results.slice(Math.max(results.length - 5, 0)).reverse();
      for (const val of results) {
        this.thdDays.push(val.date);
      }
    },

    async openModal(id: number) {
      const ID: string = id.toString();
      const modal = await modalController.create({
        component: MensaItem,
        componentProps: {
          id: ID,
          date: this.selectedDay,
        },
      });
      return modal.present();
    },

    async openMap() {
      const modal = await modalController.create({
        component: MapModal,
        componentProps: {
          location: [48.8301334774041, 12.9541039466858],
          title: "Mensa TH Deggendorf",
          subtitle: "lat: 48.830133477, lon: 12.954103946",
          info: "Edlmairstraße 6-8, 94469 Deggendorf, Germany",
        },
      });
      return modal.present();
    },

    segmentChanged(ev: CustomEvent) {
      this.selectedDay = ev.detail.value;
      fetch(`${this.urlBase}${ev.detail.value}/meals`)
        .then((res) => {
          // console.log(res.json);
          return res.json();
        })
        .then((result) => {
          this.thdMensaMeals = result;
        });
      // console.log(this.thdMensaMeals);
    },
    setMeals() {
      this.selectedDay = this.today().toString();
      // console.log(this.selectedDay);
      fetch(`${this.urlBase}${this.selectedDay}/meals`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          this.thdMensaMeals = result;
        });
      // console.log(this.thdMensaMeals);
    },
  },

  mounted() {
    this.fetchOpenMensa();
    this.setMeals();
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
.segmentselector {
  width: 80%;
}
.mensacontent {
  width: 100%;
  height: 130px;
  overflow-y: scroll;
}
ion-fab-button {
  width: 50px;
  height: 50px;
}
ion-fab-list ion-fab-button {
  width: 40px;
  height: 40px;
}
ion-segment {
  --background: "none";
}
ion-segment-button {
  text-decoration: none;
  --border-width: 0;
  min-width: 0px;
}
</style>