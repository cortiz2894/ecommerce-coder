import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeoMzR_qOCIeSEWy9bS2dX20liBe1zBv0",
  authDomain: "test-ecommerce-4fc45.firebaseapp.com",
  projectId: "test-ecommerce-4fc45",
  storageBucket: "test-ecommerce-4fc45.appspot.com",
  messagingSenderId: "988311746984",
  appId: "1:988311746984:web:9c33cecf982abf8d14c59d"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
