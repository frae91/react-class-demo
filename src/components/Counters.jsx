import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

  render() {
    return(
      <div className='container'>
        <button onClick={ this.props.onAdd } className="btn btn-success m-2">Add Counter</button>
        <button onClick={ this.props.onReset } className="btn btn-warning m-2">Reset</button>
        { this.props.counters.map(
          counter => (
            <Counter key={ counter.id } counter={ counter } onDelete={ this.props.onDelete } onIncrement={ this.props.onIncrement } />
            )
          )
        }
      </div>
    );
  }
}

export default Counters;
