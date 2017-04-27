const initFilters = {
  lineTag: false,
  haveAttributes: false,
  outdatedInHtml5: false,
  appearInHtml5: false,
  useInSeo: false,
  noRecommendToUse: false,
  doNotUse: false,
  opened: false
}

export default function filters(state = initFilters, action)
{
  if(action.type === 'FILTER'){
    var tempState = state;
    tempState[action.sign] = action.state;

    // скопировать исходное состояние без изменения оригинального

    console.log('tempState ', tempState);
    console.log('state', state);


    return tempState;
  }
  return state;
}
