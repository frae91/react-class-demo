import React, {Component} from 'react';

class Users extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(res => res.json())
    .then(data => this.setState({users:data.results}));
  }

  render() {
    return(
      <div>
        <h1>THIS IS THE USERS PAGE</h1>
        <ul>{ this.state.users.map(user => <li key={user.url}>{user.name}</li>) }
        </ul>
      </div>
    );
  }
}

export default Users;
