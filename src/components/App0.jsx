import React, { Component } from 'react';
import Counters from './Counters';
import Navbar from './Navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 8 },
      { id: 4, value: 2 }
    ],
    last: 4
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = (counter) => {
    const counters = this.state.counters.filter(c => c !== counter);
    this.setState({ counters: counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters })
  }

  handleAdd = () => {
    const counters = [...this.state.counters];
    var lastIndex = this.state.last + 1;
    const object = { id: lastIndex, value: 0 };
    counters.push(object);
    this.setState( { last: lastIndex, counters: counters });
  }

  getTotal() {
    var sum = 0;
    this.state.counters.map((counter) => {
      sum += counter.value;
    });
    return sum;
  }

  render() {
    return (
            <div>
              <Navbar counters={this.state.counters} total={this.getTotal()}/>
              <Counters
                onAdd={this.handleAdd}
                onDecrement={this.handleDecrement}
                onIncrement={this.handleIncrement}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                counters={this.state.counters}
              />
            </div>
          );
  }
}

export default App;
