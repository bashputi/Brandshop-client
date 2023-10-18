import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIo4AN2A-PP5rY4GMnjSUBCMdnwGErQ28",
  authDomain: "brandsore-client.firebaseapp.com",
  projectId: "brandsore-client",
  storageBucket: "brandsore-client.appspot.com",
  messagingSenderId: "1095100694819",
  appId: "1:1095100694819:web:2a723eab02c9da45d4cc96"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;