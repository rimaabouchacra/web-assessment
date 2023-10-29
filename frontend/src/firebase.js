import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBZyochVHeO30a4oaMr4D8E_IBYMKVDiCo",
  authDomain: "web-assessment-8b83c.firebaseapp.com",
  projectId: "web-assessment-8b83c",
  storageBucket: "web-assessment-8b83c.appspot.com",
  messagingSenderId: "712844088890",
  appId: "1:712844088890:web:6dab330c5bb857b9160703",
  measurementId: "G-7BZFH2ND99"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
