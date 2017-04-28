const initCategories = {
    media: false,
    layout: false,
    picture: false,
    object: false,
    script: false,
    list: false,
    link: false,
    tables: false,
    text: false,
    form: false,
    frame: false
  }

export default function categories(state = initCategories, action)
{
  if(action.type === 'CATEGORIES_FILTER'){
    var tempState = {};
    for(var key in state)
      tempState[key] = state[key];
    tempState[action.sign] = action.state;
    return tempState;
  }
  return state;
}
