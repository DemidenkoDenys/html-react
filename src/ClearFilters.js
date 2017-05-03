import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClearFilters extends Component {

  isFiltersOff(){
    for(var key in this.props.filters)
      if(this.props.filters[key] === true)
        return true;
    return false;
  }

  isCategoriesOff(){
    for(let key in this.props.categories)
      if(this.props.categories[key] === true)
        return true;
    return false;
  }

  clearAllFilters(){

    if(this.props.filterText !== '')
      this.props.onClearSearch('SEARCH', '');

    if(this.isFiltersOff()){
      for(let key in this.props.filters){
        if(this.props.filters[key])
          this.props.onClear('FILTER', key, false);
      }
    }

    if(this.isCategoriesOff()){
      for(let key in this.props.categories){
        if(this.props.categories[key])
          this.props.onClear('CATEGORIES_FILTER', key, false);
      }
    }

  }

  render(){

    let disabled = (this.props.filterText === '' && !this.isCategoriesOff() && !this.isFiltersOff());

    return (
      <button
        id='clear-button'
        disabled={ disabled }
        onClick={ this.clearAllFilters.bind(this) }>
        Очистить фильтры
      </button>
    );
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories }),
  dispatch => ({ onClear: (type, sign, state) => dispatch({ type: type, sign: sign, state: state }),
                 onClearSearch: (type, search) => dispatch({ type: type, search: search }) }  )
)(ClearFilters);
