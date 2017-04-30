import React, { Component } from 'react';
import { connect } from 'react-redux';
import validateTag from './CheckFilters';

class Tag extends Component {

  componentDidMount(){
    const id = this.props.itemsProps.id;

    this.refs.tagWrapper.dataset.parentid = `tag${id}`;
    function recursionSetDataAttr(elem){
      for(let i = 0, l = elem.children.length; i < l; i++){
        elem.children[i].dataset.parentid = `tag${id}`;
        if(elem.children[i].children.length > 0)
          recursionSetDataAttr(elem.children[i]);
      }
    };

    recursionSetDataAttr(this.refs.tagWrapper);
  }

  handleFocus(e){
    console.log('Focused ', this.props.itemsProps.id);
  }

  render(){

    const item = this.props.itemsProps;

    const attributeTempate = (item.attrs.length > 0)
      ? item.attrs.map((item, index) => {
          // return (<Attribute item={ item } active='false'/>)
          return (<div key={ index }>
                    { `${ item.name } - ${ item.shdes }` }
                    <p className='attribute-desciption' dangerouslySetInnerHTML={{__html: item.des}}></p>
                  </div>);
        })
      : null;

    const tempComponent = (
      <div
        id={`tag${item.id}`}
        ref='tagWrapper'
        onFocus={ this.handleFocus.bind(this) }
        tabIndex={`${item.id - 2}`}>
          { item.id !== 1 ? <hr /> : null }
          <h2 className='name'>{`<${ item.name }> `}<span> { item.shdes } </span></h2>
          <div className='description' dangerouslySetInnerHTML={{__html: item.des}}></div>
          <div className='attribute-wrapper'>{ attributeTempate }</div>
      </div>
    );

    // фильтры отображения
    return validateTag(item, this.props.filters, this.props.filterText, this.props.categories, tempComponent);
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories })
)(Tag);
