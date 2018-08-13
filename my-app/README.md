# Coinmarketcap real-time data
This app show real-time price of coins using Coinmarketcap API

## Installation

Clone the code and install all dependencies

```
npm install
```

Run code:

```
npm run dev
```

This will start the NodeJs script to get the data from Coinmarketcap every 5 seconds and store it to Firebase (only if the data is up-to-date).
It also start the React app.

There are two main pages:

### Chart
Show the line chart for BTC-USD price.

### Table
Show price of top 10 coins.