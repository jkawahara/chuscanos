// *** Firebase RT DB configuration
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOs3wbABcaIE2TrZiKzv_q6-bLZPwqbcs",
  authDomain: "chuscanos.firebaseapp.com",
  databaseURL: "https://chuscanos.firebaseio.com",
  projectId: "chuscanos",
  storageBucket: "chuscanos.appspot.com",
  messagingSenderId: "1060462024715"
};
var fire = firebase.initializeApp(config);

export default fire;