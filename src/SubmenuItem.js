import React, { Component } from 'react';

class SubmenuItem extends Component {

  preventClick(e){
    e.preventDefault();
  }

  render(){
    return(
      <ul className='submenu'>
        {
          this.props.itemsProps.map((item, index) => {
              return <li className='submenu-item'
                        key={index}>
                          <i className={`${this.props.specs[item.spec]}`}></i>
                          <a href="#" onClick={ this.preventClick.bind(this) }>{item.name}</a>
                     </li>
          })
        }
      </ul>
    )
  }
};

export default SubmenuItem;
