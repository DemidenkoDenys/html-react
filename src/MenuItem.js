import React, { Component } from 'react';
import SubmenuItem from './SubmenuItem';

import specsData from './data/specs.json';

import { scrollToTag } from './WindowScrolling';

class MenuItem extends Component {

  constructor(props){
    super(props);
    this.state = { activeSubmenu: false }
  }

  toggleSubmenu(e){
    e.preventDefault();
    this.setState({ activeSubmenu: !this.state.activeSubmenu });
  }

  handleFocus(){
  }

  handleClick(){
    scrollToTag(document.getElementById(`tag${this.props.itemsProps.id}`));
    this.refs.menuItem.focus();
  }

  render(){

    const item = this.props.itemsProps;

    // шаблон подменю атрибутов
    const sub = (item.attrs &&
               item.attrs.length > 0 &&
               this.state.activeSubmenu ) ? <SubmenuItem itemsProps={ item.attrs } specs={ specsData }/> : null;

    // шаблон отображения количества атрибутов в пункте меню
    const countOfAttr = (item.attrs && item.attrs.length > 0) ? <span>{item.attrs.length} атрибутов</span> : null;

    return (
      <li
        className={`menu-item ${specsData[item.spec]}`}
        id={`menu-tag${item.id}`}
        ref='menuItem'
        onFocus={ this.handleFocus.bind(this) }
        onClick={ this.handleClick.bind(this) }
        tabIndex={`${item.id - 2}`}>
          <a href="#" onClick={ this.toggleSubmenu.bind(this) }>
            <strong className={ item.name.length > 12 ? 'lowercase' : '' }>{ '<' + item.name + '>' }</strong>
            { countOfAttr }
          </a>
          { sub }
      </li>
    );
  }
};

export default MenuItem;
