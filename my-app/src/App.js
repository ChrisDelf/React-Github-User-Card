import React from 'react';

import './App.css';
import UserCard from './Components/UserCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.fetchUser();
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

  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UserCard props={this.state.user} />
      </div>
    );
  }
}

export default App;
