import {normalizedArticles} from '../sampleArticles'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants/actions'
import {arrToMap} from '../helpers'

const defaultState = arrToMap(normalizedArticles) || {}

export default (state = defaultState, action) => {
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
  }

  return state
}
