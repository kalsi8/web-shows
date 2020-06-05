import { combineReducers } from 'redux'
import searchHeader from './SearchHeader'
import showList from './ShowList'

function createReducer () {
  return combineReducers({
    searchHeader,
    showList
  })
}

export default createReducer
