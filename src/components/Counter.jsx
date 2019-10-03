import React, { Component } from 'react';

class Counter extends Component {
  formatBadge() {
    return this.props.counter.value===0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }


  render() {
    return(
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatBadge() }</span>
        <button onClick={ () => { this.props.onIncrement(this.props.counter) } } className="btn btn-success btn-sm m-2 ">+</button>
        <button onClick={ this.props.onDelete } className="btn btn-danger btn-sm m-2">Del</button>
      </div>
    );
  }
}

export default Counter;
