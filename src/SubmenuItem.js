import React, { Component } from 'react';

class SubmenuItem extends Component {

  render(){
    return(
      <ul className='submenu'>
        {
          this.props.itemsProps.map((item, index) => {
              return <li className={`submenu-item ${this.props.specs[item.spec]}`}
                        key={index}>
                          <a href="#">{item.name}</a>
                     </li>
          })
        }
      </ul>
    )
  }
};

export default SubmenuItem;
