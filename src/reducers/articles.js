import {normalizedArticles} from '../sampleArticles'
import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS, LOAD_ARTICLE
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
  loading: false,
  comments: []
})

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      return state.deleteIn(['entities', payload.id])
    case ADD_COMMENT:
      return state.updateIn(['entities', payload.articleId, 'comments'], comments => (
        comments.concat([payload.id])
      ))
    case LOAD_ALL_ARTICLES + START:
      return state.set('loading', true)
    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .set('entities', arrToMap(action.data, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
    case LOAD_ARTICLE + START:
      return state.setIn(['entities', payload.id, 'loading'], true)
    case LOAD_ARTICLE + SUCCESS:
      return state
        .setIn(['entities', payload.id], new ArticleRecord(action.data))
        .setIn(['entities', payload.id, 'loading'], false)
  }

  return state
}
