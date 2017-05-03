import React, { Component } from 'react';
import { connect } from 'react-redux';
import validateTag from './CheckFilters';
import Tag from './Tag';
import './css/main.css';

class Main extends Component {

  render(){

    return(
      <div className='main-tag-list'>
        {
          this.props.itemsProps.map((item, index) => {
              let tempComponent = <Tag itemsProps={ item } key={ index } tabindex={ index - 1 } />;
              return validateTag(item, this.props.filters, this.props.filterText, this.props.categories, tempComponent);
          })
        }
      </div>
    )
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories })
)(Main);
