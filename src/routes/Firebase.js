import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWCyoDplsUldEZorB8uaZRElDmhl0i8jI",
  authDomain: "groversetech.firebaseapp.com",
  projectId: "groversetech",
  storageBucket: "groversetech.appspot.com",
  messagingSenderId: "257995333769",
  appId: "1:257995333769:web:1558063aa5b600b0cae658",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
