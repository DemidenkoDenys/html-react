export default function filters(state = '', action){
  if(action.type === 'SEARCH')
    return action.search
  return state;
}
