import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
  const stocks = this.props.stocks
  const filtered = this.props.filtered 
  const filteredStocks = this.props.filteredStocks
    return (
      <div>
        <h2>Stocks</h2>
        {
          filtered ? filteredStocks.map((stock, index) => <Stock key={index} stock={stock} whichHandle={this.props.whichHandle}/>) :
          stocks.map((stock, index) => <Stock key={index} stock={stock} whichHandle={this.props.whichHandle} />)
        }
      </div>
    );
  }

}

export default StockContainer;
