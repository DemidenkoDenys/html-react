import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component {

  constructor(props){
    super(props);
    this.state = { active: true }
  }

  toggle(){   // состояние для применения фильтра
    this.props.onChangeFilter(this.props.filterSign, this.filterCheckbox.checked);
  }

  render(){

    return (
      <label>
        <input
          type='checkbox'
          value={ this.props.filterSign }
          ref={(checkbox) => { this.filterCheckbox = checkbox }}
          onChange={ this.toggle.bind(this) }
          />
        { this.props.filterName }
      </label>
    )
  }
};

export default connect(
  null,
  dispatch => ({ onChangeFilter: (sign, state) => dispatch({ type: 'FILTER', sign: sign, state: state }) }),
)(Filter);
