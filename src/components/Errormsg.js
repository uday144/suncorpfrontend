import React, { Component } from 'react';

class Errormsg extends Component {
    render() {
        return (
            <span className="alert alert-danger">Error: {this.props.Errormsg}</span>
          );
      }
}

export default Errormsg 
