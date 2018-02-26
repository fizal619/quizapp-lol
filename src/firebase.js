import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAwmLkh2P1JVJX-14ouImhuH56lhZVWgcg",
  authDomain: "inclusion-applications.firebaseapp.com",
  databaseURL: "https://inclusion-applications.firebaseio.com",
  projectId: "inclusion-applications",
  storageBucket: "inclusion-applications.appspot.com",
  messagingSenderId: "630799161066"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

