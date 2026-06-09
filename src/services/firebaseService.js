import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKey",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dummy.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dummy-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dummy.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:12345:web:12345"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const saveChatbotToLibrary = async (chatbotData) => {
  try {
    const docRef = await addDoc(collection(db, "chatbots"), {
      ...chatbotData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const fetchCommunityChatbots = async () => {
  try {
    const q = query(collection(db, "chatbots"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const bots = [];
    querySnapshot.forEach((doc) => {
      bots.push({ id: doc.id, ...doc.data() });
    });
    return bots;
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return [];
  }
};
