import React, { Component } from 'react';
import Tag from './Tag';
import './css/main.css';

class Main extends Component {

  render(){

    return(
      <div className='main-tag-list'>
        {
          this.props.itemsProps.map((item, index) => {
              return <Tag itemsProps={ item } key={ index } />
          })
        }
      </div>
    )
  }
};

export default Main;
