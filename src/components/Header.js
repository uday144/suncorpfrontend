import React, { Component } from 'react';
import '../App.css';
import suncorplogo from '../images/suncorplogo.png'
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <div>
            <img className="logo" src={suncorplogo} alt="suncorplogo" />
          </div>

          <div className="comp_name">
            <span>Suncorp Lending</span>
          </div>

        </div>
        <div className="help_section">
          <span>Need Help? Call us on 13 11 55, Mon-Fri 08:30am-07:00pm (AEST)</span>
        </div>
      </header>
    );
  }
}

export default Header;
