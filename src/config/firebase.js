import React, { useContext } from "react";
import { Alert } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  updateEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import {
  getFirestore,
  doc,
  setDoc,
  query,
  where,
  onSnapshot,
  collection,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDfK_i2qXNuWI-3Tbr0XlJLnQwHlwvnW8",
  authDomain: "chat-1c1da.firebaseapp.com",
  projectId: "chat-1c1da",
  storageBucket: "chat-1c1da.appspot.com",
  messagingSenderId: "393992183286",
  appId: "1:393992183286:web:72576b6fc4ec3ce7387bd7",
  measurementId: "G-3HTTQGX3FN",
};

import { useNavigation } from "@react-navigation/native";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = async (name, email, password, setIsLoading) => {
  try {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    Alert.alert("Success", "Successfully signed up");
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    alert(error.message);
  }
};

export const signIn = async (email, password, setIsLoading) => {
  try {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    setIsLoading(false);
    const res = await authState();
    console.log(res);
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

export const addChat = async (users, setIsLoading) => {
  const key = uuid();

  await setDoc(doc(db, "chats", key), {
    users: users,
  });
  setIsLoading(false);
  return key;
};

export const getChats = async (email, setChats, setDataLoading) => {
  setDataLoading(true);
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", email)
  );
  if (email) {
    try {
      await onSnapshot(q, (querySnapshot) => {
        setChats([]);
        querySnapshot.forEach((doc) => {
          setChats((oldArray) => [
            ...oldArray,
            {
              data: doc.data(),
              id: doc._document.key.path.segments[
                doc._document.key.path.segments.length - 1
              ],
            },
          ]);
        });
      });
      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
};

export const authState = async () => {
  var res = "";
  await onAuthStateChanged(auth, function (user) {
    if (user) {
      res = user;
    }
  });
  return res;
};

export const getMessages = async (id, setMessages) => {
  const res = await onSnapshot(doc(db, "chats", id), (doc) => {
    setMessages(doc.data()?.messages ?? []);
  });
  console.log(res);
  return res;
};

export const addMessage = async (id, message) => {
  try {
    await setDoc(
      doc(db, `chats/${id}`),
      {
        messages: message,
      },
      { merge: true }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (name, email) => {
  try {
    if (name !== "" && email !== "") {
      await updateProfile(auth.currentUser, { displayName: name });
      await updateEmail(auth.currentUser, email)
        .then(() => {
          authState();
          Alert.alert("Success", "Changes saved");
        })
        .catch((error) => {
          alert(error);
        });
    }
  } catch (error) {
    console.log(error);
  }
};
