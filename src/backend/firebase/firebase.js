import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuhVbv1AxBev_jY2EBVjknMBlqxsnNjLY",
  authDomain: "camping-fonte.firebaseapp.com",
  projectId: "camping-fonte",
  storageBucket: "camping-fonte.appspot.com",
  messagingSenderId: "600701608729",
  appId: "1:600701608729:web:1d0b27b10a4b3d52615b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export { db }