import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUw_PeXySeHm01N5kdlGXWuKx05gYBev8",
  authDomain: "canteen-5cf8d.firebaseapp.com",
  databaseURL: "https://canteen-5cf8d-default-rtdb.firebaseio.com",
  projectId: "canteen-5cf8d",
  storageBucket: "canteen-5cf8d.appspot.com",
  messagingSenderId: "540512536151",
  appId: "1:540512536151:web:57c63bbda2b6f7ced90512"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
