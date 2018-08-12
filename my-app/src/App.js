import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Chart from "./chart";
import * as firebase from "firebase";

import CoinChart from "./CoinChart";
import CoinTable from "./CoinTable";

const theme = createMuiTheme();

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lineChartData: {
  //       labels: [],
  //       datasets: [
  //         {
  //           type: "line",
  //           label: "BTC-USD",
  //           backgroundColor: "rgba(0, 0, 0, 0)",
  //           borderColor: this.props.theme.palette.primary.main,
  //           pointBackgroundColor: this.props.theme.palette.secondary.main,
  //           pointBorderColor: this.props.theme.palette.secondary.main,
  //           borderWidth: "2",
  //           lineTension: 0.45,
  //           data: []
  //         }
  //       ]
  //     },
  //     lineChartOptions: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       tooltips: {
  //         enabled: true
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             ticks: {
  //               autoSkip: true,
  //               maxTicksLimit: 10
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   };
  // }

  // componentDidMount() {
  //   var priceRef = firebase.database().ref("test").child("coins");
  //   var coinRef = priceRef.child("Bitcoin");
  //
  //   coinRef.limitToLast(1).on("child_added", snapshot => {
  //     let data = snapshot.val();
  //
  //     var oldDataSet = this.state.lineChartData.datasets[0];
  //     var newDataSet = { ...oldDataSet };
  //     newDataSet.data.push(data.price);
  //
  //     const newChartData = {
  //       ...this.state.lineChartData,
  //       datasets: [newDataSet],
  //       labels: this.state.lineChartData.labels.concat(
  //         new Date(data.time*1000).toLocaleTimeString()
  //       )
  //     };
  //     this.setState({ lineChartData: newChartData });
  //
  //   });
  // }
  //
  // componentWillUnmount() {
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>


        <div>
          <Route exact path="/chart" component={CoinChart} />
          <Route exact path="/table" component={CoinTable} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
