import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmenuItem from './SubmenuItem';
import validateTag from './CheckFilters';
import specsData from './data/specs.json';

class MenuItem extends Component {

  constructor(props){
    super(props);
    this.state = { activeSubmenu: false }
  }

  toggleSubmenu(e){
    e.preventDefault();
    this.setState({ activeSubmenu: !this.state.activeSubmenu });
  }

  render(){

    const item = this.props.itemsProps;

    // шаблон подменю атрибутов
    const sub = (item.attrs &&
               item.attrs.length > 0 &&
               this.state.activeSubmenu ) ? <SubmenuItem itemsProps={ item.attrs } specs={ specsData }/> : null;

    // шаблон отображения количества атрибутов в пункте меню
    const countOfAttr = (item.attrs && item.attrs.length > 0) ? <span>{item.attrs.length} атрибутов</span> : null;

    const tempComponent = (
      <li className={`menu-item ${specsData[item.spec]}`}>
        <a href="#" onClick={ this.toggleSubmenu.bind(this) } >
          { item.name }
          { countOfAttr }
        </a>
        { sub }
      </li>
    );

    return validateTag(item, this.props.filters, this.props.filterText, this.props.categories, tempComponent);
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories })
)(MenuItem);
