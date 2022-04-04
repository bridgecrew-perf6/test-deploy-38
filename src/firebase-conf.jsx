import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgtl8YXFbH3fkyQb0l3gQN-M64AUJQtdc",
    authDomain: "shopping-list-33f27.firebaseapp.com",
    projectId: "shopping-list-33f27",
    storageBucket: "shopping-list-33f27.appspot.com",
    messagingSenderId: "1091600737046",
    appId: "1:1091600737046:web:7302bb8f73261f81fc2637",
    measurementId: "G-MHLQR7J25X",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
