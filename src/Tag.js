import React, { Component } from 'react';
import Attribute from './Attribute';
import { selectMenu, scrollToTag } from './WindowScrolling';

class Tag extends Component {

  componentDidMount(){
    this.currentElement = document.getElementById('tag'+this.props.itemsProps.id);

    this.recursionSetDataAttr(this.currentElement);
    this.replaceDescription(this.currentElement);
  }

  recursionSetDataAttr(elem){
    const id = this.props.itemsProps.id;
    elem.dataset.parentid = `tag${id}`;
    for(let i = 0, l = elem.children.length; i < l; i++){
      elem.children[i].dataset.parentid = `tag${id}`;
      if(elem.children[i].children.length > 0)
        this.recursionSetDataAttr(elem.children[i]);
    }
  }

  replaceDescription(elem){
    let desc = elem.querySelector('div.description');
    let textNodes = desc.childNodes;
    if(textNodes.length > 0 && textNodes[0].nodeType === 3){
      var descriptionTag = document.createElement('P');
      descriptionTag.classList.add('description');
      descriptionTag.dataset.parentid = `tag${this.props.itemsProps.id}`;
      descriptionTag.textContent = textNodes[0].textContent;
      desc.removeChild(textNodes[0]);
      desc.insertBefore(descriptionTag, desc.firstChild);
    }
  }

  handleFocus(){
    selectMenu(this.currentElement);
    scrollToTag(this.currentElement);
  }

  render(){

    let item = this.props.itemsProps;
    let attributeTempate = (item.attrs.length > 0)
      ? item.attrs.map((item, index) => { return <Attribute item={ item } key={ index } /> })
      : null;

    return (
      <div
        id={`tag${item.id}`}
        onFocus={ this.handleFocus.bind(this) }
        tabIndex={ this.props.tabindex }>
          { item.id !== 1 ? <hr /> : null }
          <h2 className='name'>{`<${ item.name }> `}<span> { item.shdes } </span></h2>
          <div className='description' dangerouslySetInnerHTML={{__html: item.des}}></div>
          { attributeTempate }
      </div>
    );
  }
};

export default Tag;
