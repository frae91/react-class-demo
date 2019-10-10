import React, { Component } from 'react';

class Navbar extends Component {
  getTotal() {
    var sum = 0;
    this.props.counters.map(counter => {
      sum += counter.value;
    });
    return sum;
  }
  render() {
    return(
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0">Total:
          <span className="badge badge-success m-2">{ this.getTotal() }</span>
        </span>
      </nav>
    );
  }
}

export default Navbar;
