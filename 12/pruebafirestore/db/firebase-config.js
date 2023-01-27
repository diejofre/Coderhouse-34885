import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkpPnviVBCe6j7Zcb6dOrLFuSX6O1UK_E",
  authDomain: "pruebacoder-ead25.firebaseapp.com",
  projectId: "pruebacoder-ead25",
  storageBucket: "pruebacoder-ead25.appspot.com",
  messagingSenderId: "1072521046398",
  appId: "1:1072521046398:web:662a109aa6553e6b1bab2f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
