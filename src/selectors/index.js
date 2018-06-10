import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const articlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {select, dateRange: {from, to}} = filters

  return mapToArr(articles).filter(article => (
    (!select.length || select.some(selected => selected.value === article.id)) &&
    (!from || Date.parse(article.date) > Date.parse(from)) &&
    (!to || Date.parse(article.date) < Date.parse(to))
  ))
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id]
})
