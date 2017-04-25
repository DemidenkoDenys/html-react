import React, { Component } from 'react';

class Menu extends Component {
  render(){
    return(
      <ul>
        {
          this.props.item.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>
    )
  }
};

export default Menu;
