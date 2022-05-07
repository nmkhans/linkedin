import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAXmSNMNKFo1ZqDZznd_INRWwRGVHJko9E",
    authDomain: "nmk-linkedin.firebaseapp.com",
    projectId: "nmk-linkedin",
    storageBucket: "nmk-linkedin.appspot.com",
    messagingSenderId: "603535344217",
    appId: "1:603535344217:web:8766527ccb1f2c89eb2748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const auth = getAuth(app);

export {
    database,
    auth
};