import React, { Component } from 'react';
import Counters from './Counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 8 },
      { id: 4, value: 2 }
    ]
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters })
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(counters[index].value);
    this.setState({ counters });
  }


  render() {
    return (
            <div>
              <Counters
                onIncrement={this.handleIncrement}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                counters = {this.state.counters}
              />
            </div>
          );
  }
}

export default App;
