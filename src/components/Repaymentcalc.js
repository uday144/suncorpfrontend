import React, { Component } from 'react';
import axios from "axios";
import Calcresult from './Calcresult';
import Errormsg from './Errormsg';
import { connect } from 'react-redux';
import { changeState } from "../store/action/action";
class Repaymentcalc extends Component {

  state = {
    Loans: [],
    LoanType: [],
    loanId: '',
    loanTypeId: '',
    amount: '',
    duration: '',
    errors: {}

  };


  changeState() {
    var reqPayload = {
      loanId: this.state.loanId,
      loanTypeId: this.state.loanTypeId,
      amount: this.state.amount,
      duration: this.state.duration
    };

    if(this.handleValidation()){
      axios.post(`http://localhost:8081/calculateRepayments`, { reqPayload })
      .then(res => {

        this.props.changeStateToReducer(res.data);
      })

   }else{
    console.log('this.state.errors changeState', this.state.errors);
   }

  }
  handleValidation(){
    let errors = {};
    let formIsValid = true;
    this.setState({errors: errors});
    if(this.state.amount === ''){
      formIsValid = false;
      errors["amount"] = "Amount cannot be empty!";
    } 

   this.setState({errors: errors});
   console.log('this.state.errors handleValidation', this.state.errors); 
   return formIsValid;
  
}
  loanIdChange = (event) => {

    this.setState({ loanId: event.target.value });
    this.getLoanType();
  };
  yearChange = (event) => {

    this.setState({ duration: event.target.value });

  };
  loantypeChange = (event) => {

    this.setState({ loanTypeId: event.target.value });

  };
  loanAmountChange = (event) => {

    this.setState({ amount: event.target.value });

  };

  componentDidMount() {
    this.getLoans();
  }
  getLoanType() {
    var arrTemp = [];
    axios
      .get("http://localhost:8081/getsLoanTypes")
      .then(response => {
        // create an array of contacts only with relevant data
        const loanType = response.data.map(c => {
          return {
            id: c.id,
            description: c.description
          };
        });

        for (var k = 0; k < loanType.length; k++) {
          arrTemp.push(<option key={loanType[k].id} value={loanType[k].id}> {loanType[k].description} </option>);
        }
        this.setState({
          LoanType: arrTemp
        });


      })
      .catch(error => console.log(error));

  }
  getLoans() {
    var arrTemp = [];
    axios
      .get("http://localhost:8081/getsLoans")
      .then(response => {
        // create an array of contacts only with relevant data
        const newLoans = response.data.map(c => {
          return {
            id: c.id,
            description: c.description
          };
        });

        for (var k = 0; k < newLoans.length; k++) {
          arrTemp.push(<option key={newLoans[k].id} value={newLoans[k].id}> {newLoans[k].description} </option>);
        }
        this.setState({
          Loans: arrTemp
        });


      })
      .catch(error => console.log(error));
  }
  render() {
    return (

      <div className="repayment_form">
        <div className="nav_bar">
          Reducer Demo {this.props.repayments != null ? this.props.repayments.interestRate : null}
        </div>
        <form className="form_control">
          <div >
            <h1>Repayment calculator</h1>
          </div>
          <div className="repaymentcalc col-md-7">
            <div>
              <label className="label_Question"> What will you be using the loan for? </label>
              <div>
                <select onChange={this.loanIdChange}>
                  <option value="" hidden>Please select ..</option>

                  {this.state.Loans}

                </select>

              </div>
            </div>
            <div>
            </div>
            <div>
              <label className="label_Question"> How much would you like to borrow? </label>
              <div className = "hint_box">
                <input className="input_box" value={this.state.amount} selecttype="text" onChange={this.loanAmountChange} />
              </div>
              <span className ="hint_validation">Must be at least $5000</span>
            </div>
            <div>
              <label className="label_Question"> Over what period will you repay the loan? </label>
              <div>
                <select onChange={this.yearChange}>
                  <option value="" hidden>Please select ..</option>

                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>

                </select>

              </div>
            </div>
            <div>
              <label className="label_Question">What type of loan would you like? </label>
              <div className = "hint_box"> 
                <select onChange={this.loantypeChange}>
                  <option value="" hidden>Please select ..</option>
                  {this.state.LoanType}
                </select>

              </div>
              <span className ="hint_validation">Please note for a secure loan the market value of the car must be atleast $7500 and the car's age must not exceed 7 years.</span>
            </div>
            <div> <button type="button" onClick={this.changeState.bind(this)} className="btn btn-primary rapayment_btn">Calculate repayment</button> </div>
            {Object.keys(this.state.errors).length > 0 ? <Errormsg  Errormsg = {this.state.errors[Object.keys(this.state.errors)[0]]} /> : null}
          </div>
          {this.props.repayments != null ? <Calcresult /> : null}
          
        </form>
      </div >

    );
  }
}

function mapStateToProps(state) {
  return ({
    repayments: state.routeReducer.repayments
  })
}


function mapDispatchToProps(dispatch) {
  return ({
    changeStateToReducer: (repayments) => {
      dispatch(changeState(repayments))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Repaymentcalc);
