import firebase from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCFFQqnUEno95HQesA1J8yYU-0QvKKlO5E',
  authDomain: 'chicken-chat-1ae85.firebaseapp.com',
  databaseURL: 'https://chicken-chat-1ae85.firebaseio.com',
  projectId: 'chicken-chat-1ae85',
  storageBucket: '',
  messagingSenderId: '406876299963',
});

const base = Rebase.createClass(app.database());

export { app };

export default base;
