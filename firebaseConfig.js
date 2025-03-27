// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCERJF15fsHyytoj_1bPRJqcKqXLGIYBNo",
  authDomain: "patientdoctorapp-e8837.firebaseapp.com",
  projectId: "patientdoctorapp-e8837",
  storageBucket: "patientdoctorapp-e8837.firebasestorage.app",
  messagingSenderId: "129054232389",
  appId: "1:129054232389:web:f143e1ed63e5b72466b82c",
  measurementId: "G-90PQX34MP5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
