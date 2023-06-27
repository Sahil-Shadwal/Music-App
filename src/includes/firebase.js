import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyARVOgkRVWee91sMVGvaXyTHRgvwbDicE0',
  authDomain: 'music-29e63.firebaseapp.com',
  projectId: 'music-29e63',
  storageBucket: 'music-29e63.appspot.com',
  messagingSenderId: '991785970071',
  appId: '1:991785970071:web:1927b503cad8644ca57cd2',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
