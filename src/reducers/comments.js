import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'
import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS, START, SUCCESS} from '../constants/actions'

const defaultState = new Record({
  entities: new OrderedMap({}),
  pagination: {},
  total: false,
  loading: false
})()

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

export default (state = defaultState, action) => {
  const {payload, type} = action

  switch(type) {
    case ADD_COMMENT:
      return state.updateIn(['entities'], entities => (
        entities.merge({[payload.id]: new CommentRecord(payload.comment)})
      ))
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state
        .update('entities', entities => entities.merge(arrToMap(action.data, CommentRecord)))
    case LOAD_COMMENTS + START:
      return state.set('loading', true)
    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('loading', false)
        .update('pagination', pagination => ({
          ...pagination,
          [payload.page]: action.data.records.map(record => record.id)
        }))
        .update('entities', entities => entities.merge(arrToMap(action.data.records, CommentRecord)))
        .set('total', action.data.total)
  }

  return state
}
