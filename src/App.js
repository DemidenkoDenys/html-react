import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
import Selectors from './Selectors';
import tagsData from './data/data.json';

class App extends Component {

  // получаем все теги
  parseTagsJSON(data){
    // для временного хранения тегов
    var tempData = {};
    // перебор массива всех данных
    for(let i = 0, l = data.length; i < l; i++){
        // если тег, то...
        if(data[i].attr === 0){
          // сохраняем ссылку на объект тега
          tempData['tag' + data[i].id] = data[i];
          // добавляем свойство для хранения атрибутов в объект тега
          tempData['tag' + data[i].id].attrs = [];
        } else {
          // если атрибут, то добавляем его в .attrs[] тега, которому принадлежит атрибут
          tempData['tag' + data[i].attr].attrs.push(data[i]);
        }
    }

    return data.filter((item) => {
       return item.attr === 0;
    });
  }

  render(){

    const mainData = this.parseTagsJSON(tagsData);

    return(
      <main id='main'>
        <Menu itemsProps={ mainData }/>
        <Main itemsProps={ mainData }/>
        <Selectors />
      </main>
    )
  }
};

 export default App;
