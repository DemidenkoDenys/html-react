const initFilters = {
  lineTag: false,
  blockTag: false,
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
    var tempState = {};
    for(var key in state)
      tempState[key] = state[key];
    tempState[action.sign] = action.state;
    return tempState;
  }
  return state;
}
