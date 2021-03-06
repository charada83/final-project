import firebase from "firebase";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDNIp6mxO5nTsLsPF-VR2prdLXzj_APwSY",
  authDomain: "baby-book-app.firebaseapp.com",
  databaseURL: "https://baby-book-app.firebaseio.com",
  projectId: "baby-book-app",
  storageBucket: "baby-book-app.appspot.com",
  messagingSenderId: "1000149253081"
};

firebase.initializeApp(config);

export const database = firebase.database();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export const storage = firebase.storage();

export default firebase;
