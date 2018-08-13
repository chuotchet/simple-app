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

new CronJob('*/5 * * * * *', function() {
  request('https://api.coinmarketcap.com/v2/ticker/?limit=10', function (error, response, body) {
    let data = JSON.parse(body).data;
    for (prop in data) {
      let coinData  = data[prop];
      let coinRef = priceRef.child(coinData.name);
      coinRef.limitToLast(1).on("child_added", (snapshot) => {
        let latest = snapshot.val();

        //only store the updated price
        if (latest.time < coinData.last_updated) {
          coinRef.push({
            price: coinData.quotes.USD.price,
            time: coinData.last_updated
          });
        }
      });

    }
  });
}, null, true, 'America/Los_Angeles');
