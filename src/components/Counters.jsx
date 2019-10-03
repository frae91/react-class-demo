import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 8 },
      { id: 4, value: 2 }
    ]
  }


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = (counter) => {
    const counters = [...this.state.counters];
    console.log(counters);
  }

  render() {
    return(
      <div>
        { this.state.counters.map(counter => <Counter key={ counter.id } counter={ counter } onDelete={ this.handleDelete } onIncrement={ this.handleIncrement } />)}
      </div>
    );
  }
}

export default Counters;
