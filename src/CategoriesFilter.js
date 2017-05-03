import React, { Component } from 'react';
import { connect } from 'react-redux';

class categoriesFilter extends Component {

  constructor(props){
    super(props);
    this.state = { active: true }
  }

  toggle(){   // состояние для применения фильтра
    this.props.onChangeCategory(this.props.filterSign, this.filterCheckbox.checked);
  }

  render(){

    return (<div className='filter-wrapper'>
        <input
          checked={ this.props.categories[this.props.filterSign] }
          type='checkbox'
          id={ this.props.filterSign }
          value={ this.props.filterSign }
          ref={(checkbox) => { this.filterCheckbox = checkbox }}
          onChange={ this.toggle.bind(this) }
          />
        <label htmlFor={ this.props.filterSign }>{ this.props.filterName }</label>
      </div>
    )
  }
};

export default connect(
    store => ({ categories: store.categories }),
  dispatch => ({ onChangeCategory: (sign, state) => dispatch({ type: 'CATEGORIES_FILTER', sign: sign, state: state }) }),
)(categoriesFilter);
