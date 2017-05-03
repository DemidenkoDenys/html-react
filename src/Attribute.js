import React, { Component } from 'react';

class Attribute extends Component {

  componentDidMount(){
    this.replaceDescription();
  }

  replaceDescription(){
    let desc = this.refs.attrWrapper.querySelector('.attribute-description');
    let textNodes = desc.childNodes;
    if(textNodes.length > 0 && textNodes[0].nodeType === 3){
      var descriptionTag = document.createElement('SPAN');
      descriptionTag.classList.add('description');
      descriptionTag.dataset.parentid = `tag${this.props.item.id}`;
      descriptionTag.textContent = textNodes[0].textContent;
      desc.removeChild(textNodes[0]);
      desc.insertBefore(descriptionTag, desc.firstChild);
    }
  }

  render(){
    const item = this.props.item;
    return (<div className='attribute-wrapper' ref='attrWrapper'>
              <p className='attribute-title'><span className='title-name'>{ item.name }</span> - <span className='title-description'>{ item.shdes }</span></p>
              <p className='attribute-description' dangerouslySetInnerHTML={{__html: item.des}}></p>
            </div>);
  }
};

export default Attribute;
