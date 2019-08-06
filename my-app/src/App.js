import React from 'react';

import './App.css';
import UserCard from './Components/UserCards';
import SearchForm from './Components/SearchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      search: {}
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
fetchSearch = (search) => {
  fetch(`https://api.github.com/users/${search}`)
      .then(response => {

        return response.json();
      })
      .then(s => this.setState({ search: s}))

      .catch(err => {
        console.log('WE HAVE A PROBLEM', err);
      });
};








  render() {
    return (
      <div className="App">
      <SearchForm fetchSearch = {this.fetchSearch}/>
      <UserCard props={this.state.user} />
      {this.state.followers.map(follower =>
        <UserCard key = {follower.id} props={follower} />
      )}
      {this.state.search ?(<UserCard props ={this.state.search}/>) : this.state.search}
      </div>
    );
  }
}

export default App;
