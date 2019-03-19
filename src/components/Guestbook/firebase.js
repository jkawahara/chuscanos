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

// const storageService = firebase.storage();
// const storageRef = storageService.ref();

// document.querySelector(‘.file-select).addEventListener(‘change’, handleFileUploadChange);
// document.querySelector(‘.file-submit).addEventListener(‘click’, handleFileUploadSubmit);
// let selectedFile;

// handleFileUploadChange(e) {
//  selectedFile = e.target.files[0];
// }

// handleFileUploadSubmit(e) {
//  const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
//  uploadTask.on(‘state_changed’, (snapshot) => {
//  // Observe state change events such as progress, pause, and resume
//  }, (error) => {
//  // Handle unsuccessful uploads
//  console.log(error);
//  }, () => {
//  // Do something once upload is complete
//  console.log(‘success’);
//  });
// }

export default fire;
