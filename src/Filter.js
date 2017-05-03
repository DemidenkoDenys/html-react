import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {

  toggle(){   // состояние для применения фильтра

    // отключение блочных
    if( this.filterCheckbox.value === 'lineTag' && this.filterCheckbox.checked === true && document.getElementById('blockTag').checked === true){
        document.getElementById('blockTag').checked = false;
        this.props.onChangeFilter('blockTag', false) }

    // отключение строчных
    if( this.filterCheckbox.value === 'blockTag' && this.filterCheckbox.checked === true && document.getElementById('lineTag').checked === true){
        document.getElementById('lineTag').checked = false;
        this.props.onChangeFilter('lineTag', false) }

    // изменение состояни
    this.props.onChangeFilter(this.props.filterSign, this.filterCheckbox.checked);
  }

  render(){

    return (
      <div className='filter-wrapper'>
        <input
          checked={ this.props.filters[this.props.filterSign] }
          type='checkbox'
          id={ this.props.filterSign }
          value={ this.props.filterSign }
          ref={(checkbox) => { this.filterCheckbox = checkbox }}
          onChange={ this.toggle.bind(this) }
          />
        <label htmlFor={ this.props.filterSign } className='filter-label'>{ this.props.filterName }</label>
      </div>
    )
  }
};

export default connect(
  store => ({ filters: store.filters }),
  dispatch => ({ onChangeFilter: (sign, state) => dispatch({ type: 'FILTER', sign: sign, state: state }) }),
)(Filter);
