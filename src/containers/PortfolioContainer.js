import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
  const portfolioStock = this.props.boughtStocks
    return (
      
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioStock.map((stock, index) => <Stock  whichHandle={this.props.whichHandle} key={index} stock={stock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
