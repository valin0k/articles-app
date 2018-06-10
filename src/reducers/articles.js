import {normalizedArticles} from '../sampleArticles'
import {DELETE_ARTICLE} from '../constants/actions'
import {arrToMap} from '../helpers'

const defaultState = arrToMap(normalizedArticles) || {}

export default (state = defaultState, action) => {
  const {type, payload} = action

  switch (type) {
    case DELETE_ARTICLE:
      const copyArticles = Object.assign({}, state)
      delete copyArticles[payload.id]
      return copyArticles
  }

  return state
}
