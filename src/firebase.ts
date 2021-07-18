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
const shoutCollection = db.collection('shouts')
const increment = firebase.firestore.FieldValue.increment(1)

// create functions for contacts and ideas realized via a firestore backend
export const createIdea = (idea: firebase.firestore.DocumentData) => {
  return ideaCollection.add(idea)
}

export const createContact = (contact: firebase.firestore.DocumentData) => {
  return contactCollection.add(contact)
}

// get function for singular documents of the firestore
export const getIdea = async (id: string | undefined) => {
  const idea = await ideaCollection.doc(id).get()
  return idea.exists ? idea.data() :null
}

// update functions to update firestore docs
export const updateIdea = (id: string | undefined, idea: firebase.firestore.UpdateData) => {
  return ideaCollection.doc(id).update(idea)
}

export const updateShout = (shout: firebase.firestore.UpdateData) => {
  return shoutCollection.doc("msg").update(shout)
}

//life reload functions for data changes
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

export const useLoadShouts = () => {
  const fill = [] as any[]
  const shouts = ref(fill)
  const close = shoutCollection.onSnapshot(snapshot => {
    shouts.value = snapshot.docs.map(doc => ({
      id: doc.id, ...doc.data()
    }))
  })
  onUnmounted(close)
  return shouts
}

export const likeIdea = (id: string | undefined) => {
  return ideaCollection.doc(id).update({ likes: increment })
}