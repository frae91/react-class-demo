import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.counter.value
  }
  formatBadge() {
    return this.state.count===0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  render() {
    return(
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatBadge() }</span>
        <button onClick={ () => { this.props.onIncrement(this.props.counter) } } className="btn btn-success btn-sm m-2 ">+</button>
        <button onClick={ () => { this.props.onDelete(this.props.counter.id) } } className="btn btn-danger btn-sm m-2">Del</button>
      </div>
    );
  }
}

export default Counter;
