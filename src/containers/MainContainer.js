import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
constructor(){
  super()
  this.state = {
    stocks: [],
    filteredStocks: [],
    soldStocks: [],
    boughtStocks: [],
    filtered: '',
    checkedButton: ''
  }
}


componentDidMount(){
  fetch('http://localhost:3000/stocks')
  .then(response => response.json())
  .then(stock => this.setState({stocks: stock}))
}


whichHandle = (e) => {
     if(!this.state.boughtStocks.find(stock => stock.id === e.id )){
     this.setState({boughtStocks: [...this.state.boughtStocks, e]})
     }else{
       let bought = this.state.boughtStocks.filter(item=> item.id !== e.id)
       this.setState({boughtStocks: bought})}
}

handleFiltered = (filtered) => {
this.setState({filtered: filtered})
let filter = this.state.stocks.filter((item) => item.type === filtered)
this.setState({filteredStocks: filter})
}

handleChecked = (e) => {
  console.log(e)
  
  this.setState({
    checkedButton: !this.state.checkedButton
  })
  // if(this.state.checkedButton === false){
  //   this.setState({checkedButton: true})
    
  // }else{this.setState({checkedButton: false})}
  //this.state.checkedButton ? this.setState({checkedButton: false}) : this.setState({checkedButton: true})
}

  render(){
    
    return (
      <div>
        <SearchBar handleChecked={this.handleChecked} checkedButton={this.state.checkedButton} filtered={this.state.filtered} handleFiltered={this.handleFiltered}/>

          <div className="row">
            <div className="col-8">

              <StockContainer filtered={this.state.filtered} filteredStocks={this.state.filteredStocks} stocks={this.state.stocks} whichHandle={this.whichHandle}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} whichHandle={this.whichHandle} />

            </div>
          </div>
      </div>
    );
  
    }
}

export default MainContainer;
