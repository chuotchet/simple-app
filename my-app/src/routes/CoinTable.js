import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import * as firebase from "firebase";

class CoinTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataChart : []
        };
    }

    componentWillMount() {
        let priceRef = firebase.database().ref("test").child("coins");

        priceRef.on("value", snapshot => {
            let data = snapshot.val();
            for (let prop in data) {
                let coinData = {
                    'name' : prop,
                    'price' : 0,
                    'lastUpdated' : new Date()
                }
                this.setState({dataChart: this.state.dataChart.push(coinData)})
            }
        }).off();
    }

    componentDidMount() {
      let priceRef = firebase.database().ref("test").child("coins");

      for (let prop in this.state.dataChart) {
          const coinName = prop;
          let coinRef = priceRef.child(coinName);

          coinRef.limitToLast(1).on("child_added", snapshot => {
              let data = snapshot.val();

              this.setState()
          });
      }

      priceRef.on("value", snapshot => {
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

    const columns = [{
        header: 'Coin',
        accessor: 'name'
    }, {
        header: 'Price',
        accessor: 'price'
    }, {
        header: 'Last update',
        accessor: 'lastUpdated'
    }];

    render() {
        return (
            <div>
                <ReactTable
                    data={this.state.dataChart}
                    columns={columns}
            </div>
        );
    }
}

export default CoinTable;
