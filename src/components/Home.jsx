import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    message: null,
    users: [],
    name: null
  };

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(data => this.setState({ message: data.message }));
  }

  fetchData = () => {
    fetch('/users')
    .then(res => res.json())
    .then(data => this.setState({users: data}));
  }

  addToDb(name) {
    axios.post('http://localhost:3001/users/add', {
      name: name,
    });
  }

  render() {
    return(
      <div>
        <h1>{ this.state.message }</h1>
        <button className="btn btn-success" onClick={ this.fetchData }>Get data</button>
        { this.state.users.length > 0 ? <ul>{this.state.users.map(user => <li key={user._id}>{user.name}</li>)}</ul> : <h4>No user found</h4> }

        <div className="d-flex justify-content-center">
          <input type="text" name="name" className="form-control" placeholder="Enter name"  onChange={(e) => this.setState({ name: e.target.value })} style={{width: '200px'}} />
          <button className="btn btn-success" onClick={() => this.addToDb(this.state.name)}>
                    ADD
                  </button>
        </div>
      </div>
    );
  }
}

export default Home;
