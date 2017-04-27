import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = { searchText: '' }
  }

  searchTag(e){
    e.preventDefault();
    this.setState({ searchText: this.searchInput.value });
    this.props.onSearchTag(this.searchInput.value);
  }

  render(){
    return <form onSubmit={ this.searchTag.bind(this) }>
      <input
        type='text'
        placeholder='введите текст'
        ref={(input) => { this.searchInput = input }} />
      </form>
  }
};

export default connect(
  null,
  dispatch => ({ onSearchTag: (name) => dispatch({ type: 'SEARCH', search: name }) }),
)(Search);
