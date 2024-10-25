// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD9jCquMWbvhtaNamWhCcghncJJo5fCNbs",
  authDomain: "masterpiece-a05de.firebaseapp.com",
  databaseURL: "https://masterpiece-a05de-default-rtdb.firebaseio.com",
  projectId: "masterpiece-a05de",
  storageBucket: "masterpiece-a05de.appspot.com",
  messagingSenderId: "774042024449",
  appId: "1:774042024449:web:12e6885f8982dcb7955e00",
  measurementId: "G-XCK1YQ9LE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
