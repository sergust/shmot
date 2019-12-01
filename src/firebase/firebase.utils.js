import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCgn8gza8wvK65dJHiGBD0TmsenJOefmag',
  authDomain: 'shmot-e28ea.firebaseapp.com',
  databaseURL: 'https://shmot-e28ea.firebaseio.com',
  projectId: 'shmot-e28ea',
  storageBucket: 'shmot-e28ea.appspot.com',
  messagingSenderId: '229408116235',
  appId: '1:229408116235:web:aaa8473f9bf0dafc90010e'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
