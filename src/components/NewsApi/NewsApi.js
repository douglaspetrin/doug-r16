import React, { Component } from 'react';
import axios from 'axios';



class NewsApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      
    };
}


carregaAxios = () => {
    axios.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=e577ab69a48d46858608e1e8efd4f7f1', )
    .then(res => {
      const news = res.data;
      console.log(news);
      this.setState({news: news});
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
        56000
    );


}
  

render() {
    return (
      <div className="App">
        <br />
            <span><b>{this.state.news.id}</b></span><br />
            <span>Price change: {this.state.news.name}</span><br />
            <span>priceChangePercent: {this.state.news.description}</span><br />
            <span>lastPrice: {this.state.news.url}</span><br />

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


export default NewsApi;