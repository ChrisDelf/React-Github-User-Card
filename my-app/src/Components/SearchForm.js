import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitItem = event => {
    event.preventDefault();
    this.props.fetchSearch(this.state.item);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.item}
            placeholder="Type here"
            name="item"
            onChange={this.handleChanges}
          />
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default SearchForm;
