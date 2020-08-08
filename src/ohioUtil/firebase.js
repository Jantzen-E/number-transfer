import firebase from 'firebase';
//   const firebase2 = firebase;
  // Your web app's Firebase configuration
  const firebaseConfig2 = {
    apiKey: "AIzaSyBmqHyvoYMCe5jOocCR10AySEuoYqIvJJo",
    authDomain: "number-transfer2.firebaseapp.com",
    databaseURL: "https://number-transfer2.firebaseio.com",
    projectId: "number-transfer2",
    storageBucket: "number-transfer2.appspot.com",
    messagingSenderId: "726754897588",
    appId: "1:726754897588:web:86d8eef36ff36e60ea31e1",
    measurementId: "G-L8HDWVM8RQ"
  };

  // Initialize Firebase
  const firebase2 = firebase.initializeApp(firebaseConfig2, "secondary");

export default firebase2;