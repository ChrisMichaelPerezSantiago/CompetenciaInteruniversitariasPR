const firebase = require('firebase');
require('firebase/firestore');

var config = {
  apiKey: "AIzaSyBuraq_Q9_gnU-FSATvEvs9H54ZSVHW_KA",
  authDomain: "programmingcontest.firebaseapp.com",
  databaseURL: "https://programmingcontest.firebaseio.com",
  projectId: "programmingcontest",
  storageBucket: "programmingcontest.appspot.com",
  messagingSenderId: "136767726595"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

module.exports = db;