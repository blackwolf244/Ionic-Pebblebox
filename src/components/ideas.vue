<template>
  <div id="app">
    <ion-item>
      <ion-card>
        <ion-card-header>
          <ion-card-title color="success">Info</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-note>
            Vote up as much as you'd like for now! Later on we'll add a
            State-System to orderly keep track of things! but for now Vote away!
            We'll keep your Wishes in mind!
          </ion-note>
        </ion-card-content>
      </ion-card>
    </ion-item>
    <ion-list>
      <ion-item v-for="{ id, title, text, likes } in ideas" :key="id">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ title }}</ion-card-title>
          </ion-card-header>
          <ion-card-content
            ><ion-text color="primary">
              {{ text }}
            </ion-text>
            <ion-toolbar>
              <ion-buttons @click="like(id)" slot="secondary">
                <ion-button color="primary">
                  <ion-icon color="warning" :icon="sparklesSharp"></ion-icon>
                  Make a Wish!
                  <ion-chip outline="true">
                    <ion-label>{{ likes }}</ion-label>
                  </ion-chip>
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
import {
  IonItem,
  IonList,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
  IonButtons,
  IonIcon,
  IonToolbar,
} from "@ionic/vue";
import { sparklesOutline, sparklesSharp } from "ionicons/icons";
import { useLoadIdeas, likeIdea } from "@/firebase";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonItem,
    IonList,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonText,
    IonButtons,
    IonIcon,
    IonToolbar,
  },
  setup() {
    const ideas = useLoadIdeas();

    return {
      sparklesOutline,
      sparklesSharp,
      ideas,
    };
  },
  name: "Ideas",
  methods: {
    async like(element: string | undefined) {
      await likeIdea(element);
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
ion-checkbox {
  margin-left: 20px;
}

.padleft {
  padding-left: 15px;
}

ion-icon {
  padding-right: 10px;
}

ion-card {
  width: 100%;
}
</style>