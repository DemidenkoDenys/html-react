import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmenuItem from './SubmenuItem';
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

    if(!this.props.itemsProps.name.includes(this.props.filterText))
      return false;

    // шаблон подменю с атрибутами
    let sub = (this.props.itemsProps.attrs &&
               this.props.itemsProps.attrs.length > 0 &&
               this.state.activeSubmenu ) ? <SubmenuItem itemsProps={ this.props.itemsProps.attrs } specs={ specsData }/> : null;

    // шаблон отображения количества атрибутов в пункте меню
    let countOfAttr = (this.props.itemsProps.attrs && this.props.itemsProps.attrs.length > 0) ? <span>{this.props.itemsProps.attrs.length} атрибутов</span> : null;

    return (
      <li className={`menu-item ${specsData[this.props.itemsProps.spec]}`}>
        <a href="#" onClick={ this.toggleSubmenu.bind(this) } >
          { this.props.itemsProps.name }
          { countOfAttr }
        </a>
        { sub }
      </li>
    )
  }
};

export default connect(
  store => ({ filterText: store.search })
)(MenuItem);
