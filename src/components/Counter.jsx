import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className='m-2'>
        <h5>Counter #{ this.props.counter.id }</h5>
        <span className={ this.getBadgeClasses() }>{ this.formatBadge() }</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-2">+</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.props.counter.value === 0 ? ' badge-warning' : ' badge-primary';
    return classes;
  }

  formatBadge() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
