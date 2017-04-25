import React, { Component } from 'react';
import Tags from './tags.json';
import Menu from './Menu';
import Main from './Main';
import Filters from './Filters';

class App extends Component {
  render(){
    return(
      <div>
        <Menu item={Tags}/>
        <Main item={Tags}/>
        <Filters />
      </div>
    )
  }
};

export default App;
