import React, { Component } from 'react';
import axios from 'axios';
import '../../../containers/App.css';
var NumberFormat = require('react-number-format');


class CryptList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      
    };
}


carregaAxios = () => {
    axios.get('https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT', )
    // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD', )
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
  }) 
};


componentDidMount() {
    this.carregaAxios();

}

componentDidUpdate() {
    setTimeout(
        function() {
            this.carregaAxios();
        }
        .bind(this),
        3000
    );


}
  

render() {
    return (
      <div className="App">
        <br />
            <span><b>{this.state.cryptos.symbol}</b></span><br />
            <span>Price change: {this.state.cryptos.priceChange}</span><br />
            <span>priceChangePercent: {this.state.cryptos.priceChangePercent}</span><br />
            <span>lastPrice: {this.state.cryptos.lastPrice}</span><br />

        {/* {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].USD}
             displayType={'text'} decimalPrecision={2}
             thousandSeparator={true} prefix={'$'} />
            </span>
          </div>

        ))} */}
      </div>
    );
  }
}


export default CryptList;