import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF6wJPuchdTEBRXbFixTSAuZCrHL3OShI",
  authDomain: "futurefocuspoint-cc80d.firebaseapp.com",
  projectId: "futurefocuspoint-cc80d",
  storageBucket: "futurefocuspoint-cc80d.appspot.com",
  messagingSenderId: "93845209703",
  appId: "1:93845209703:web:38e81b789e56f940f38ac2",
  measurementId: "G-HKNPPFCJQC"
};


const app=firebase.initializeApp(firebaseConfig);
export  const auth=app.auth(  );