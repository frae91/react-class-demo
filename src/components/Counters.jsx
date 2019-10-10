import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  render() {
    return(
      <div>
        <button className="btn btn-success m-2" onClick={ this.props.onAdd }>Add</button>
        <button className="btn btn-warning m-2" onClick={ this.props.onReset }>Reset</button>
        { this.props.counters.map(counter => <Counter key={ counter.id } counter={ counter } onDelete={ this.props.onDelete } onDecrement={this.props.onDecrement} onIncrement={ this.props.onIncrement } />)}
      </div>
    );
  }
}

export default Counters;
