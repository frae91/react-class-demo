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
  disable() {
    return this.props.counter.value===0? true : false;
  }

  render() {
    return(
      <div>
        <button onClick={ () => { this.props.onDecrement(this.props.counter) } } className="btn btn-secondary btn-sm m-2 " disabled={ this.disable() }>-</button>
        <span className={ this.getBadgeClasses() }>{ this.formatBadge() }</span>
        <button onClick={ () => { this.props.onIncrement(this.props.counter) } } className="btn btn-secondary btn-sm m-2 ">+</button>
        <button onClick={ () => { this.props.onDelete(this.props.counter) } } className="btn btn-danger btn-sm m-2">Del</button>
      </div>
    );
  }
}

export default Counter;
