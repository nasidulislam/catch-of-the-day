import Rebase from 're-base';
import firebase from 'firebase';

// create the app
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuyMuOG6YwSRh36-LGykP6sgBQXeu_9HI",
    authDomain: "store-demo-85ae6.firebaseapp.com",
    databaseURL: "https://store-demo-85ae6.firebaseio.com"
});

// create the Rebase/Firebase binding
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
