import React, { Component } from 'react';
import { connect } from 'react-redux';
class Calcresult extends Component {
  render() {
    return (
      <div className="calc_result col-md-5">
        <div className="title_header">
          <span> Your Repayments </span>
        </div>
        <div className="lbl_amount">
          <label> $ {this.props.repayments != null ? this.props.repayments.repaymentamount : null}</label>
          <label> (including Fees) </label>
        </div>
        <div>
          <label> Per month </label>
        </div>
        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span> Interest rate </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span>{this.props.repayments != null ? this.props.repayments.interestRate : null}% p.a. </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span className="lbl_dotted_underline"> Comparsion rate </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span> {this.props.repayments != null ? this.props.repayments.comparisonRate : null}% p.a. </span>
          </div>
        </div>
        <div className="row divider"> </div>
        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span> Total amount borrowed </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span> ${this.props.repayments != null ? this.props.repayments.amountBorrowed : null} p.a. </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span className="lbl_dotted_underline"> Establishment fee </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span> ${this.props.repayments != null ? this.props.repayments.establishmentFee : null} p.a. </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span className="lbl_dotted_underline"> Government charges </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span> ${this.props.repayments != null ? this.props.repayments.governmentCharges : null} p.a. </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 lbl_caption">
            <span className="lbl_dotted_underline"> Service fee </span>
          </div>
          <div className="col-md-5 lbl_value">
            <span> ${this.props.repayments != null ? this.props.repayments.serviceFee : null} p.a. </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 lbl_caption">  <span className="lbl_colored"> All Lending fee and charges</span> </div>
          <div className="col-md-12" > <button type="button" className="btn btn-primary cont_btn">Continue</button> </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    repayments: state.routeReducer.repayments
  })
}

export default connect(mapStateToProps, null)(Calcresult);
