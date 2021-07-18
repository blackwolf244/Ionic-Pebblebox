<template>
  <ion-card color="primary">
    <ion-card-header>
      <ion-card-title>THD Weather</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div id="app">
        <main>
          <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
            <div class="location-box">
              <h1 class="temp">{{ weather.main.temp }}°C</h1>
            </div>
            <div class="weather-box">
              <div class="description">
                {{ weather.weather[0].description }}
              </div>
              <img v-bind:src="icon" alt="Clouds" class="icon" />
            </div>
            <ion-text>
              <div class="humidity">
                Humidity: {{ weather.main.humidity }} %
              </div>
              <div class="wind">Wind Speed: {{ weather.wind.speed }} km/h</div>
            </ion-text>
          </div>
          <ion-fab vertical="top" horizontal="end" edge slot="fixed">
            <ion-fab-button color="light">
              <ion-icon :icon="chevronDownCircleOutline"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="bottom">
              <!-- <ion-fab-button>
                <ion-icon :icon="heartOutline"></ion-icon>
              </ion-fab-button> -->
              <ion-fab-button href="/contact">
                <ion-icon :icon="warningOutline"></ion-icon>
              </ion-fab-button>
              <ion-fab-button @click="openMap(location)"
                ><ion-icon :icon="compassOutline"></ion-icon
              ></ion-fab-button>
            </ion-fab-list>
          </ion-fab>
        </main>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
  modalController,
} from "@ionic/vue";
import {
  add,
  arrowBackCircle,
  arrowForwardCircle,
  arrowUpCircle,
  chevronDownCircleOutline,
  heartOutline,
  warningOutline,
  person,
  settings,
  share,
  compassOutline,
} from "ionicons/icons";

import { defineComponent } from "vue";
import MapModal from "../components/map.vue";

export default defineComponent({
  components: {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonText,
    IonCardTitle,
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
      person,
      settings,
      share,
      compassOutline,
    };
  },
  name: "Weather",
  data() {
    return {
      apiKey: "3110795367e24fb88c39b6ed9b6f33f3",
      urlBase: "http://api.openweathermap.org/data/2.5/",
      icon: "",
      weather: {},
      interval: 1,
      timer: 10,
    };
  },
  emits: ["start-data"],
  methods: {
    async openMap() {
      const modal = await modalController.create({
        component: MapModal,
        componentProps: {
          location: [48.833393411673434, 12.962065015888],
          title: "Deggendorf",
          subtitle: "lat: 48.837850089, lon: 12.957642621",
          info: "Die Hochschulstadt mit rund 37.000 Einwohnern (Stand: 1. Januar 2020) wird aufgrund ihrer Lage im Donautal, gegenüber der Mündung der Isar in die Donau und am Fuße des Bayerischen Waldes auch als Donaustadt und „Tor zum Bayerischen Wald“ bezeichnet.",
        },
      });
      return modal.present();
    },

    startData() {
      this.timer = 10;
      this.$emit("start-data");
      this.startTimer();
    },

    startTimer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(this.interval);
        } else {
          this.fetchWeather();
        }
      }, 600000);
    },
    fetchWeather() {
      fetch(
        `${this.urlBase}weather?q=Deggendorf&units=metric&APPID=${this.apiKey}`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
      this.icon = `https://openweathermap.org/img/wn/${results.weather[0].icon}.png`;
    },
  },
  mounted() {
    this.startTimer();
    this.fetchWeather();
  },
});
</script>

<style scoped>
#app {
  width: 80%;
  height: 100%;
}

.weather-wrap {
  padding: 20px;
  justify-content: center;
  align-items: center;
}
.temp {
  margin: 0;
  margin-bottom: 0;
}
.weather-box {
  display: flex;
  align-items: center;
}
.description {
  text-transform: capitalize;
  margin-right: 8px;
  font-size: 120%;
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