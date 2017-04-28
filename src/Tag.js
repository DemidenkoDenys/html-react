import React, { Component } from 'react';
import { connect } from 'react-redux';
import validateTag from './CheckFilters';

class Tag extends Component {

  render(){
    const item = this.props.itemsProps;
    const tempComponent = (
      <div id={`tag${item.id}`}>
        { item.id !== 1 ? <hr /> : null }
        <h2 className='tag-name'>{`<${ item.name }>`}</h2>
        <h3 className='tag-short-description'>{ item.shdes }</h3>
        <div className='tag-description' dangerouslySetInnerHTML={{__html: item.des}}></div>
      </div>);

    // фильтры отображения
    return validateTag(item, this.props.filters, this.props.filterText, this.props.categories, tempComponent);
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories })
)(Tag);
