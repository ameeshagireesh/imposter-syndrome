import {initializeApp} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBohf7BSHewKTQKqigLKxOlA3wl--LuF_I",
    authDomain: "imposter-syndrome-338414.firebaseapp.com",
    projectId: "imposter-syndrome-338414",
    storageBucket: "imposter-syndrome-338414.appspot.com",
    messagingSenderId: "144657240625",
    appId: "1:144657240625:web:1d44bed495cf44656ffb10"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  
  export default firebase;