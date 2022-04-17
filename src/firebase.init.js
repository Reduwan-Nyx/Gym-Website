// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6t225ejkS_DXrY_6WYIO-gbNE3mKfdnI",
  authDomain: "fitness-gym-project.firebaseapp.com",
  projectId: "fitness-gym-project",
  storageBucket: "fitness-gym-project.appspot.com",
  messagingSenderId: "301401060439",
  appId: "1:301401060439:web:0cce28f12fad1022ee9f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth