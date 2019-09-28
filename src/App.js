import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

class App extends Component {
  state = {
    counters: [
                { id: 1, value: 2 },
                { id: 2, value: 5 },
                { id: 3, value: 2 },
                { id: 4, value: 3 }
              ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value=0;
      return c;
    });
    this.setState( { counters })
  }

  handleDelete = (counter) => {
    console.log(counter);
    const counters = this.state.counters.filter(c => c.id !== counter);
    this.setState( { counters });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Counters onReset={ this.handleReset } onDelete={ this.handleDelete } onIncrement={ this.handleIncrement } counters={ this.state.counters } />
      </React.Fragment>
    );
  }
}

export default App;
