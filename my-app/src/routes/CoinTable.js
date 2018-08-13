import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import * as firebase from "firebase";

class CoinTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataTable : []
        };
    }

    componentWillMount() {
        let priceRef = firebase.database().ref("test").child("coins");

        priceRef.on("value", snapshot => {
            let data = snapshot.val();
            let dataTable = [];

            for (let prop in data) {
                let coin = data[prop];
                let len = Object.keys(coin).length;
                coin = coin[Object.keys(coin)[len-1]];
                let coinData = {
                    'name' : prop,
                    'price' : coin.price,
                    'lastUpdated' : new Date(coin.time*1000).toLocaleTimeString()
                }

                dataTable.push(coinData);
            }

            this.setState({dataTable: dataTable});
            priceRef.off();
        });
    }

    componentDidMount() {
      let priceRef = firebase.database().ref("test").child("coins");

      // priceRef.limitToLast(1).on("child_added", snapshot => {
      //   const coin = snapshot.val();
      //   const coinName = snapshot.ref.key;
      //   let coinData = coin[Object.keys(coin)[0]];
      //   let newDataTable = this.state.dataTable;
      //
      //   newDataTable = newDataTable.map(c => {
      //     if (c.name === coinName)
      //       return {
      //           'name' : coinName,
      //           'price' : coinData.price,
      //           'lastUpdated' : new Date(coinData.time*1000).toLocaleTimeString()
      //       }
      //     else return c;
      //   });
      //
      //   console.log(newDataTable);
      // });

      var updateCoinPrice = () => {
        const dataTable = this.state.dataTable;
        for (let i = 0; i < dataTable.length; i++) {
          const coin = dataTable[i];
          const coinIndex = i;
          let coinRef = priceRef.child(coin.name);
          coinRef.limitToLast(1).on("child_added", snapshot => {
              let data = snapshot.val();

              let newDataTable = this.state.dataTable;
              newDataTable[coinIndex].price = data.price;
              newDataTable[coinIndex].lastUpdated = new Date(data.time*1000).toLocaleTimeString();
              this.setState({dataTable: []});
              this.setState({dataTable: newDataTable});
          });
        }
      }

      setTimeout(updateCoinPrice, 5000);
    }

    componentWillUnmount() {
    }

    render() {
        const columns = [{
            Header: 'Coin',
            accessor: 'name'
        }, {
            Header: 'Price',
            accessor: 'price'
        }, {
            Header: 'Last update',
            accessor: 'lastUpdated'
        }];
        return (
            <div>
              <ReactTable
                data={this.state.dataTable}
                columns={columns}
              />
            </div>
        );
    }
}

export default CoinTable;
