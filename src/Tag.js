import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tag extends Component {

  render(){

    if(!this.props.itemsProps.name.includes(this.props.filterText))
      return false;

    const item = this.props.itemsProps;

    return(
      <div id={`tag${item.id}`}>
        { item.id !== 1 ? <hr /> : null }
        <h2 className='tag-name'>{`<${ item.name }>`}</h2>
        <h3 className='tag-short-description'>{ item.shdes }</h3>
        <div className='tag-description' dangerouslySetInnerHTML={{__html: item.des}}></div>
      </div>
    )
  }
};

export default connect(
  store => ({ filterText: store.search })
)(Tag);
