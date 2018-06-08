import {combineReducers} from 'redux'
import articles from './articles'
import filters from './filters'

export default combineReducers({
  articles,
  filters
})
