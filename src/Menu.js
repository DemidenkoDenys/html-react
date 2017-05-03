import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import validateTag from './CheckFilters';
import './css/Menu.css';

class Menu extends Component {

  wheeler(e){
    e.preventDefault();
    this.refs.MainMenu.scrollTop += e.deltaY;
  }

  render(){

    const styleSVG = {
      stroke: 'lightgrey',
      strokeWidth: '2',
      strokeDasharray: '3'
    };

    const fullHeightStyles = {
      height: document.documentElement.clientHeight
    };

    return(
      <aside id="menu" ref='MainMenu' onWheel={ this.wheeler.bind(this) } style={ fullHeightStyles } >

        <svg id='svgMenuTag' style={ fullHeightStyles } >
          <line x1='0' y1='0' x2='0' y2='0' style={ styleSVG } />
        </svg>

        <ul className='mainMenu'>
        {
          this.props.itemsProps.map((item, index) => {
            let tempComponent = <MenuItem key={ index } itemsProps={ item } />;
            return validateTag(item, this.props.filters, this.props.filterText, this.props.categories, tempComponent);
          })
        }
        </ul>
      </aside>
    )
  }
};

export default connect(
  store => ({ filterText: store.search, filters: store.filters, categories: store.categories })
)(Menu);
