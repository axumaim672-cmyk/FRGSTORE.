import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    set, 
    onValue, 
    update, 
    push, 
    get, 
    remove 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBncaOFVPMcr23GFl3Wx0O-0rI7ALKxmBg",
    authDomain: "stxwin-eade6.firebaseapp.com",
    databaseURL: "https://stxwin-eade6-default-rtdb.firebaseio.com",
    projectId: "stxwin-eade6",
    storageBucket: "stxwin-eade6.firebasestorage.app",
    messagingSenderId: "388023101479",
    appId: "1:388023101479:android:d45620cd58a6a4ff488602"
};

// Initialize Firebase App & Realtime Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export for user.html and other modules
export { db, ref, set, onValue, update, push, get, remove };
