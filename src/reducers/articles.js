import {normalizedArticles} from '../sampleArticles'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants/actions'
import {arrToMap} from '../helpers'

export default (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      const copyArticles = Object.assign({}, state)
      delete copyArticles[payload.id]
      return copyArticles
    case ADD_COMMENT:
      return {...state,
        [payload.articleId]: {
          ...state[payload.articleId],
          comments: state[payload.articleId].comments.concat([payload.id])
        }}
    case LOAD_ALL_ARTICLES:
      return {...state, ...arrToMap(action.data)}
  }

  return state
}
