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
  }

  render() {
    return(
      <div>
        { this.state.counters.map(counter => <Counter key={ counter.id } counter={ counter }/>)}
      </div>
    );
  }
}

export default Counters;
