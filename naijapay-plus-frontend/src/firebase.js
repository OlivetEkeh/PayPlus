// src/firebase.js
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBsXvm2QYEBTRrE5fFAYC5Ek1UdWd1m6uQ",
  authDomain: "naijapay-bca77.firebaseapp.com",
  projectId: "naijapay-bca77",
  storageBucket: "naijapay-bca77.appspot.com",
  messagingSenderId: "552014697480",
  appId: "1:552014697480:web:69f4ed3b8d326b0f9bedbd",
  measurementId: "G-FVC5H83B44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, googleProvider, storage };
