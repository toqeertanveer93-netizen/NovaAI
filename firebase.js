import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWfCRUKH8v8e71WieRNtQ4f63M7E9eU-A",
  authDomain: "novaai-6e7f4.firebaseapp.com",
  projectId: "novaai-6e7f4",
  storageBucket: "novaai-6e7f4.firebasestorage.app",
  messagingSenderId: "1045515630949",
  appId: "1:1045515630949:web:28ef2c36163058c87f098c"
};

const app = initializeApp(firebaseConfig);

window.auth = getAuth(app);
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.sendPasswordResetEmail = sendPasswordResetEmail;
window.signOut = signOut;
