import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoM4lAFy52m4UsbmJji_uCtQbTQnKU57k",
  authDomain: "ecommerce-b278e.firebaseapp.com",
  projectId: "ecommerce-b278e",
  storageBucket: "ecommerce-b278e.appspot.com",
  messagingSenderId: "840212656823",
  appId: "1:840212656823:web:ad361615cdb90b93109332",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
