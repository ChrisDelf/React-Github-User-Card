import React from 'react';

import './App.css';
import UserCard from './Components/UserCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }
  fetchUser = () => {
    fetch(`https://api.github.com/users/ChrisDelf`)
      .then(response => {

        return response.json();
      })
      .then(u => this.setState({ user: u }))

      .catch(err => {
        console.log('WE HAVE A PROBLEM', err);
      });
  };
fetchFollowers = () => {
  fetch(`https://api.github.com/users/ChrisDelf/followers`)
      .then(response => {

        return response.json();
      })
      .then(f => this.setState({ followers: f}))

      .catch(err => {
        console.log('WE HAVE A PROBLEM', err);
      });
  };



  render() {
    return (
      <div className="App">

      <UserCard props={this.state.user} />
      {this.state.followers.map(follower =>
        <UserCard key = {follower.id} props={follower} />
      )}
      </div>
    );
  }
}

export default App;
