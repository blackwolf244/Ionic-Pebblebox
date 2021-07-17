import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyBFujfq6TdGrHMVREcARNLTjZDE6TpAxfw",
    authDomain: "pebblebox-b678d.firebaseapp.com",
    projectId: "pebblebox-b678d",
    storageBucket: "pebblebox-b678d.appspot.com",
    messagingSenderId: "556829038900",
    appId: "1:556829038900:web:8e25490b6313288da32d61"
}
  
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const ideaCollection = db.collection('ideas')
const contactCollection = db.collection('contacts')
const increment = firebase.firestore.FieldValue.increment(1)

export const createIdea = (idea: firebase.firestore.DocumentData) => {
  return ideaCollection.add(idea)
}

export const createContact = (contact: firebase.firestore.DocumentData) => {
  return contactCollection.add(contact)
}

export const getIdea = async (id: string | undefined) => {
  const idea = await ideaCollection.doc(id).get()
  return idea.exists ? idea.data() :null
}

export const updateIdea = (id: string | undefined, idea: firebase.firestore.UpdateData) => {
  return ideaCollection.doc(id).update(idea)
}

export const useLoadIdeas = () => {
  const fill = [] as any[]
  const ideas = ref(fill)
  const close = ideaCollection.onSnapshot(snapshot => {
    ideas.value = snapshot.docs.map(doc => ({
      id: doc.id, ...doc.data()
    }))
  })
  onUnmounted(close)
  return ideas
}

export const likeIdea = (id: string | undefined) => {
  return ideaCollection.doc(id).update({ likes: increment })
}