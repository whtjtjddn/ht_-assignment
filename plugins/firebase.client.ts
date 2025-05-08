import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app"

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyCxZ0rE4RJ57QbkVNxvP1JPlQ5Ti3gAtSc",
        authDomain: "seoul-subway-roulette.firebaseapp.com",
        projectId: "seoul-subway-roulette",
        storageBucket: "seoul-subway-roulette.firebasestorage.app",
        messagingSenderId: "751018043360",
        appId: "1:751018043360:web:d5bdc529a47ff13bd1ed85",
        measurementId: "G-HV05C6DTCS"
    }

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)

    nuxtApp.vueApp.provide("analytics", analytics)
    nuxtApp.provide("analytics", analytics)

    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide("firestore", firestore)
    nuxtApp.provide("firestore", firestore)
})
