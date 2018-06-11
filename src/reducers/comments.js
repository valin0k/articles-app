import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'
import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS} from '../constants/actions'

const defaultState = new Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: []
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
    case LOAD_ARTICLE_COMMENTS + START:
      return state.set('loading', true)
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state
        .update('entities', entities => entities.merge(arrToMap(action.data, CommentRecord)))
        .set('loading', false)
        .update('loaded', loaded => loaded.concat(payload.id))
  }

  return state
}
