import React from 'react';
import Websocket from 'react-websocket';
 
  class ProductDetail extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        count: 90,
        dados: []
      };
    }
 
    handleData(data) {
      let result = JSON.parse(data);
      this.setState({count: this.state.dados + result.movement});
    }
 
    render() {
      return (
        <div>
          Count: <strong>{this.state.dados}</strong>
 
          <Websocket url='wss://stream.binance.com:9443'
              onMessage={this.handleData.bind(this)}/>
        </div>
      );
    }
  }
 
  export default ProductDetail;