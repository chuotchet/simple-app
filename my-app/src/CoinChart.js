import React, { Component } from 'react';
import { render } from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Chart from "./chart";
import * as firebase from "firebase";

const styles = theme => ({
  "chart-container": {
    height: 400,
    width: 800
  }
});

class CoinChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lineChartData: {
        labels: [],
        datasets: [
          {
            type: "line",
            label: "BTC-USD",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: this.props.theme.palette.primary.main,
            pointBackgroundColor: this.props.theme.palette.secondary.main,
            pointBorderColor: this.props.theme.palette.secondary.main,
            borderWidth: "2",
            lineTension: 0.45,
            data: []
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          ]
        }
      }
    };
  }

  componentDidMount() {
    var priceRef = firebase.database().ref("test").child("coins");
    var coinRef = priceRef.child("Bitcoin");

    coinRef.limitToLast(1).on("child_added", snapshot => {
      let data = snapshot.val();

      var oldDataSet = this.state.lineChartData.datasets[0];
      var newDataSet = { ...oldDataSet };
      newDataSet.data.push(data.price);

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newDataSet],
        labels: this.state.lineChartData.labels.concat(
          new Date(data.time*1000).toLocaleTimeString()
        )
      };
      this.setState({ lineChartData: newChartData });

    });
  }

  componentWillUnmount() {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes["chart-container"]}>
        <Chart
          data={this.state.lineChartData}
          options={this.state.lineChartOptions}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CoinChart);
