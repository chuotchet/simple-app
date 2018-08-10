var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-68cc1.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("test");
var usersRef = ref.child("users");

// var post = usersRef.push();
//
// post.set({
//   author: "gracehop",
//   title: "Announcing COBOL, a New Programming Language"
// });

// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log(newPost);
});
