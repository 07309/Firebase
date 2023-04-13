import { initializeApp } from "firebase/app";
import { getFirestore,collection, query, where, getDocs } from "firebase/firestore"
import 'firebase/firestore';
import { firestore } from '@firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBtBdxNuU6XHn-lRCvFjfu18xnpZYO5BU",
  authDomain: "fir-61895.firebaseapp.com",
  projectId: "fir-61895",
  storageBucket: "fir-61895.appspot.com",
  messagingSenderId: "978040253168",
  appId: "1:978040253168:web:2e4a8bbd09fd679dadb035",
  measurementId: "G-V97R7KG4R5"
};

initializeApp(firebaseConfig)
const db = getFirestore()

export const getCategories = async () => {
  const q = query(collection(db, "categorie"));

  const querySnapshot = await getDocs(q);
  const cats = [];
  querySnapshot.forEach((doc) => {
    cats.push({ ...doc.data(), id: doc.id })
  // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
  });
  return cats;
}

// export const getRestaurants = async () => {
//   const q = query(collection(db, "restaurant"));

//   const querySnapshot = await getDocs(q);
//   console.log("here");
//   const cats = [];
//   querySnapshot.forEach((doc) => {
//     cats.push({ ...doc.data(), id: doc.id })
    
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//   });
//   return cats;
// }

//const app = initializeApp(firebaseConfig)
// const db = app.firestore();
