import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Repaymentcalc from './components/Repaymentcalc';

class App extends Component {
  
  getRepayment = async (e) => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:8080/getsLoans');
    const data = await api_call.json();
    console.log('data$$$$$$', data);  
  
  }
 
  render() {
    return (
      <div className="App">
      <Header />

      <Repaymentcalc  getRepayment = {this.getRepayment}/>
      
      </div>
    );
  }
}

export default App;
