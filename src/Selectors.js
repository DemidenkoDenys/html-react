import React, { Component } from 'react';
import Filter from './Filter';
import CategoriesFilter from './CategoriesFilter';
import Search from './Search';
import ClearFilters from './ClearFilters';
import './css/filters.css';
import typesData from './data/types.json';
import filtersData from './data/filters.json';
import { connect } from 'react-redux';

class Selectors extends Component {

  constructor(props){
    super(props);
    this.state = { active: true }
  }

  toggle(){   // состояние для отображения панели фильтров
    this.setState({ active: !this.state.active });
  }

  render(){

    let filters = [];
    for(let i in filtersData){
      if (filtersData.hasOwnProperty(i)){
        filters.push(<Filter key={i} filterName={ filtersData[i] } filterSign={ i } />);
      }
    }

    let categories = [];
    for(let i in typesData){

      if (typesData.hasOwnProperty(i)){
        categories.push(<CategoriesFilter key={ typesData[i].id } filterName={ typesData[i].name } filterSign={ i } />);
      }
    }

    return (
      <aside
            //  onClick={ this.toggle.bind(this) }
             className={`filters ${this.state.active ? 'active' : ''}`}>

        <div className='filter-list search'>
          <h3>Поиск</h3>
          <Search />
        </div>

        <div className='filter-list'>
          <h3>Отобрать теги</h3>
          { filters }
        </div>

        <div className='filter-list category'>
          <h3>Категории тегов</h3>
          { categories }
        </div>

        <div>
          <ClearFilters />
        </div>

      </aside>)
  }
};

export default connect(
  store => ({ filtersSigns: store.filters })
)(Selectors);
