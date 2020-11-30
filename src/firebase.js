import firebase from 'firebase/app'
import "firebase/storage"
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtLEknD-C7fjIc8KJg8_1cejnHuEc5OCc",
  authDomain: "crossflnd.firebaseapp.com",
  databaseURL: "https://crossflnd.firebaseio.com",
  projectId: "crossflnd",
  storageBucket: "crossflnd.appspot.com",
  messagingSenderId: "1071250602895",
  appId: "1:1071250602895:web:1cf8c47b7721d2e97229fa",
  measurementId: "G-BY1XFT5TCP"
};
  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();
  export { storage , firebase as default}
  