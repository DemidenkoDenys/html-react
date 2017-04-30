import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './css/Menu.css';

class Menu extends Component {

  render(){

    // const heightWindow = window.clientHeight;

    return(
      <aside id="menu">
        <ul className='main-menu'>
        {
          this.props.itemsProps.map((item, index) => {
            return <MenuItem key={ index } itemsProps={ item } />;
          })
        }
        </ul>
      </aside>
    )
  }
};

export default Menu;
