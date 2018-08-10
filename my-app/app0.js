var admin = require('firebase-admin');
var CronJob = require('cron').CronJob;
var request = require('request');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-68cc1.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("test");
var priceRef = ref.child("coins");
var testref = priceRef.child("Bitcoin");

// new CronJob('*/5 * * * * *', function() {
//   request('https://api.coinmarketcap.com/v2/ticker/?limit=10', function (error, response, body) {
//     let data = JSON.parse(body).data;
//     for (prop in data) {
//       let coinData  = data[prop];
//       let coinRef = priceRef.child(coinData.name);
//       coinRef.push({
//         price: coinData.quotes.USD.price,
//         time: coinData.last_updated
//       });
//     }
//   });
// }, null, true, 'America/Los_Angeles');

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

testref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log(newPost);
});
