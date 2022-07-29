import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBBV79_YNaFCspGudCKxkkOYMM3Kaib5Iw",
  authDomain: "chatapp-63e5c.firebaseapp.com",
  projectId: "chatapp-63e5c",
  storageBucket: "chatapp-63e5c.appspot.com",
  messagingSenderId: "140079862429",
  appId: "1:140079862429:web:90d80c55cee2e2bc48ba74",
  measurementId: "G-8ZJERRTXLS",
};
import { useNavigation } from "@react-navigation/native";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const signUp = async (name, email, password, setIsLoading) => {
  try {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    alert("Successfully signed up");
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    alert(error.message);
  }
};

export const signIn = async (email, password, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await signInWithEmailAndPassword(auth, email, password);
    setIsLoading(false);
    return res;
  } catch (error) {
    alert(error);
    setIsLoading(false);
  }
};

export const isSigned = () => {
  const navigation = useNavigation();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate("Welcome");
    }
  });
};
