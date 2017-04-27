import { combineReducers } from 'redux'
import position from './positionReducer'
import init from './initReducer'
import search from './searchReducer'
import filters from './filterReducer'
import categories from './categoriesReducer'

export default combineReducers({
  init,
  position,
  search,
  filters,
  categories
})
