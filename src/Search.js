import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props){
    super(props)
    this.state = { searchText: '', init: true }
  }

  searchTag(e){
    e.preventDefault();
    this.props.onSearchTag(this.searchInput.value);
  }

  setValue(e){
    this.setState({ searchText: e.target.value });
  }

  render(){

    return (<form onSubmit={ this.searchTag.bind(this) }>
        <div className='search-field'>
          <input
            type='text'
            placeholder='введите текст'
            value={ this.state.searchText }
            ref={(input) => { this.searchInput = input }}
            onChange={ this.setValue.bind(this) } />
          <button className='submit-search'><i></i></button>
        </div>
      </form>
    )
  }
};

export default connect(
  store => ({ filterSearch: store.search }),
  dispatch => ({ onSearchTag: (search) => dispatch({ type: 'SEARCH', search: search }) }),
)(Search);
