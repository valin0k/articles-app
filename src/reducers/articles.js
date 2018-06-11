import {normalizedArticles} from '../sampleArticles'
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS
} from '../constants/actions'
import {arrToMap} from '../helpers'
import {OrderedMap, Record} from 'immutable'

const defaultState = new Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false
})()

const ArticleRecord = Record({
  title: '',
  text: null,
  date: null,
  id: null,
  comments: []
})

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id])
    case ADD_COMMENT:
      return {...state,
        [payload.articleId]: {
          ...state[payload.articleId],
          comments: state[payload.articleId].comments.concat([payload.id])
        }}
    case START + LOAD_ALL_ARTICLES:
      return state.set('loading', true)
    case SUCCESS + LOAD_ALL_ARTICLES:
      return state
        .set('entities', arrToMap(action.data, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
  }

  return state
}
